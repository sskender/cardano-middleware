const httpStatus = require('http-status');
const logger = require('../utils/logger');
const wallet = require('../utils/wallet');

function walletBalance(req, res, next) {
  try {
    logger.debug('Fetching account balance from blockchain...');

    const balance = wallet.balance();

    return res.status(httpStatus.OK).json({
      success: true,
      data: balance,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = walletBalance;
