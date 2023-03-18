const config = require('../config');
const cardano = require('./cardano');

const walletNamePrimary = config.cardano.walletNamePrimary;
const walletNameSecondary = config.cardano.walletNameSecondary;

const walletPrimary = cardano.wallet(walletNamePrimary);
const walletSecondary = cardano.wallet(walletNameSecondary);

module.exports = { walletPrimary, walletSecondary };
