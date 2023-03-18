const config = require('../config');
const cardano = require('./cardano');

const walletName = config.cardano.walletName;
const wallet = cardano.wallet(walletName);

module.exports = wallet;
