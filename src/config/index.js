const dotenv = require('dotenv');
const path = require('path');

if (process.env.NODE_ENV) {
  const profile = process.env.NODE_ENV;
  dotenv.config({ path: path.join(__dirname, `./../.env.${profile}`) });
} else {
  dotenv.config({ path: path.join(__dirname, './../.env') });
}

module.exports = {
  profile: process.env.NODE_ENV || 'local',
  port: process.env.PORT || 3000,
  logger: {
    logLevel: process.env.LOG_LEVEL || 'info',
  },
};
