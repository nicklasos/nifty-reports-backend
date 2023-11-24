const axios = require('axios');
const fns = require('date-fns');

const { getConnection } = require('./mongo');
const { formatFloat } = require('./utils');

async function parseIcyToolsCollectionStats(collectionSlug, contractAddress) {
  // Last day
  const yesterdayDate = fns.startOfYesterday();
  const daily_stats = await getIcyToolsCollectionStats(
    contractAddress,
    yesterdayDate
  );

  // Last week
  const weekAgoDate = fns.sub(new Date(fns.startOfToday()), { weeks: 1 });
  const weekly_stats = await getIcyToolsCollectionStats(
    contractAddress,
    weekAgoDate
  );

  // Last month
  // (!) NOT SUPPORTED BY ICY_TOOLS
  // ERROR: "message": "You can only query aggregate stats within a 7 day range.",

  await getConnection()
    .collection('icy_tools_stats')
    .insertOne({
      collection_slug: collectionSlug,
      data: {
        daily: {
          ...daily_stats,
        },
        weekly: {
          ...weekly_stats,
        },
      },
      created_at: new Date(),
    });
}

async function getLastIcyToolsData(collectionSlug) {
  const { data } = await getConnection()
    .collection('icy_tools_stats')
    .findOne({ collection_slug: collectionSlug }, { sort: { _id: -1 } });

  return { salesPrice: data };
}

// FLOOR - LOWEST SOLD NFT
// CEILING - HIGHEST SOLD NFT
// Default {endDate} is Today

async function getIcyToolsCollectionStats(contractAddress, startDate) {
  const url = 'https://graphql.icy.tools/graphql';
  const API_KEY = process.env.ICYTOOLS_API_KEY;

  if (!contractAddress) throw new Error('Please provide a contract address');

  const { data } = await axios({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    data: JSON.stringify({
      query: `
          query CollectionStats($contractAddress: String!, $endDate: Date!, $startDate: Date!) {
            contract(address: $contractAddress) {
              ... on ERC721Contract {
              stats(
                timeRange: {
                  gte: $startDate
                  lt: $endDate
                }
              ) {
                floor
                ceiling
                }
              }
            }
          }
        `,
      variables: {
        contractAddress,
        endDate: fns.startOfToday(),
        startDate: startDate,
      },
    }),
  });

  const salesPrice = {
    lowest: { value: formatFloat(data.data.contract.stats.floor)},
    highest: { value: formatFloat(data.data.contract.stats.ceiling) },
  };

  return salesPrice;
}

module.exports = {
  getLastIcyToolsData,
  getIcyToolsCollectionStats,
  parseIcyToolsCollectionStats,
};
