/* eslint-disable no-console */
const axios = require('axios');

const URL = 'https://ada.sskender.com/api/v1/token/mint';

const payload = {
  id: 'LandMine#14',
  name: 'Glorious land mine number 14',
  description: 'Description of this land mine 14',
  authors: ['Pyrotechnician 14', 'Pyrotechnician 24'],
  latitude: 50004,
  longitude: 40004,
  files: [
    {
      name: 'File 12',
      mediaType: 'image/gif',
      src: 'cid111333',
      sha256: 'hashverification1',
    },
    {
      name: 'File 21',
      mediaType: 'image/gif',
      src: 'cid222444',
      sha256: 'hashverification2',
    },
  ],
};

axios
  .post(URL, payload)
  .then((response) => {
    const data = response.data;
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
