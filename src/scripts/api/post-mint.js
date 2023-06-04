/* eslint-disable no-console */
const axios = require('axios');

const URL = 'https://ada.sskender.com/api/v1/token/mint';

const payload = {
  id: 'LandMine#42',
  name: 'MRUD - Directed fragmentation mine',
  description:
    'The casing is a light green color with two detonator wells and three crude sight lines on the top and   an embossed grid pattern on the front of some early mines. Two detachable metal legs fit in slots on the bottom to   secure the mine when it is ground mounted.',
  authors: ['Pyrotechnician 11', 'Pyrotechnician 24'],
  latitude: 45.8001454,
  longitude: 15.970733,
  files: [
    {
      name: 'File#1024',
      mediaType: 'image/png',
      src: 'ipfs.io/ipfs/QmZP1qyDSdA32763LD4hAYW6xKp59XCAig4vo9hFuqtsL6',
      sha256:
        '5fd5736e399fbc6985ac396e676184f49a98af94d9c8388f6f93fa8f58b692d7',
    },
    {
      name: 'File#1025',
      mediaType: 'image/gif',
      src: 'ipfs.io/ipfs/LiZP1qyDSdA36763LD4hAYW6xGp59XCAig4vo9hOjqtsL7',
      sha256:
        '1d461d1d2236bb76803b510dbec331f3828c234c3c4a6f6b6854e81e66affabf',
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
