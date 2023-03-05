const express = require('express');

const checkHealth = require('../middleware/health');

const router = express.Router();

router.get('/health', checkHealth);

module.exports = router;
