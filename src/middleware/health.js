const httpStatus = require('http-status');

function checkHealth(req, res) {
  return res.status(httpStatus.OK).json({ success: true, status: 'UP' });
}

module.exports = checkHealth;
