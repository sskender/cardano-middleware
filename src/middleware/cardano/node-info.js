const httpStatus = require('http-status');

function getNodeInfo(req, res, next) {
  return res.status(httpStatus.OK).json({
    success: true,
    data: null,
    status: httpStatus.OK,
  });
}

module.exports = getNodeInfo;
