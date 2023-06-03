const config = require('../config');
const cardano = require('./cardano');
const logger = require('./logger');
const createNewWallet = require('../services/cardano-wallet');

logger.info('Loading wallets...');

const walletNames = config.cardano.wallets;

const wallets = walletNames.map((walletName) => {
  try {
    return cardano.wallet(walletName);
  } catch (err) {
    return createNewWallet(walletName);
  }
});

logger.info(wallets);

module.exports = wallets;
