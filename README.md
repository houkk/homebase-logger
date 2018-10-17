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

> setLogger(_logger): 自定义 logger 
 
```
{
  log: function (){},
  info: function (){},
  warn: function (){},
  error: function (){},
}
```

### 3. ErrorHandler

> 初始化

```
var errorHandler = ErrorHandler(obj); // obj 自定义错误码
```

> obj Example

```
{
  enterName: {
    enterName,
    message,
    vendorCode
  }
}
```

> 调用 errorHandler

```
errorHandler(customError[, err])

customeError: {
  errorName,
  vendorCode,
  message, // 当匹配不到已有 errorName 时，message 将会被包含在返回对象中
}

err: 原有 Error 错误
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

