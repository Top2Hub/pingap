export default {
  themeSystem: "系统主题",
  themeDark: "深色主题",
  themeLight: "浅色主题",
  save: "保存",
  remove: "删除",
  removeConfirm: "确定删除当前配置吗？",
  removeTips: "配置删除后无法恢复",
  confirm: "确定",
  fetchFail: "加载配置失败",
  moreSettings: "更多设置",
  lessSettings: "隐藏设置",
  fetchTomlFailTitle: "加载toml配置失败",
  copyTomlFail: "复制toml失败",
  copyTomlSuccess: "复制toml成功",
  tomlTitle: "Toml配置",
  tomlDescription: "应用的Toml配置内容",
  saveFailTitle: "保存配置失败",
  saveSuccessTitle: "保存配置成功",
  saveSuccessDescription: "配置已成功保存",
  removeFailTitle: "删除配置失败",
  removeSuccessTitle: "删除配置成功",
  removeSuccessDescription: "配置已成功删除",
  includes: "引入配置",
  includesPlaceholder: "选择要引入的配置",
  full: "全配置",
  original: "原始配置",
  import: "导入配置",
  importFail: "导入配置失败",
  importSuccess: "导入配置成功",
  aesGcm: "AES-GCM",
  aesTips: "使用AES-GCM加解密数据",
  encrypt: "加密",
  decrypt: "解密",
  secret: "密钥",
  value: "数据",
  result: "结果",
  nav: {
    basic: "基础配置",
    server: "服务配置",
    location: "Location配置",
    upstream: "上游服务配置",
    plugin: "插件配置",
    certificate: "证书配置",
    storage: "存储配置",
    searchPlaceholder: "输入关键字",
  },
  login: {
    title: "登录",
    description: "请输入管理员账号与密码",
    account: "账号",
    password: "密码",
    submit: "登录",
    fail: "登录失败",
  },
  home: {
    dashboard: "面板",
    basic: "基础信息",
    pid: "进程id",
    threads: "线程数",
    accepted: "处理请求数",
    processing: "正在处理请求数",
    fdCount: "文件描述符",
    tcpCount: "Tcp连接数",
    tcp6Count: "Tcp6连接数",
    memory: "内存",
    startTime: "启用时间",
    arch: "架构",
    kernel: "内核版本",
    user: "后台服务用户",
    group: "后台服务用户组",
    configHash: "应用配置哈希",
    enabledFull: "启用所有特性",
    rustc: "Rust编译器版本",
    machineCpu: "机器CPU",
    machineMemory: "机器内存",
    yes: "是",
    no: "否",
    to: "至",
  },
  basic: {
    name: "名称",
    namePlaceholder: "输入应用名称",
    threads: "线程数",
    threadsPlaceholder: "输入服务线程数",
    workStealing: "线程工作抢占模式",
    listenerTasksPerFd: "每个fd的监听任务数",
    listenerTasksPerFdPlaceholder: "输入每个fd的监听任务数(默认值: 1)",
    upstreamKeepalivePoolSize: "上游保持连接池大小",
    upstreamKeepalivePoolSizePlaceholder: "输入上游保持连接池大小(默认值: 128)",
    logLevel: "日志级别",
    logLevelPlaceholder: "选择应用日志级别",
    logBufferedSize: "日志缓存大小",
    logBufferedSizePlaceholder: "输入日志缓存大小(如64kb, 1mb)",
    logFormatJson: "日志Json格式化",
    gracePeriod: "等待期限",
    gracePeriodPlaceholder:
      "输入接收到信号关闭后开始优雅关闭等待期限(如30s, 1m)",
    gracefulShutdownTimeout: "优雅关闭时长",
    gracefulShutdownTimeoutPlaceholder: "输入优雅关闭时长(如10s)",
    autoRestartCheckInterval: "自动重启检测间隔",
    autoRestartCheckIntervalPlaceholder: "输入自动重启检测间隔(如30s)",
    pidFile: "Pid文件",
    pidFilePlaceholder: "输入pid文件路径(如/opt/pingap/pingap.pid)",
    cacheDirectory: "缓存目录",
    cacheDirectoryPlaceholder: "输入文件缓存目录(如/opt/cache)",
    cacheMaxSize: "缓存空间最大限制",
    cacheMaxSizePlaceholder: "输入最大缓存空间限制(如100mb)",
    upgradeSock: "更新配置使用的sock",
    upgradeSockPlaceholder: "输入后台服务更新配置使用的sock",
    user: "启用后台服务的用户",
    userPlaceholder: "输入后台服务的用户",
    group: "启用后台服务的用户组",
    groupPlaceholder: "输入后台服务的用户组",
    webhookType: "Webhook类型",
    webhookTypePlaceholder: "选择webhook类型",
    webhookNotifications: "Webhook通知类型",
    webhookNotificationsPlaceholder: "选择webhook通知类型",
    webhook: "Webhook通知的Http链接",
    webhookPlaceholder: "输入webhook通知的http链接",
    sentry: "Sentry的连接串",
    sentryPlaceholder: "输入sentry的连接串",
    pyroscope: "Pyroscope的连接串",
    pyroscopePlaceholder: "输入pyroscope的连接串",
    errorTemplate: "出错模板",
    errorTemplatePlaceholder: "输入出错模板，html或者json",
  },
  server: {
    name: "名称",
    namePlaceholder: "输入服务名称",
    addr: "监听地址",
    addrPlaceholder: "输入监控的地址，多个地址以`,`分隔",
    locations: "Location列表",
    locationsPlaceholder: "选择关联的location列表",
    threads: "线程数",
    threadsPlaceholder: "输入服务线程数",
    globalCertificates: "使用全局证书",
    accessLog: "访问日志格式化",
    accessLogPlaceholder: "输入日志格式化模板",
    enabledH2: "启用http2(h2c)",
    enabledServerTiming: "启用Server Timing",
    modules: "Http模块",
    modulesPlaceholder: "选择要使用的http模块",
    tlsCipherList: "tls密码套件列表",
    tlsCipherListPlaceholder: "输入tls密码套件列表，早于tls1.3版本认证使用",
    tlsCiphersuites: "tls密码套件列表",
    tlsCiphersuitesPlaceholder: "输入tls密码套件列表，早于tls1.3版本认证使用",
    tlsMinVersion: "最低tls版本",
    tlsMaxVersion: "最高tls版本",
    tcpFastOpen: "tcp快速开启",
    tcpFastOpenPlaceholder: "输入tcp快速开启的backlog大小(如10)",
    tcpIdle: "tcp空闲等待时长",
    tcpIdlePlaceholder: "输入tcp连接空闲等待时长(如2m)",
    tcpInterval: "tcp保持连接检测间隔",
    tcpIntervalPlaceholder: "输入tcp保持连接检测间隔(如30s)",
    tcpProbeCount: "tcp保持连接探针次数",
    tcpProbeCountPlaceholder: "输入tcp保持连接探针次数(如9)",
    prometheusMetrics: "Prometheus",
    prometheusMetricsPlaceholder:
      "输入pull模式的路径或者完整的push模式的网关地址",
    otlpExporter: "Otlp Exporter",
    otlpExporterPlaceholder: "输入opentelemetry的导出链接",
    remark: "备注",
  },
  location: {
    name: "名称",
    namePlaceholder: "输入location的名称",
    host: "域名",
    hostPlaceholder: "输入location使用的域名，多个域名使用`,`分隔",
    path: "路径",
    pathPlaceholder: "输入location的路径，支持正则、前缀以及全等模式",
    upstream: "上游服务",
    upstreamPlaceholder: "选择location使用的上游服务",
    rewrite: "路径重写",
    rewritePlaceholder: "输入路径重写规则(如^/api/ /)",
    proxySetHeaders: "转发设置请求头",
    proxySetHeadersPlaceholder: "输入请求头名称 : 输入请求头值",
    proxyAddHeaders: "转发添加请求头",
    proxyAddHeadersPlaceholder: "输入请求头名称 : 输入请求头值",
    enableReverseProxyHeaders: "启用反向代理请求头",
    weight: "权重",
    weightPlaceholder: "输入location的权重",
    clientMaxBodySize: "请求实体限制大小",
    clientMaxBodySizePlaceholder: "输入请求实体限制大小(如1mb)",
    maxProcessing: "最大正在处理请求数",
    maxProcessingPlaceholder: "输入限制的最大正在处理请求数",
    plugins: "插件列表",
    pluginsPlaceholder: "选择location使用的相关插件",
    grpcWeb: "Grpc Web",
    remark: "备注",
  },
  upstream: {
    name: "名称",
    namePlaceholder: "输入上游服务的名称",
    addrs: "上游服务地址列表",
    addrsPlaceholder: "输入上游服务地址(如127.0.0.1:3000) : 输入对应权重",
    discovery: "服务发现",
    discoveryPlaceholder: "选择上游服务发现类型",
    updateFrequency: "服务发现更新间隔",
    updateFrequencyPlaceholder: "输入服务发现更新间隔(如30s)",
    algo: "负载均衡算法",
    algoPlaceholder: "输入负载均衡算法(如hash:ip)",
    healthCheck: "健康检查",
    healthCheckPlaceholder: "输入健康检查的url，支持http与tcp",
    connectionTimeout: "连接超时",
    connectionTimeoutPlaceholder: "输入连接超时限制(如30s)",
    totalConnectionTimeout: "总连接超时",
    totalConnectionTimeoutPlaceholder: "输入总连接超时限制(如1m)",
    readTimeout: "读超时",
    readTimeoutPlaceholder: "输入读超时限制(如30s)",
    writeTimeout: "写超时",
    writeTimeoutPlaceholder: "输入写超时限制(如10s)",
    idleTimeout: "空闲时长",
    idleTimeoutPlaceholder: "输入连接空闲时长限制(如2m)",
    alpn: "Alpn",
    sni: "Sni",
    sniPlaceholder: "输入sni的名称",
    verifyCert: "证书校验",
    ipv4Only: "仅使用ipv4",
    enableTracer: "启用跟踪器",
    tcpFastOpen: "Tcp快速开启",
    tcpRecvBuf: "tcp接收缓存",
    tcpRecvBufPlaceholder: "输入tcp接收缓存限制大小",
    tcpIdle: "tcp空闲时长",
    tcpIdlePlaceholder: "输入tcp连接空闲时长限制",
    tcpInterval: "tcp保持连接探针检测间隔",
    tcpIntervalPlaceholder: "输入tcp保持连接探针检测间隔时长",
    tcpProbeCount: "tcp保持连接探针次数",
    tcpProbeCountPlaceholder: "输入tcp保持连接探针次数(如9)",
    remark: "备注",
  },
  certificate: {
    name: "名称",
    namePlaceholder: "输入证书名称",
    tlsCert: "tls证书",
    tlsCertPlaceholder: "输入pem格式的tls证书",
    tlsKey: "tls密钥",
    tlsKeyPlaceholder: "输入pem格式的tls密钥",
    tlsChain: "tls证书链",
    tlsChainPlaceholder: "输入pem格式的tls证书链",
    domains: "acme域名列表",
    domainsPlaceholder: "输入使用acme的域名列表，多个域名以`,`分隔",
    acme: "acme",
    isDefault: "是否默认证书",
    isCa: "CA证书",
    bufferDays: "证书有效期校验、更新预留时长",
    bufferDaysPlaceholder: "输入证书有效期校验、更新预留时长",
  },
  plugin: {
    name: "名称",
    namePlaceholder: "输入插件名称",
    category: "类型",
    step: "执行步骤",
    statsPath: "路径",
    statsPathPlaceholder: "输入响应统计对应的路径",
    pingPath: "路径",
    pingPathPlaceholder: "输入响应ping对应的路径",
    adminPath: "路径",
    adminPathPlaceholder: "输入管理配置对应路径",
    adminMaxAge: "有效期",
    adminMaxAgePlaceholder: "输入登录态的有效期",
    adminIpFailLimit: "失败ip限制",
    adminIpFailLimitPlaceholder: "输入失败时的ip限制次数",
    adminAuthorization: "认证信息",
    adminAuthorizationPlaceholder:
      "bas64编码的basic认证信息(base64(user:pass))",
    dirPath: "目录",
    dirPathPlaceholder: "输入使用静态服务的目录",
    dirIndex: "默认文件",
    dirIndexPlaceholder: "输入目录中的默认文件(如index.html)",
    dirChunkSize: "分块大小",
    dirChunkSizePlaceholder: "输入分块传输时的大小(如16kb)",
    dirAutoIndex: "是否支持目录浏览",
    dirMaxAge: "缓存有效期",
    dirMaxAgePlaceholder: "输入缓存的最大有效期(如24h)",
    dirCachePrivate: "是否私有缓存",
    dirCharset: "字符集",
    dirCharsetPlaceholder: "输入文件响应的字符集",
    dirDownload: "是否支持下载",
    dirHeaderName: "响应头",
    dirHeaderNamePlaceholder: "输入响应头名称 : 输入响应头值",
    mockPath: "路径",
    mockPathPlaceholder: "输入mock的路径",
    mockStatus: "状态码",
    mockStatusPlaceholder: "输入mock响应的状态码",
    mockResponseDelay: "延时",
    mockResponseDelayPlaceholder: "输入mock响应延时(如5s)",
    mockHeaderName: "响应头",
    mockHeaderNamePlaceholder: "输入响应头名称 : 输入响应头值",
    mockData: "响应数据",
    mockDataPlaceholder: "输入响应数据",
    redirectPrefix: "前缀",
    redirectPrefixPlaceholder: "输入要添加至url的前缀",
    redirectHttps: "https",
    cacheLock: "锁等待",
    cacheLockPlaceholder: "输入请求相同资源时的最长锁等待时长(如2s)",
    cacheMaxFileSize: "最大响应缓存大小",
    cacheMaxFileSizePlaceholder: "输入最大的响应缓存大小(如1mb)",
    cacheNamespace: "命名空间",
    cacheNamespacePlaceholder: "输入缓存使用的命名空间",
    cacheMaxTtl: "缓存最大ttl",
    cacheMaxTtlPlaceholder: "输入缓存的最大ttl(如1h)",
    cacheEviction: "支持缓存逐出",
    cachePredictor: "支持缓存状态记录",
    checkCacheControl: "校验Cache-Control响应头",
    cacheSkip: "略过缓存",
    cacheSkipPlaceholder: "输入略过缓存的正则规则",
    cacheHeaders: "缓存请求头",
    cacheHeadersPlaceholder: "输入要添加至缓存key的请求头",
    cachePurgeIpList: "允许缓存清除ip",
    cachePurgeIpListPlaceholder: "输入允许执行缓存清除的ip",
    requestIdAlgo: "算法",
    requestIdAlgoPlaceholder: "选择生成请求id的算法",
    requestIdLength: "长度",
    requestIdLengthPlaceholder: "输入请求id的长度(用于nanoid)",
    requestIdHeaderName: "请求头名称",
    requestIdHeaderNamePlaceholder: "输入请求id的名称",
    compressionGzipLevel: "Gzip压缩级别",
    compressionGzipLevelPlaceholder: "输入gzip的压缩级别(1-9)",
    compressionBrLevel: "Brotli压缩级别",
    compressionBrLevelPlaceholder: "输入brotli压缩级别(1-11)",
    compressionZstdLevel: "Zstd压缩级别",
    compressionZstdLevelPlaceholder: "输入zstd压缩级别(1-22)",
    compressionDecompression: "是否支持解压缩",
    acceptEncodingList: "支持的压缩编码",
    acceptEncodingListPlaceholder: "输入请求支持的压缩编码(如 zstd, br)",
    acceptEncodingOnlyOne: "仅支持单个压缩编码",
    keyAuthQuery: "Query",
    keyAuthQueryPlaceholder: "输入query的名称",
    keyAuthHeader: "请求头",
    keyAuthHeaderPlaceholder: "输入请求头名称",
    keyAuthFailDelay: "失败时延迟",
    keyAuthFailDelayPlaceholder: "输入失败时的延迟响应时长",
    keyAuthHideCredentials: "隐藏认证信息",
    keyAuthValues: "认证信息列表",
    keyAuthValuesPlaceholder: "输入认证信息",
    basicAuthList: "Basic模式认证",
    basicAuthListPlaceholder:
      "输入basic模式认证信息，base64格式如下：base64(account:password)",
    basicAuthFailDelay: "失败时延迟",
    basicAuthFailDelayPlaceholder: "输入失败时的延迟响应时长",
    basicAuthHideCredentials: "隐藏认证信息",
    jwtAuthHeader: "请求头",
    jwtAuthHeaderPlaceholder: "输入请求头名称",
    jwtAuthQuery: "Query",
    jwtAuthQueryPlaceholder: "输入query的名称",
    jwtAuthCookie: "Cookie",
    jwtAuthCookiePlaceholder: "输入cookie的名称",
    jwtSignPath: "签名路径",
    jwtSignPathPlaceholder: "输入jwt签名路径",
    jwtAuthFailDelay: "失败时延迟",
    jwtAuthFailDelayPlaceholder: "输入失败时的延迟响应时长",
    jwtSignAlgorithm: "算法",
    jwtAuthSecret: "密钥",
    jwtAuthSecretPlaceholder: "输入jwt的密钥",
    limitCategory: "类型",
    limitTag: "分类",
    limitKey: "Key",
    limitKeyPlaceholder: "输入限制key的名称",
    limitMax: "最大值",
    limitMaxPlaceholder: "输入限制的最大值",
    limitInterval: "间隔",
    limitIntervalPlaceholder: "输入限制的间隔时长",
    limitWeight: "权重",
    limitWeightPlaceholder: "输入当前插件的权重(0-100), 默认: 0",
    ipRestrictionMode: "限制模式",
    ipList: "ip列表",
    ipListPlaceholder: "输入ip",
    ipRestrictionMessage: "提示信息",
    ipRestrictionMessagePlaceholder: "请输入限制时的提示信息",
    refererRestrictionMode: "限制模式",
    refererList: "referer列表",
    refererListPlaceholder: "输入referer",
    refererRestrictionMessage: "提示信息",
    refererRestrictionMessagePlaceholder: "请输入限制时的提示信息",
    uaList: "User Agent列表",
    uaListPlaceholder: "输入user agent",
    uaRestrictionMessage: "提示信息",
    uaRestrictionMessagePlaceholder: "请输入限制时的提示信息",
    csrfTokenPath: "token路径",
    csrfTokenPathPlaceholder: "输入crrf的token路径",
    csrfName: "名称",
    csrfNamePlaceholder: "输入csrf的名称",
    csrfKey: "Key",
    csrfKeyPlaceholder: "输入csrf的key",
    csrfTtl: "有效期",
    csrfTtlPlaceholder: "输入csrf的有效期",
    corsPath: "路径",
    corsPathPlaceholder: "输入cors的路径",
    corsAllowOrigin: "允许的来源",
    corsAllowOriginPlaceholder: "输入允许的来源",
    corsAllowMethods: "允许的方法",
    corsAllowMethodsPlaceholder: "输入允许的方法",
    corsAllowHeaders: "允许的响应头",
    corsAllowHeadersPlaceholder: "输入允许的响应头",
    corsAllowCredentials: "允许认证信息",
    corsMaxAge: "最大有效期",
    corsMaxAgePlaceholder: "输入最大有效期Input the max age",
    corsExposeHeaders: "暴露的响应头",
    corsExposeHeadersPlaceholder: "输入暴露的响应头",
    responseHeadersAddHeader: "添加响应头",
    responseHeadersAddHeaderPlaceholder:
      "输入添加响应头的名称 : 输入添加响应头的值",
    responseHeadersSetHeader: "设置响应头",
    responseHeadersSetHeaderPlaceholder:
      "输入设置响应头的名称 : 输入设置响应头的值",
    responseHeadersRenameHeader: "修改响应头",
    responseHeadersRenamePlaceholder:
      "输入原来的响应头名称 : 输入新的响应头名称",
    responseHeadersSetHeaderNotExists: "设置响应头(不存在时)",
    responseHeadersSetHeaderNotExistsPlaceholder:
      "输入设置响应头的名称 : 输入设置响应头的值",
    responseHeadersRemoveHeader: "删除响应头",
    responseHeadersRemoveHeaderPlaceholder: "输入响应头名称",
    combinedAuthAuthorizations: "认证配置列表",
    combinedAuthAuthParameters: "认证参数",
    combinedAuthAuthAppIdPlaceholder: "输入应用id",
    combinedAuthAuthIpListPlaceholder: "输入ip列表",
    combinedAuthAuthSecretPlaceholder: "输入密钥",
    combinedAuthAuthDeviationPlaceholder: "输入允许时间偏移量(e.g. 10)",
    combinedAuthAuthAdd: "添加",
    combinedAuthAuthRemove: "删除",
    subFilterPath: "路径",
    subFilterPathPlaceholder: "输入子过滤器的路径(如 ^/api/)",
    subFilterFilters: "过滤规则",
    subFilterFiltersPlaceholder: "输入子过滤器的规则(如 subs_filter 'http://pingap.io' 'https://pingap.io/api' ig)",
    remark: "备注",
  },
  storage: {
    name: "名称",
    namePlaceholder: "输入存储数据的名称",
    category: "类型",
    categoryPlaceholder: "选择存储数据的类型",
    secret: "密钥",
    secretPlaceholder: "输入加密数据的密钥",
    value: "数据",
    remark: "备注",
  },
};
