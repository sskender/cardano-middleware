const httpStatus = require('http-status');
const config = require('../../config');
const cardano = require('../../utils/cardano');
const logger = require('../../utils/logger');

function getBalance(req, res, next) {
  logger.debug('Fetching account balance from blockchain...');

  const walletName = config.cardano.walletName;
  const sender = cardano.wallet(walletName);
  const balance = sender.balance();

  return res.status(httpStatus.OK).json({
    success: true,
    data: balance,
    status: httpStatus.OK,
  });
}

module.exports = getBalance;
