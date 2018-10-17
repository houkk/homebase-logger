"use strict"

var util = require('util');
var config = require('./config');

function LogQueue(size) {
  this.queueSize = parseInt(size) || config.queueSize;
  this.queue = [];
}

LogQueue.prototype.add = function(level, ...args) {
  var line = util.format.apply(this, ...args);

  if(this.queue.length >= this.queueSize) {
    this.queue.pop();
  }
  this.queue.unshift(`${new Date().toISOString()} [${level.toUpperCase()}] ${line}`);
}

LogQueue.prototype.list = function() {
  try {
    return JSON.parse(JSON.stringify(this.queue))
  } catch (e) {
    return [];
  }
}

LogQueue.prototype.empty = function() {
  this.queue = [];
}

LogQueue.prototype.getSize = function() {
  return this.queueSize;
}

LogQueue.prototype.setSize = function(size) {
  if(parseInt(size)) this.queueSize = parseInt(size);
}

var instance = null;
module.exports = (size) => {
  instance = instance || new LogQueue(size);
  return instance;
};