const httpStatus = require('http-status');

const logger = require('../utils/logger');

function errorHandler(err, req, res, next) {
  logger.error(err);
  logger.error(err.stack);

  if (!err.statusCode) {
    err.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  }

  return res.status(err.statusCode).json({
    success: false,
    data: null,
    status: err.statusCode,
  });
}

module.exports = errorHandler;
