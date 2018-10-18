"use strict"

var logger = require('./lib/logger');
var errorHandler = require('./lib/errorHandler');
var config = require('./lib/config');
var logQueue = require('./lib/logQueue')();

function UtilInit(size, envLogger) {
  this.instance = null;

  logger.setLogger(envLogger); // 初始化 logger
  size = parseInt(size);
  logQueue.setSize(size && size >= 0 ? size : config.queueSize); // 初始化 logQueue
}

UtilInit.getInstance = function (size, envLogger) {
  return this.instance || (this.instance = new UtilInit(size, envLogger));
}

module.exports = {
  utilInit: function (size, envLogger) {
    UtilInit.getInstance(size, envLogger);
  },
  logger,
  errorHandler,
}