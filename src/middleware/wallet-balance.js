const httpStatus = require('http-status');
const logger = require('../utils/logger');
const { walletPrimary, walletSecondary } = require('../utils/wallets');

function walletBalance(req, res, next) {
  try {
    logger.debug('Fetching account balance from blockchain...');

    const balanceVal1 = walletPrimary.balance().value;
    const balanceVal2 = walletSecondary.balance().value;

    const resData = {
      balance1: balanceVal1,
      balance2: balanceVal2,
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

module.exports = walletBalance;
