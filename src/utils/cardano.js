const CardanocliJs = require('cardanocli-js');
const config = require('../config');

const cardano = new CardanocliJs({
  network: config.cardano.network,
});

module.exports = cardano;
