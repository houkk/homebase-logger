# homebase-util

### 1. 初始化 homebase-util

```
/**
* size <Number> 内存保留日志条数, 方便 errorHandler 追溯日志信息
* envLogger: env.Logger <Object> {
  info: function(){
    console.log('INFO', arguments);
  }
}
*/

// main.js
var {logger, errorHandler, utilInit} = require('homebase-logger');
utilInit(size, envLogger); // homebase util 初始化, 首次有效

b.js
var {logger, errorHandler} = require('homebase-logger');
// 直接使用 main.js 中 utilInit 参数
```

### 2. logger

> level: log info warn error

> method: log info warn error
 
```
logger.log('haha')
```


### 3. ErrorHandler

> 调用 errorHandler

```
errorHandler(customError[, err])

customeError: {
  errorName, // 匹配错误码
  vendorCode, // 可选
  message, // 可选 当匹配不到已有 errorName 时, message 将会被包含在返回对象中
  debugInfo // 可选
}

err: 原有 Error 错误
```

> return Error

```
{
  Error,
  message,
  errorName,
  debugInfo: {
    origin, // customErr.debugInfo,
    logs, // 历史 logger 日志
    stack
  }, 
  vendorErrorCode
}
```

