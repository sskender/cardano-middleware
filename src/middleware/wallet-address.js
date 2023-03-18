const httpStatus = require('http-status');
const { walletPrimary, walletSecondary } = require('../utils/wallets');

function walletAddress(req, res, next) {
  try {
    const resData = {
      paymentAddress1: walletPrimary.paymentAddr,
      paymentAddress2: walletSecondary.paymentAddr,
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
