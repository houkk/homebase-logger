"use strict"

var util = require('util')
var logQueue = require('./logQueue')();

var _logger = {
  error: function () {
    var line = util.format.apply(this, arguments)
    console.error(new Date(), line)
  },
  info: function () {
    var line = util.format.apply(this, arguments)
    console.info(new Date(), line)
  },

  warn: function () {
    var line = util.format.apply(this, arguments)
    console.info(new Date(), line)
  },

  log: function () {
    var line = util.format.apply(this, arguments)
    console.info(new Date(), line)
  },
}


module.exports = {
  info: function () {
    logQueue.add('INFO', arguments)
    _logger.info.apply(_logger, arguments)
  },
  warn: function () {
    logQueue.add('WARN', arguments)
    _logger.warn.apply(_logger, arguments)
  },
  log: function () {
    logQueue.add('LOG', arguments)
    _logger.log.apply(_logger, arguments)
  },
  error: function () {
    logQueue.add('ERROR', arguments)
    _logger.error.apply(_logger, arguments)
  },
  setLogger: function (logger) {
    if (logger) {
      _logger = logger
    }
  }
}