const axios = require('axios');

const URL = 'https://ada.sskender.com/api/v1/mint';

const payload = {
  id: 'LandMine#1',
  name: 'Glorious land mine number 1',
  description: 'Description of this land mine',
  authors: ['Pyrotechnician 1', 'Pyrotechnician 2'],
  latitude: 5000,
  longitude: 4000,
  files: [
    {
      name: 'File 1',
      mediaType: 'image/gif',
      src: 'cid111',
      sha256: 'hashverification1',
    },
    {
      name: 'File 2',
      mediaType: 'image/gif',
      src: 'cid222',
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
