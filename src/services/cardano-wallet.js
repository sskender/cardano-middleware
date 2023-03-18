const logger = require('../utils/logger');
const cardano = require('../utils/cardano');

function createNewWallet(account) {
  logger.info(`Creating wallet '${account}'`);

  const payment = cardano.addressKeyGen(account);
  const stake = cardano.stakeAddressKeyGen(account);

  cardano.stakeAddressBuild(account);
  cardano.addressBuild(account, {
    paymentVkey: payment.vkey,
    stakeVkey: stake.vkey,
  });

  const wallet = cardano.wallet(account);

  logger.info(`Created wallet '${wallet.name}' successfully`);

  return wallet;
}

module.exports = createNewWallet;
