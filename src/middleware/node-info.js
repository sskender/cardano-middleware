const httpStatus = require('http-status');
const cardano = require('../utils/cardano');

function getNodeInfo(req, res, next) {
  try {
    const queryTip = cardano.queryTip();
    return res.status(httpStatus.OK).json({
      success: true,
      data: queryTip,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = getNodeInfo;
