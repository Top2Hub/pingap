// Copyright 2024-2025 Tree xie.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use super::{list_certificates, LOG_CATEGORY};
use pingap_core::Error as ServiceError;
use pingap_core::{
    NotificationData, NotificationLevel, NotificationSender,
    SimpleServiceTaskFuture,
};
use std::sync::Arc;
use tracing::error;

/// Number of seconds in a day
const SECONDS_PER_DAY: i64 = 24 * 3600;
/// Default certificate expiration warning threshold (7 days)
const DEFAULT_EXPIRATION_WARNING_DAYS: u16 = 7;
/// Check interval in minutes
const CHECK_INTERVAL_MINUTES: u32 = 24 * 60;

/// Performs periodic certificate validity checks and sends notifications for issues
///
/// # Arguments
///
/// * `count` - Counter for determining check intervals
///
/// # Returns
///
/// * `Ok(true)` if check was performed
/// * `Ok(false)` if check was skipped due to interval
/// * `Err(ServiceError)` if an error occurred during the check
async fn do_validity_check(
    count: u32,
    sender: Option<Arc<NotificationSender>>,
) -> Result<bool, ServiceError> {
    if count % CHECK_INTERVAL_MINUTES != 0 {
        return Ok(false);
    }

    let now = pingap_util::now_sec() as i64;
    let mut name_list = vec![];
    for (name, cert) in list_certificates().iter() {
        let Some(info) = &cert.info else {
            continue;
        };
        if info.acme.is_some() {
            continue;
        }
        let mut buffer_days = cert.buffer_days;
        if buffer_days == 0 {
            buffer_days = DEFAULT_EXPIRATION_WARNING_DAYS;
        }
        let time_offset = (buffer_days as i64) * SECONDS_PER_DAY;

        if now > info.not_after - time_offset {
            error!(
                category = LOG_CATEGORY,
                expired_date = info.not_after.to_string(),
                name,
                "certificate will be expired",
            );
            name_list.push(name.clone());
            continue;
        }

        if now < info.not_before {
            error!(
                category = LOG_CATEGORY,
                valid_date = info.not_before.to_string(),
                name,
                "certificate is not valid",
            );
            name_list.push(name.clone());
            continue;
        }
    }

    if !name_list.is_empty() {
        if let Some(sender) = &sender {
            sender
                .notify(NotificationData {
                    level: NotificationLevel::Warn,
                    category: "tls_validity".to_string(),
                    message: format!(
                        "certificate {} will be expired",
                        name_list.join(",")
                    ),
                    ..Default::default()
                })
                .await;
        }
    }
    Ok(true)
}

/// Creates a new background service for certificate validity checking
///
/// # Returns
///
/// A tuple containing:
/// * Service name as String
/// * Service task future for executing validity checks
pub fn new_certificate_validity_service(
    sender: Option<Arc<NotificationSender>>,
) -> (String, SimpleServiceTaskFuture) {
    let task: SimpleServiceTaskFuture = Box::new(move |count: u32| {
        Box::pin(do_validity_check(count, sender.clone()))
    });
    ("validity_checker".to_string(), task)
}
