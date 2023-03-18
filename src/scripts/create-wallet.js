const logger = require('../utils/logger');
const createNewWallet = require('../services/cardano-wallet');

const argv = process.argv;

if (argv.length <= 2) {
  throw new Error('Missing wallet name!');
}

const walletName = argv[2];

logger.info(`Creating wallet '${walletName}' ...`);

createNewWallet(walletName);

logger.info(`Created wallet '${walletName}' successfully!`);
