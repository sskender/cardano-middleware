const httpStatus = require('http-status');
const logger = require('../utils/logger');
const wallets = require('../utils/wallets');

function walletTokens(req, res, next) {
  try {
    logger.info('Fetching available tokens from wallet...');

    const primaryWallet = wallets[0];

    const tokensBalance = primaryWallet.balance()?.value;
    delete tokensBalance.lovelace;

    const tokens = Object.keys(tokensBalance);

    return res.status(httpStatus.OK).json({
      success: true,
      data: tokens,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = walletTokens;
