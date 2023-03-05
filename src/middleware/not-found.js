const httpStatus = require('http-status');

function notFoundHandler(req, res, next) {
  const error = new Error('Not found');
  error.statusCode = httpStatus.NOT_FOUND;
  next(error);
}

module.exports = notFoundHandler;
