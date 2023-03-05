# Local development guide

## On local machine

Connect to remote Docker:

```bash
export DOCKER_HOST=ssh://cardano-vps
```

Run build on the remote machine from local project:

```bash
docker build -t cardano-nft-land-mines .
```

Now the Docker image is built from local context on the remote machine.

On the remote machine, Docker container can be started with file system from the host - all Cardano data!

## On remote machine

Run built Docker container and expose public access:

```bash
docker run --rm -p 3000:3000 -it -v $PWD/cardano-data/cardano/ipc/socket:/opt/cardano/ipc/socket cardano-nft-land-mines:latest
```

## Anywhere in the world

Connect to public API:

```bash
curl "http://143.42.205.184:3000/api/v1/info" | jq
```
