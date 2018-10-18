"use strict"

var util = require('util')
var logQueue = require('./logQueue')();

var logExcutor = function(level, info) {
  var line = util.format.apply(this, info)
  console[level.toLowerCase()](new Date(), line)
}
var _logger = {
  error: function () {
    logExcutor('error', arguments);
  },
  info: function () {
    logExcutor('info', arguments);
  },

  warn: function () {
    logExcutor('warn', arguments);
  },

  log: function () {
    logExcutor('log', arguments);
  },
}

var logCall = function(level, args) {
  var info = util.format.apply(this, args)
  logQueue.add(level, info);
  _logger[level.toLowerCase()].apply(_logger, args);
}

module.exports = {
  info: function () {
    logCall('info', arguments)
  },
  warn: function () {
    logCall('warn', arguments)
  },
  log: function () {
    logCall('log', arguments)
  },
  error: function () {
    logCall('error', arguments)
  },
  setLogger: function (logger) {
    if (logger) {
      _logger = logger
    }
  }
}