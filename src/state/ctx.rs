// Copyright 2024 Tree xie.
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

use crate::util;
use crate::util::format_duration;
use bytes::{Bytes, BytesMut};
use http::StatusCode;
use pingora_limits::inflight::Guard;
use std::time::Duration;

pub trait ModifyResponseBody: Sync + Send {
    fn handle(&self, data: Bytes) -> Bytes;
}

pub struct CompressionStat {
    pub in_bytes: usize,
    pub out_bytes: usize,
    pub duration: Duration,
}

impl CompressionStat {
    pub fn ratio(&self) -> f64 {
        (self.in_bytes as f64) / (self.out_bytes as f64)
    }
}

pub struct State {
    pub processing: i32,
    pub accepted: u64,
    pub location_processing: i32,
    pub location_accepted: u64,
    pub created_at: u64,
    pub tls_version: Option<String>,
    pub status: Option<StatusCode>,
    pub connection_time: u64,
    pub response_body_size: usize,
    pub reused: bool,
    pub location: String,
    pub upstream_address: String,
    pub client_ip: Option<String>,
    pub remote_addr: Option<String>,
    pub guard: Option<Guard>,
    pub request_id: Option<String>,
    pub cache_prefix: Option<String>,
    pub cache_lookup_time: Option<u64>,
    pub cache_lock_time: Option<u64>,
    pub cache_max_ttl: Option<Duration>,
    pub upstream_connect_time: Option<u64>,
    pub upstream_connected: Option<u32>,
    pub upstream_processing_time: Option<u64>,
    pub upstream_response_time: Option<u64>,
    pub payload_size: usize,
    pub compression_stat: Option<CompressionStat>,
    pub modify_response_body: Option<Box<dyn ModifyResponseBody>>,
    pub response_body: Option<BytesMut>,
}

impl Default for State {
    fn default() -> Self {
        State {
            processing: 0,
            accepted: 0,
            location_processing: 0,
            location_accepted: 0,
            tls_version: None,
            status: None,
            connection_time: 0,
            created_at: util::now().as_millis() as u64,
            response_body_size: 0,
            reused: false,
            location: "".to_string(),
            upstream_address: "".to_string(),
            client_ip: None,
            remote_addr: None,
            guard: None,
            request_id: None,
            cache_prefix: None,
            cache_lookup_time: None,
            cache_lock_time: None,
            cache_max_ttl: None,
            upstream_connect_time: None,
            upstream_connected: None,
            upstream_processing_time: None,
            upstream_response_time: None,
            payload_size: 0,
            compression_stat: None,
            modify_response_body: None,
            response_body: None,
        }
    }
}

const ONE_HOUR_MS: u64 = 60 * 60 * 1000;

impl State {
    #[inline]
    pub fn get_upstream_response_time(&self) -> Option<u64> {
        if let Some(value) = self.upstream_response_time {
            if value < ONE_HOUR_MS {
                return Some(value);
            }
        }
        None
    }
    #[inline]
    pub fn get_upstream_connect_time(&self) -> Option<u64> {
        if let Some(value) = self.upstream_connect_time {
            if value < ONE_HOUR_MS {
                return Some(value);
            }
        }
        None
    }
    #[inline]
    pub fn get_upstream_processing_time(&self) -> Option<u64> {
        if let Some(value) = self.upstream_processing_time {
            if value < ONE_HOUR_MS {
                return Some(value);
            }
        }
        None
    }
    #[inline]
    pub fn append_value(&self, mut buf: BytesMut, key: &str) -> BytesMut {
        match key {
            "reused" => {
                if self.reused {
                    buf.extend(b"true");
                } else {
                    buf.extend(b"false");
                }
            },
            "upstream_addr" => buf.extend(self.upstream_address.as_bytes()),
            "processing" => buf
                .extend(itoa::Buffer::new().format(self.processing).as_bytes()),
            "upstream_connect_time" => {
                if let Some(ms) = self.get_upstream_connect_time() {
                    buf = format_duration(buf, ms);
                }
            },
            "upstream_connected" => {
                if let Some(value) = self.upstream_connected {
                    buf.extend(itoa::Buffer::new().format(value).as_bytes());
                }
            },
            "upstream_processing_time" => {
                if let Some(ms) = self.get_upstream_processing_time() {
                    buf = format_duration(buf, ms);
                }
            },
            "upstream_response_time" => {
                if let Some(ms) = self.get_upstream_response_time() {
                    buf = format_duration(buf, ms);
                }
            },
            "location" => buf.extend(self.location.as_bytes()),
            "connection_time" => {
                buf = format_duration(buf, self.connection_time)
            },
            "tls_version" => {
                if let Some(value) = &self.tls_version {
                    buf.extend(value.as_bytes());
                }
            },
            "compression_time" => {
                if let Some(value) = &self.compression_stat {
                    buf =
                        format_duration(buf, value.duration.as_millis() as u64);
                }
            },
            "compression_ratio" => {
                if let Some(value) = &self.compression_stat {
                    buf.extend(format!("{:.1}", value.ratio()).as_bytes());
                }
            },
            "cache_lookup_time" => {
                if let Some(ms) = self.cache_lookup_time {
                    buf = format_duration(buf, ms);
                }
            },
            "cache_lock_time" => {
                if let Some(ms) = self.cache_lock_time {
                    buf = format_duration(buf, ms);
                }
            },
            "service_time" => {
                buf = format_duration(
                    buf,
                    util::now().as_millis() as u64 - self.created_at,
                )
            },
            _ => {},
        }
        buf
    }
}

#[cfg(test)]
mod tests {
    use super::State;
    use crate::state::CompressionStat;
    use crate::util;
    use bytes::BytesMut;
    use pretty_assertions::assert_eq;
    use std::time::Duration;

    #[test]
    fn test_state() {
        let mut ctx = State {
            ..Default::default()
        };

        assert_eq!(
            b"false",
            ctx.append_value(BytesMut::new(), "reused").as_ref()
        );

        ctx.reused = true;
        assert_eq!(
            b"true",
            ctx.append_value(BytesMut::new(), "reused").as_ref()
        );

        ctx.upstream_address = "192.168.1.1:80".to_string();
        assert_eq!(
            b"192.168.1.1:80",
            ctx.append_value(BytesMut::new(), "upstream_addr").as_ref()
        );

        ctx.processing = 10;
        assert_eq!(
            b"10",
            ctx.append_value(BytesMut::new(), "processing").as_ref()
        );

        ctx.upstream_connect_time = Some(1);
        assert_eq!(
            b"1ms",
            ctx.append_value(BytesMut::new(), "upstream_connect_time")
                .as_ref()
        );

        ctx.upstream_connected = Some(30);
        assert_eq!(
            b"30",
            ctx.append_value(BytesMut::new(), "upstream_connected")
                .as_ref()
        );

        ctx.upstream_processing_time = Some(2);
        assert_eq!(
            b"2ms",
            ctx.append_value(BytesMut::new(), "upstream_processing_time")
                .as_ref()
        );

        ctx.upstream_response_time = Some(3);
        assert_eq!(
            b"3ms",
            ctx.append_value(BytesMut::new(), "upstream_response_time")
                .as_ref()
        );

        ctx.location = "pingap".to_string();
        assert_eq!(
            b"pingap",
            ctx.append_value(BytesMut::new(), "location").as_ref()
        );

        ctx.connection_time = 4;
        assert_eq!(
            b"4ms",
            ctx.append_value(BytesMut::new(), "connection_time")
                .as_ref()
        );

        ctx.tls_version = Some("tls1.3".to_string());
        assert_eq!(
            b"tls1.3",
            ctx.append_value(BytesMut::new(), "tls_version").as_ref()
        );

        ctx.compression_stat = Some(CompressionStat {
            in_bytes: 1024,
            out_bytes: 500,
            duration: Duration::from_millis(5),
        });
        assert_eq!(
            b"5ms",
            ctx.append_value(BytesMut::new(), "compression_time")
                .as_ref()
        );
        assert_eq!(
            b"2.0",
            ctx.append_value(BytesMut::new(), "compression_ratio")
                .as_ref()
        );

        ctx.cache_lookup_time = Some(6);
        assert_eq!(
            b"6ms",
            ctx.append_value(BytesMut::new(), "cache_lookup_time")
                .as_ref()
        );

        ctx.cache_lock_time = Some(7);
        assert_eq!(
            b"7ms",
            ctx.append_value(BytesMut::new(), "cache_lock_time")
                .as_ref()
        );

        ctx.created_at = util::now().as_millis() as u64 - 1;
        assert_eq!(
            b"1ms",
            ctx.append_value(BytesMut::new(), "service_time").as_ref()
        );
    }
}
