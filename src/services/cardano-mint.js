const logger = require('../utils/logger');
const cardano = require('../utils/cardano');
const wallets = require('../utils/wallets');

const primaryWallet = wallets[0];

function createMintScript() {
  logger.info('Creating mint script...');

  const mintScript = {
    type: 'all',
    scripts: [],
  };

  for (const wallet of wallets) {
    mintScript.scripts.push({
      keyHash: cardano.addressKeyHash(wallet.name),
      type: 'sig',
    });
  }

  logger.info(mintScript);

  return mintScript;
}

function createAssetId(assetName, policyId) {
  logger.info('Creating asset id from name and policy...');

  const assetNameHex = Buffer.from(assetName).toString('hex');
  const assetId = `${policyId}.${assetNameHex}`;

  logger.info(assetId);

  return assetId;
}

function craftMetadata(assetName, policyId, additionalMetadata) {
  logger.info('Crafting metadata...');

  const metadata = {
    721: {
      [policyId]: {
        [assetName]: additionalMetadata,
      },
    },
  };

  logger.info(metadata);

  return metadata;
}

function buildTransaction(assetId, mintScript, metadata) {
  logger.info('Building transaction...');

  const tx = {
    txIn: primaryWallet.balance().utxo,
    txOut: [
      {
        address: primaryWallet.paymentAddr,
        value: { ...primaryWallet.balance().value, [assetId]: 1 },
      },
    ],
    mint: [{ action: 'mint', quantity: 1, asset: assetId, script: mintScript }],
    metadata,
    witnessCount: 2,
  };

  logger.info(tx);

  const rawTx = cardano.transactionBuildRaw(tx);
  const fee = cardano.transactionCalculateMinFee({
    ...tx,
    txBody: rawTx,
  });

  tx.txOut[0].value.lovelace -= fee;

  logger.info(tx);

  return cardano.transactionBuildRaw({ ...tx, fee });
}

function signTransaction(rawTx, mintScript) {
  logger.info('Signing transaction...');

  const signingKeys = [];
  for (const wallet of wallets) {
    signingKeys.push(wallet.payment.skey);
  }

  const signedTx = cardano.transactionSign({
    signingKeys: signingKeys,
    scriptFile: mintScript,
    txBody: rawTx,
  });

  logger.info(signedTx);

  return signedTx;
}

function mint(assetName, additionalMetadata) {
  // mint script
  const mintScript = createMintScript();

  // policy id
  const policyId = cardano.transactionPolicyid(mintScript);

  // asset id
  const assetId = createAssetId(assetName, policyId);

  // metadata
  const metadata = craftMetadata(assetName, policyId, additionalMetadata);

  // build raw tx
  const rawTx = buildTransaction(assetId, mintScript, metadata);

  // sign raw tx
  const signedTx = signTransaction(rawTx, mintScript);

  // submit tx to network
  const txHash = cardano.transactionSubmit(signedTx);

  return txHash;
}

module.exports = mint;
