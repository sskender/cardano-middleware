const httpStatus = require('http-status');

function handleNotFound(req, res, next) {
  const error = new Error('Not found');
  error.statusCode = httpStatus.NOT_FOUND;
  next(error);
}

module.exports = handleNotFound;
