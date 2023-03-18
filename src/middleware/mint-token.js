const httpStatus = require('http-status');
const logger = require('../utils/logger');
const mint = require('../services/cardano-mint');

function mintToken(req, res, next) {
  try {
    logger.debug(req.body);

    const metadata = { ...req.body };
    const assetName = metadata.id;
    delete metadata.id;

    const txHash = mint(assetName, metadata);

    const resData = {
      transaction_hash: txHash,
      token_metadata: metadata,
    };

    return res.status(httpStatus.OK).json({
      success: true,
      data: resData,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = mintToken;
