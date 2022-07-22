const { parseOpenseaAssets } = require('../opensea_stats');
const { getContractStats, getCollectionStats } = require('../opensea_api');
const { getTwitterFollowers } = require('../twitter_api');
const { saveCollectionStats } = require('../opensea_db');
const { parseIcyToolsCollectionStats } = require('../icy_tools');
const { mergeData } = require('../merge_data');
const { generateScreenshots } = require('../screenshot');

const { formatFloat } = require('../utils');

async function parse({
  collectionSlug,
  contractAddress,
  collectionSize,
  twitterHandle,
}) {
  await parseOpenseaAssets(collectionSlug, collectionSize);

  const contract = await getContractStats(contractAddress);
  const collection = await getCollectionStats(collectionSlug);
  const twitterFollowers = await getTwitterFollowers(twitterHandle);

  const stats = {
    chain: 'eth',
    image_url: contract.image_url,
    name: contract.collection.name,
    slug: contract.collection.slug,
    tokenId: contract.symbol,
    description: contract.collection.description,
    external_link: contract.collection.external_url,
    contract_address: contract.address,
    total_supply: collection.stats.total_supply,
    contract_creation_date: contract.created_date,
    twitter_followers: twitterFollowers,
    price: {
      floor: { value: formatFloat(collection.stats.floor_price) },
      average: {
        daily: { value: formatFloat(collection.stats.one_day_average_price) },
        weekly: {
          value: formatFloat(collection.stats.seven_day_average_price),
        },
        monthly: {
          value: formatFloat(collection.stats.thirty_day_average_price),
        },
        total: { value: formatFloat(collection.stats.average_price) },
      },
    },
    sales: {
      daily: { value: collection.stats.one_day_sales },
      weekly: { value: collection.stats.seven_day_sales },
      monthly: { value: collection.stats.thirty_day_sales },
      total: { value: collection.stats.total_sales },
    },
    volume: {
      daily: { value: formatFloat(collection.stats.one_day_volume) },
      weekly: { value: formatFloat(collection.stats.seven_day_volume) },
      monthly: { value: formatFloat(collection.stats.thirty_day_volume) },
      total: { value: formatFloat(collection.stats.total_volume) },
    },
  };

  await saveCollectionStats(collectionSlug, stats);

  await parseIcyToolsCollectionStats(collectionSlug, contractAddress);

  // await parseOptickCommunitySize(collectionSlug, contractAddress);

  const data = await mergeData(collectionSlug);

  await generateScreenshots(data);
}

module.exports = {
  parse,
};
