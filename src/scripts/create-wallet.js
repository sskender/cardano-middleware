const config = require('../config');
const cardano = require('../utils/cardano');

function createWallet(account) {
  const payment = cardano.addressKeyGen(account);
  const stake = cardano.stakeAddressKeyGen(account);
  cardano.stakeAddressBuild(account);
  cardano.addressBuild(account, {
    paymentVkey: payment.vkey,
    stakeVkey: stake.vkey,
  });
  return cardano.wallet(account);
}

const walletName = config.cardano.walletName;
createWallet(walletName);
