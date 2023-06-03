const CardanocliJs = require('cardanocli-js');
const config = require('../config');
const logger = require('./logger');

const cardano = new CardanocliJs({
  network: config.cardano.network,
  socketPath: config.cardano.socketPath,
});

logger.info(`Connecting through ${config.cardano.socketPath}`);
logger.info(`Connected to ${config.cardano.network}`);

module.exports = cardano;
