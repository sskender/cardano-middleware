const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const logger = require('./utils/logger');
const router = require('./routes');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '256mb' }));
app.use(express.urlencoded({ extended: true, limit: '256mb' }));

app.use('/api/v1/', router);
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

app.listen(3000, () => {
  const env = process.env.NODE_ENV || 'local';
  logger.info(`App running in ${env} environment`);
});
