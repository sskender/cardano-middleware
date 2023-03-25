const httpStatus = require('http-status');
const wallets = require('../utils/wallets');
const logger = require('./../utils/logger');

function walletAddress(req, res, next) {
  try {
    const resData = {};

    logger.debug('Fetching wallet addresses...');

    for (const wallet of wallets) {
      resData[wallet.name] = wallet.paymentAddr;
    }

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
