"use strict"

var logger = require('./lib/logger');
var ErrorHandler = require('./lib/errorHandler');
var config = require('./lib/config');

module.exports = size => {
  size = parseInt(size);
  require('./lib/logQueue')().setSize(
    size && size >= 0 ? size : config.queueSize
  ); // 初始化
  
  return {
    logger,
    ErrorHandler
  }
}
