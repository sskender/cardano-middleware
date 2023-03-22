/* eslint-disable no-console */
const axios = require('axios');

const URL = 'https://ada.sskender.com/api/v1/health';

axios
  .get(URL)
  .then((response) => {
    const data = response.data;
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
