FROM node:lts-slim AS node

FROM node

ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update -y
RUN apt install -y wget


# TODO refactor cardano section and add env vars for versions
WORKDIR /opt/cardano-node
RUN wget https://update-cardano-mainnet.iohk.io/cardano-node-releases/cardano-node-1.35.5-linux.tar.gz
RUN tar -xzf cardano-node-1.35.5-linux.tar.gz
RUN mv cardano-cli /usr/local/bin
WORKDIR /opt
RUN rm -rf cardano-node

ENV CARDANO_NODE_SOCKET_PATH=/opt/cardano/ipc/socket


WORKDIR /opt/cardano-nft-land-mines

RUN chown -R node:node /opt/cardano-nft-land-mines

COPY --chown=node:node package* .

# TODO add security
# USER node

ENV NODE_ENV=production

RUN npm ci --omit=dev

COPY --chown=node:node src .

EXPOSE 3000

CMD ["npm", "start"]
