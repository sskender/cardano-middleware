const httpStatus = require('http-status');
const wallet = require('../utils/wallet');

function walletAddress(req, res, next) {
  try {
    const resData = {
      paymentAddress: wallet.paymentAddr,
    };

    return res.status(httpStatus.OK).json({
      success: true,
      data: resData,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = walletAddress;
