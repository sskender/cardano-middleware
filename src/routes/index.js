const express = require('express');

const checkHealth = require('../middleware/check-health');

const getNodeInfo = require('../middleware/node-info');

const walletBalance = require('../middleware/wallet-balance');
const walletAddress = require('../middleware/wallet-address');

const mintToken = require('../middleware/mint-token');

const router = express.Router();

router.get('/health', checkHealth);

router.get('/node/info', getNodeInfo);

router.get('/wallet/balance', walletBalance);
router.get('/wallet/address', walletAddress);

router.post('/token/mint', mintToken);

module.exports = router;
