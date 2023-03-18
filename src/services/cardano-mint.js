const cardano = require('../utils/cardano');
const { walletPrimary, walletSecondary } = require('../utils/wallets');

function createMintScript() {
  return {
    type: 'all',
    scripts: [
      {
        keyHash: cardano.addressKeyHash(walletPrimary.name),
        type: 'sig',
      },
      {
        keyHash: cardano.addressKeyHash(walletSecondary.name),
        type: 'sig',
      },
    ],
  };
}

function createAssetId(assetName, policyId) {
  const assetNameHex = assetName
    .split('')
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
  const assetId = `${policyId}.${assetNameHex}`;
  return assetId;
}

function craftMetadata(assetName, policyId, additionalMetadata) {
  return {
    721: {
      [policyId]: {
        [assetName]: {
          name: assetName,
          description: 'Titisusa',
          authors: ['Hello', 'World'],
          // TODO add more key value pairs
        },
      },
    },
  };
}

function buildTransaction(assetId, mintScript, metadata) {
  const tx = {
    txIn: walletPrimary.balance().utxo,
    txOut: [
      {
        address: walletPrimary.paymentAddr,
        value: { ...walletPrimary.balance().value, [assetId]: 1 },
      },
    ],
    mint: [{ action: 'mint', quantity: 1, asset: assetId, script: mintScript }],
    metadata,
    witnessCount: 2,
  };

  const rawTx = cardano.transactionBuildRaw(tx);
  const fee = cardano.transactionCalculateMinFee({
    ...tx,
    txBody: rawTx,
  });

  tx.txOut[0].value.lovelace -= fee;

  return cardano.transactionBuildRaw({ ...tx, fee });
}

function signTransaction(rawTx, mintScript) {
  return cardano.transactionSign({
    signingKeys: [walletPrimary.payment.skey, walletSecondary.payment.skey],
    scriptFile: mintScript,
    txBody: rawTx,
  });
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
