"use strict"

var logQueue = require('./logQueue')();
var config = require('./config');

var errorTable = config.errorTable;

/**
 * customErr: {errorName, message}
 */
const errorHanler = (customErr, err) => {
  var error = err && err instanceof Error ? err : new Error();

  // 缓存日志输出
  var historyLog = logQueue.list();
  logQueue.empty();
  error.debugInfo = historyLog;
  // error.debugInfo = JSON.stringify(historyLog, null, 2);

  var errorType = customErr.errorName
 
  var errorExtend = errorTable[errorType]
  if (errorExtend === null || !errorExtend) {
    error.errorName = 'E_INTERNAL_ERROR'
    error.message += ` 未知错误 ${customErr.message || ''}`
    return error
  }
  error.errorName = errorExtend.errorName
  error.vendorErrorCode = `${
    errorExtend.vendorCode
    || customErr.vendorCode
    || error.code 
    || error.statusCode 
    || errorType
  }`
  error.message += ` ${errorExtend.message || ''}`;
  return error
}

/**
 * obj: {
 *  errorName: {
 *    errorNmae,
 *    message,
 *    vendorCode
 *  }
 * }
 */
module.exports = (obj) => {
  // 添加其他厂商 code
  if(obj instanceof Object && Object.keys(obj).length) Object.assign(errorTable, obj);
  return errorHanler;
}
