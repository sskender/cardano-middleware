const logger = require('../utils/logger');
const mint = require('../services/cardano-mint');

function mintToken(req, res, next) {
  try {
    // TODO read this from req
    const { cid } = req;
    const assetName = 'newasset#4';
    const additionalMetadata = {};

    logger.debug(`Got cid: ${cid} in mint token middleware`);

    const txHash = mint(assetName, additionalMetadata);
    req.txHash = txHash;

    next();
  } catch (err) {
    return next(err);
  }
}

module.exports = mintToken;
