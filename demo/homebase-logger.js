"use strict"
var { logger, ErrorHandler } = require('../index')(10);

for(var i = 1; i < 101; i++) {
  logger.info('hahha %s xixi', i, {hah:`xixi ${i}`});
}

var errorHandler = ErrorHandler({
  'test_error': {
    errorName: 'test_error',
    message: '错误测试',
    vendorCode: 1111111
  }
});
console.log(errorHandler({errorName: 'test_error'}))
console.log(errorHandler({errorName: 'E_VALUE_OUT_OF_RANGE'}));