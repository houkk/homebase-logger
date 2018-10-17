# homebase-logger

### 1. 初始化 homebase-logger

```
// size 初始化内存保持日志数量, 当执行 errorHandler 时返回 log 上下文
var {logger, ErrorHandler} = require('homebase-logger')(size)
```

### 2. logger

> level: log info warn error

> method: log info warn error setLogger
 
```
logger.log('haha')
```

> setLogger(_logger): `可选` 自定义 logger 
 
```
{
  log: function (){},
  info: function (){},
  warn: function (){},
  error: function (){},
}
```

### 3. ErrorHandler

> 初始化

```
var errorHandler = ErrorHandler(obj); // `可选`: obj 自定义错误码
```

> obj Example

```
{
  errorName: {
    errorName,
    message,
    vendorCode
  }
}
```

> 调用 errorHandler

```
errorHandler(customError[, err])

customeError: {
  errorName, // 匹配错误码
  vendorCode, // 可选
  message, // 可选 当匹配不到已有 errorName 时, message 将会被包含在返回对象中
}

err: 原有 Error 错误
```

> return Error

```
{
  Error,
  message,
  errorName,
  debugInfo, // 历史 logger 日志
  vendorErrorCode
}
```

