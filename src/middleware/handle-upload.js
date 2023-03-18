const multer = require('multer');
const config = require('../config');

const uploadFormFieldName = 'files';

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: config.files.uploadSizeLimit,
  },
});

// TODO upload or multiple files

const handleUpload = upload.array(uploadFormFieldName);

module.exports = handleUpload;
