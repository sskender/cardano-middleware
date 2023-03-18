const httpStatus = require('http-status');
const mint = require('../services/cardano-mint');

function mintNFT(req, res, next) {
  try {
    const assetName = 'newasset#1';
    const additionalMetadata = {};

    // TODO upload document to ipfs and pass as additional data

    const txHash = mint(assetName, additionalMetadata);

    return res.status(httpStatus.OK).json({
      success: true,
      data: txHash,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = mintNFT;
