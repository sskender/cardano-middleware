# Running Cardano node

Full docs [link](https://developers.cardano.org/docs/get-started/running-cardano/).

## Testnet / Preprod

NetworkMagic: 1

Prepare folders on the host machine:

```bash
mkdir -p $PWD/environments/preprod
mkdir -p $PWD/cardano-data
```

Download environments:

```bash
curl -O -J https://book.world.dev.cardano.org/environments/preprod/config.json
curl -O -J https://book.world.dev.cardano.org/environments/preprod/db-sync-config.json
curl -O -J https://book.world.dev.cardano.org/environments/preprod/submit-api-config.json
curl -O -J https://book.world.dev.cardano.org/environments/preprod/topology.json
curl -O -J https://book.world.dev.cardano.org/environments/preprod/byron-genesis.json
curl -O -J https://book.world.dev.cardano.org/environments/preprod/shelley-genesis.json
curl -O -J https://book.world.dev.cardano.org/environments/preprod/alonzo-genesis.json
```

Run node with Docker - run in background or in tmux:

```bash
docker run \
    --name cardano-node \
    --volume $PWD/environments/preprod:/configuration \
    --volume $PWD/cardano-data:/opt \
    inputoutput/cardano-node run \
    --config /configuration/config.json \
    --topology /configuration/topology.json
```
