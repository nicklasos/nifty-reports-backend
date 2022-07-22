const axios = require('axios');

const request = axios.create({
  baseURL: 'https://api.opensea.io/api/v1',
  headers: {
    'X-API-KEY': process.env.OPENSEA_API_KEY,
  },
});

async function getCollectionStats(collectionSlug) {
  const url = `/collection/${collectionSlug}/stats`;

  const { data } = await request.get(url);

  return data;
}

async function getAssets(collectionSlug, cursor) {
  let url = `/assets?collection_slug=${collectionSlug}&limit=50&include_orders=true`;
  if (cursor) {
    url = `${url}&cursor=${cursor}`;
  }

  const { data } = await request.get(url);

  return data;
}

async function getContractStats(contractAddress) {
  const url = `/asset_contract/${contractAddress}`;

  const { data } = await request.get(url);

  return data;
}

module.exports = {
  getAssets,
  getCollectionStats,
  getContractStats,
};
