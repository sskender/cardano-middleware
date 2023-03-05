const winston = require('winston');
const config = require('../config');

const logger = winston.createLogger({
  level: config.logger.logLevel,
  transports: [new winston.transports.Console()],
});

module.exports = logger;
