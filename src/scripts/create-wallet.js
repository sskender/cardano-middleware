const config = require('../config');
const createNewWallet = require('../services/cardano-wallet');

const walletName = config.cardano.walletName;
createNewWallet(walletName);
