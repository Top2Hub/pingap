export default {
  // navigation
  "nav.basic": "Basic",
  "nav.server": "Server",
  "nav.location": "Location",
  "nav.upstream": "Upstream",
  "nav.plugin": "Plugin",
  // header
  "header.title": "Informations",
  "header.startTime": " Start Time:",
  "header.memory": "Memory: ",
  "header.architecture": "Architecture:",
  "header.configHash": "Config Hash: ",
  "header.restart": "Restart Pingap",
  "header.restartTips": "Pingap will graceful restart with new configuration.",
  "header.confirmTips": "Are you sure to restart pingap?",
  "header.confirm": "Restart",
  "header.cancel": "Cancel",
  // basic info
  "basic.title": "Modify the basic configurations",
  "basic.description":
    "The basic configuration of pingap mainly includes various configurations such as logs, graceful restart, threads, etc.",
  "basic.name": "Name",
  "basic.pidFile": "Pid File",
  "basic.upgradeSock": "Upgrade Sock",
  "basic.threads": "Threads",
  "basic.workStealing": "Work Stealing",
  "basic.user": "User",
  "basic.group": "Group",
  "basic.gracePeriod": "Grace Period",
  "basic.gracefulShutdownTimeout": "Graceful Shutdown Timeout",
  "basic.logLevel": "Log Level",
  "basic.logCapacity": "Log Capacity(byte)",
  "basic.autoRestartCheckInterval": "Auto Restart Check Interval",
  "basic.upstreamKeepalivePoolSize": "Upstream Keepalive Pool Size",
  "basic.cacheMaxSize": "Cache Max Size(MB)",
  "basic.webhookType": "Webhook Type",
  "basic.webhookNotifications": "Webhook Notifications",
  "basic.webhook": "Webhook Url",
  "basic.sentry": "Sentry",
  "basic.pyroscope": "Pyroscope",
  "basic.errorTemplate": "Error Template",
  // server info
  "server.title": "Modify server configuration",
  "server.description": "Change the server configuration",
  "server.addr": "Listen Address",
  "server.locations": "Locations",
  "server.threads": "Threads",
  "server.accessLog": "Access Log",
  "server.tlsCert": "Tls Cert Pem",
  "server.tlsKey": "Tls Key Pem",
  "server.letsEncrypt": "Let's encrypt domain list",
  "server.enabledH2": "Enable Http2",
  "server.remark": "Remark",
  // location info
  "location.title": "Modify location configuration",
  "location.description": "Change the location configuration",
  "location.host": "Host",
  "location.path": "Path",
  "location.upstream": "Upstream",
  "location.weight": "Weight",
  "location.headers": "Headers",
  "location.proxyHeaders": "Proxy Headers",
  "location.rewrite": "Rewrite",
  "location.plugins": "Proxy Plugins",
  "location.remark": "Remark",
  "location.proxySetHeaders": "Set Proxy Headers",
  "location.proxyAddHeaders": "Add Proxy Headers",
  // upstream info
  "upstream.title": "Modify upstream configuration",
  "upstream.description": "Change the upstream configuration",
  "upstream.addrs": "Upstream Addrs",
  "upstream.algo": "Load balancer algorithm",
  "upstream.healthCheck": "Health Check",
  "upstream.connectionTimeout": "Connection Timeout",
  "upstream.totalConnectionTimeout": "Total Connection Timeout",
  "upstream.readTimeout": "Read Timeout",
  "upstream.writeTimeout": "Write Timeout",
  "upstream.idleTimeout": "Idle Timeout",
  "upstream.alpn": "Alpn",
  "upstream.sni": "Sni",
  "upstream.verifyCert": "Verify Cert",
  "upstream.ipv4Only": "Ipv4 Only",
  "upstream.enableTracer": "Enable Tracer",
  "upstream.tcpRecvBuf": "Tcp Recv Buffer Size",
  "upstream.tcpIdle": "Tcp Keepalive Idle Duration",
  "upstream.tcpInterval": "Tcp Keepalive Interval Duration",
  "upstream.tcpProbeCount": "Tcp Keepalive Probe Max Number",
  "upstream.remark": "Remark",
  // plugin info
  "plugin.title": "Modify plugin configuration",
  "plugin.description": "Change the plugin configuration",
  "plugin.step": "Plugin Exec Step",
  "plugin.category": "Plugin Category",
  "plugin.config": "Plugin Config Data",
  "plugin.remark": "Remark",
  // form
  "form.name": "Name",
  "form.removing": "Removing",
  "form.remove": "Remove",
  "form.submitting": "Submitting",
  "form.submit": "Submit",
  "form.success": "Update success!",
  "form.confirmRemove": "Remove config?",
  "form.removeDescript":
    "Please confirm whether you want to delete the configuration, and it can not be restored after delete it.",
  "form.confirm": "Confirm",
  "form.nameRequired": "Name is required",
  "form.nameExists": "Name is exitst",
  "form.sortPlugin": "Sort plugins",
  "form.selectPlugin": "Select plugin",
  "form.addr": "Addr",
  "form.weight": "Weight",
  "from.addrs": "Add addr",
  "form.setHeader": "Set response header",
  "form.removeHeader":
    "Remove response header, multiple values are separated by space",
  "form.headerName": "Header Name",
  "form.headerValue": "Header Value",
  "form.addProxyHeader": "Add proxy request header",
  "form.setProxyHeader": "Set proxy request header",
  "form.proxyHeaderName": "Header Name",
  "form.proxyHeaderValue": "Header Value",
  "form.gzip": "Gzip Level",
  "form.br": "Br Level",
  "form.zstd": "Zstd Level",
  "form.adminPath": "Admin Path",
  "form.adminIpFailLimit": "Auth fail ip limit count",
  "form.adminAuthorization": "Basic auth(base64(user:pass))",
  "form.adminAuthorizationAdd": "Add more authorization",
  "form.limitCategory": "The limit category",
  "form.limitTag": "The limit tag",
  "form.limitKey": "The limit key",
  "form.limitMax": "The limit max value",
  "form.limitInterval": "The limit interval for rate",
  "form.allow": "Allow",
  "form.deny": "Deny",
  "form.dirPath": "The static directory",
  "form.dirIndex": "The index file",
  "form.dirAutoIndex": "Set auto index for directory",
  "form.dirChunkSize": "The chunk size for static response",
  "form.dirMaxAge": "The max age for http cache control",
  "form.dirCachePrivate": "Set the cache for private",
  "form.dirCharset": "Set the charset for response",
  "form.dirDownload": "Set support download file",
  "form.requestIdAlgo": "The algorithm for genenrate id",
  "form.requestIdLength": "The length of id",
  "form.requestIdHeaderName": "The http request header name of request id",
  "form.ipList": "The ip list",
  "form.ipRestrictionAdd": "Add more ip or ip net",
  "form.ipRestrictionAllow": "Allow",
  "form.ipRestrictionDeny": "Deny",
  "form.ipRestrictionMessage": "Error message for invalid",
  "form.ipRestrictionMode": "The restriction mode, allow or deny",
  "form.refererRestrictionMode": "The restriction mode, allow or deny",
  "form.refererRestrictionAllow": "Allow",
  "form.refererRestrictionDeny": "Deny",
  "form.refererList": "Referer list",
  "form.refererRestrictionAdd": "Add more referer",
  "form.refererRestrictionMessage": "Error message for invalid",
  "form.keyAuthType": "The key auth type, header or query",
  "form.keyAuthName": "The key name",
  "form.keyAuthValues": "The key value list",
  "form.keyAuthAdd": "Add key value",
  "form.keyAuthHideCredentials": "Remove auth information",
  "form.basicAuthList": "The basic authorization list",
  "form.basicAuthAdd": "Add basic auth",
  "form.basicAuthHideCredentials": "Remove auth information",
  "form.cacheStorage": "The cache storage url",
  "form.redirectHttps": "Redirect http to https",
  "form.redirectPrefix": "The prefix path of redirect path",
  "form.statsPath": "The stats path",
  "form.pingPath": "The ping path",
  "form.responseHeadersAddHeaderName": "The add header name",
  "form.responseHeadersAddHeaderValue": "The add header value",
  "form.responseHeadersAdd": "Add more header",
  "form.responseHeadersSetHeaderName": "The set header name",
  "form.responseHeadersSetHeaderValue": "The set header value",
  "form.responseHeadersSet": "Set more header",
  "form.responseHeadersRemoveHeaderName": "The remove header name",
  "form.responseHeadersRemove": "Remove more header",
  "form.mockPath": "Response Match Path",
  "form.mockStats": "Response Status",
  "form.mockHeader": "Add Response Header",
  "form.mockHeaderName": "The mock header name",
  "form.mockHeaderValue": "The mock header value",
  "form.mockData": "Response data",
  "form.csrfTokenPath": "The path for get csrf token",
  "form.csrfName": "The name of csrf token",
  "form.csrfKey": "The secret key for csrf",
  "form.csrfTtl": "The ttl of csrf token",
};
