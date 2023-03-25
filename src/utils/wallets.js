const config = require('../config');
const cardano = require('./cardano');
const logger = require('./logger');

const primaryWallet = cardano.wallet(config.cardano.primaryWalletName);

const secondaryWallets = config.cardano.secondaryWalletNames.map(
  (walletName) => {
    return cardano.wallet(walletName);
  }
);

const wallets = [primaryWallet, ...secondaryWallets];

logger.info('Loading wallets...');
logger.info(wallets);

module.exports = wallets;
