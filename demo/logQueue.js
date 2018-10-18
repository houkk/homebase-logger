"use strict"
var logger = require('../lib/logger');
var config = require('../lib/config');
var logQueue = require('../lib/logQueue')(config.queueSize); // 初始化
logQueue.setSize(config.queueSize);

for(var i = 1; i <= 200; i++) {
  logger.info('hahha %s sfsdf', i);
  var queue = logQueue.getAndEmpty();
  console.log(queue.length);
}