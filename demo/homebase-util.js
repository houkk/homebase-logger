"use strict"
var homebaseUtil = require('../index');
var logger = homebaseUtil.logger;
var errorHandler = homebaseUtil.errorHandler;
var utilInit = homebaseUtil.utilInit; 

utilInit(10, {
  info: function () {
    console.log('xixi ', arguments)
  }
})

for(var i = 1; i < 101; i++) {
  logger.info('hahha %s xixi', i, {hah:`xixi ${i}`});
}

console.log(errorHandler({
  errorName: 'test_error',
  debugInfo: 'debuginfo ...',
  vendorCode: '121212121'
}, new Error('haha test')))

for(var i = 1; i < 3; i++) {
  logger.info('hahha2 %s xixi', i, {hah:`xixi ${i}`});
}
// console.log(errorHandler({errorName: 'E_VALUE_OUT_OF_RANGE'}))
var homebaseError = errorHandler({errorName: 'E_VALUE_OUT_OF_RANGE'});

console.log(JSON.parse(homebaseError.debugInfo).logs)