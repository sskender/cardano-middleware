const express = require('express');

const checkHealth = require('../middleware/health');
const getNodeInfo = require('../middleware/cardano/node-info');

const router = express.Router();

router.get('/health', checkHealth);
router.get('/info', getNodeInfo);

module.exports = router;
