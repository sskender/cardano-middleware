const httpStatus = require('http-status');
const cardano = require('../../utils/cardano');

function getNodeInfo(req, res, next) {
  const queryTip = cardano.queryTip();
  return res.status(httpStatus.OK).json({
    success: true,
    data: queryTip,
    status: httpStatus.OK,
  });
}

module.exports = getNodeInfo;
