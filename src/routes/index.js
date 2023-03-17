const express = require('express');

const checkHealth = require('../middleware/health');
const getNodeInfo = require('../middleware/cardano/node-info');
const getBalance = require('../middleware/cardano/get-balance');

const router = express.Router();

router.get('/health', checkHealth);
router.get('/info', getNodeInfo);
router.get('/balance', getBalance);

module.exports = router;
