const CardanocliJs = require('cardanocli-js');
const config = require('../config');

const cardanocliJs = new CardanocliJs({
  network: config.cardano.network,
});

module.exports = cardanocliJs;
