const httpStatus = require('http-status');
const logger = require('../utils/logger');
const wallet = require('../utils/wallet');

function walletBalance(req, res, next) {
  try {
    logger.debug('Fetching account balance from blockchain...');

    const { value } = wallet.balance();

    return res.status(httpStatus.OK).json({
      success: true,
      data: value,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = walletBalance;
