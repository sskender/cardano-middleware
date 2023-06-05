/* eslint-disable no-console */
const axios = require('axios');

const URL = 'https://ada.sskender.com/api/v1/token/mint';

const payload = {
  id: 'LandMine#42',
  name: 'MRUD',
  description: 'Directed fragmentation mine',
  latitude: '45.8001454',
  longitude: '15.970733',
  files: [
    {
      name: 'File#1024',
      mediaType: 'image/png',
      src: 'QmZP1qyDSdA32763LD4hAYW6xKp59XCAig4vo9hFuqtsL6',
    },
    {
      name: 'File#1025',
      mediaType: 'image/gif',
      src: 'LiZP1qyDSdA36763LD4hAYW6xGp59XCAig4vo9hOjqtsL7',
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
