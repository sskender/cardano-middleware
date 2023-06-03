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
    socketPath: process.env.CARDANO_NODE_SOCKET_PATH,
    network: process.env.CARDANO_NETWORK || 'testnet-magic 1',
    wallets: ['Wallet1', 'Wallet2', 'Wallet3'],
  },
};
