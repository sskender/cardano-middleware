FROM node:lts-slim


ARG CARDANO_VERSION=1.35.5


ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update && apt install --no-install-recommends -y wget

WORKDIR /opt/cardano-node

ENV CARDANO_VERSION=$CARDANO_VERSION

RUN wget --no-check-certificate \
    "https://update-cardano-mainnet.iohk.io/cardano-node-releases/cardano-node-$CARDANO_VERSION-linux.tar.gz"

RUN tar -xzf cardano-node-$CARDANO_VERSION-linux.tar.gz
RUN mv cardano-cli /usr/local/bin

WORKDIR /opt
RUN rm -rf cardano-node

WORKDIR /opt/cardano-middleware

COPY package.json .
COPY package-lock.json .

ENV NODE_ENV=production
ENV CARDANO_NODE_SOCKET_PATH=/opt/cardano/ipc/socket

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
