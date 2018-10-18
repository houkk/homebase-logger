"use strict"

var config = require('./config');

function LogQueue(size) {
  this.queueSize = parseInt(size) || config.queueSize;
  this.queue = [];
}

LogQueue.prototype.add = function(level, info) {

  if(this.queue.length >= this.queueSize) {
    this.queue.shift();
  }
  this.queue.push(`${new Date().toUTCString()} [${level.toUpperCase()}] ${info}`);
}

LogQueue.prototype.getAndEmpty = function() {
  var res = this.queue.join('\n');
  this.queue = [];
  return res;
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
module.exports = function(size) {
  instance = instance || new LogQueue(size);
  return instance;
};