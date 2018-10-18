"use strict"

var logQueue = require('./logQueue')();
var config = require('./config');

var errorTable = config.errorTable;

/**
 * customErr: {errorName, message}
 */
const errorHanler = function (customErr, err) {
  if(!customErr) customErr = {};
  var error = err && err instanceof Error ? err : new Error();

  // 缓存日志输出
  var historyLog = logQueue.getAndEmpty();

  var debugInfo = {
    origin: customErr.debugInfo || error.debugInfo || '',
    logs: historyLog,
  }

  var errorType = customErr.errorName || error.errorName;
 
  var errorExtend = errorTable[errorType]
  var vendorErrorCode = customErr.vendorCode || error.vendorCode || error.code || error.statusCode || errorType;
  
  if (errorExtend === null || !errorExtend) {
    error.errorName = 'E_INTERNAL_ERROR'
    error.message += ` 未知错误 ${customErr.message || ''}`
    error.vendorErrorCode = `${vendorErrorCode}`;
  } else {
    error.errorName = errorExtend.errorName
    error.vendorErrorCode = `${
      errorExtend.vendorCode || vendorErrorCode
    }`
    error.message += ` ${errorExtend.message || ''}`;
  }

  // 最后进行 stack 处理, 防止先处理 stack 导致 message 等信息无法自定义
  debugInfo.stack = error.stack;
  error.debugInfo = JSON.stringify(debugInfo)
  return error
}

module.exports = errorHanler;
