const httpStatus = require('http-status');
const logger = require('../utils/logger');
const wallets = require('../utils/wallets');

function walletBalance(req, res, next) {
  try {
    logger.debug('Fetching account balance from blockchain...');

    const resData = {};

    for (const wallet of wallets) {
      resData[wallet.name] = wallet.balance()?.value?.lovelace || 0;
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

module.exports = walletBalance;
