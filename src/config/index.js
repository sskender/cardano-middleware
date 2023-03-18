const dotenv = require('dotenv');
const path = require('path');

if (process.env.NODE_ENV) {
  const profile = process.env.NODE_ENV;
  dotenv.config({ path: path.join(__dirname, `./../.env.${profile}`) });
} else {
  dotenv.config({ path: path.join(__dirname, './../.env') });
}

module.exports = {
  profile: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  logger: {
    logLevel: process.env.LOG_LEVEL || 'debug',
  },
  cardano: {
    network: process.env.CARDANO_NETWORK || 'testnet-magic 1',
    walletNamePrimary: process.env.WALLET_NAME_PRIMARY || 'WalletLandMinesNFT',
    walletNameSecondary: process.env.WALLET_NAME_SECONDARY || 'WitnessWallet',
  },
  files: {
    uploadSizeLimit: 256 * 1024 * 1024,
  },
};
