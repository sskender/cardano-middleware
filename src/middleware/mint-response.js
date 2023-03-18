const httpStatus = require('http-status');
const logger = require('../utils/logger');

function sendMintResponse(req, res, next) {
  try {
    const { cid, txHash } = req;

    logger.debug(
      `got cid: ${cid} and txHash: ${txHash} in final mint response middleware`
    );

    const resData = {
      transaction_hash: txHash,
      ipfs_cid: cid,
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

module.exports = sendMintResponse;
