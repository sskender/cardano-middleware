const httpStatus = require('http-status');
const logger = require('../utils/logger');

function storeToIPFS(req, res, next) {
  try {
    logger.info('storing to ipfs');

    // TODO return stored files

    const files = [
      {
        name: 'File 1',
        mediaType: 'image/gif',
        src: 'cid111',
        sha256: 'jakodugihash1',
      },
      {
        name: 'File 2',
        mediaType: 'image/gif',
        src: 'cid222',
        sha256: 'jakodugihash2',
      },
    ];

    return res.status(httpStatus.OK).json({
      success: true,
      data: files,
      status: httpStatus.OK,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = storeToIPFS;
