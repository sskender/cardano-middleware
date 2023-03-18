const express = require('express');

const checkHealth = require('../middleware/check-health');
const getNodeInfo = require('../middleware/node-info');
const walletBalance = require('../middleware/wallet-balance');
const walletAddress = require('../middleware/wallet-address');
const mintNFT = require('../middleware/mint-nft');

const router = express.Router();

router.get('/health', checkHealth);

router.get('/node-info', getNodeInfo);

router.get('/wallet/balance', walletBalance);
router.get('/wallet/address', walletAddress);

router.get('/mint', mintNFT); // TODO change to POST

module.exports = router;
