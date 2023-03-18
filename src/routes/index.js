const express = require('express');

const checkHealth = require('../middleware/health');
const getNodeInfo = require('../middleware/node-info');
const walletBalance = require('../middleware/wallet-balance');
const mintNFT = require('../middleware/mint-nft');

const router = express.Router();

router.get('/health', checkHealth);
router.get('/info', getNodeInfo);
router.get('/balance', walletBalance);
router.get('/mint', mintNFT);

module.exports = router;
