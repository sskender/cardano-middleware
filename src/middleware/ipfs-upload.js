const logger = require('../utils/logger');

function uploadToIPFS(req, res, next) {
  try {
    const cid = 'test cid';
    req.cid = cid;
    logger.debug(`set ipfs cid: ${cid}`);

    next();
  } catch (err) {
    return next(err);
  }
}

module.exports = uploadToIPFS;
