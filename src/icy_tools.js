const axios = require('axios');
const {getConnection} = require("./mongo");

async function parseIcyToolsCollectionStats(collectionSlug, contractAddress) {
	const stats = await getIcyToolsCollectionStats(contractAddress);

	await getConnection().collection('icy_tools_stats').insertOne({
		collection_slug: collectionSlug,
		...stats,
		created_at: new Date(),
	});
}

async function getLastIcyToolsData(collectionSlug) {
	return await getConnection().collection('icy_tools_stats').findOne(
		{collection_slug: collectionSlug},
		{sort: {id: -1}},
	);
}

async function getIcyToolsCollectionStats(contractAddress) {
  const url = 'https://graphql.icy.tools/graphql';
  const API_KEY = '191264f1bd0c46f39c9dbc2cef04b7a3';

  if(!contractAddress) throw new Error('Please provide a contract address');
  
  const todayStamp = new Date().getTime();
  const yesterdayTimeStamp = todayStamp - 24*60*60*1000;
  
  const todayDate = new Date().toISOString();
  const yesterdayDate = new Date(yesterdayTimeStamp).toISOString();

  const { data } = await axios({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "x-api-key": API_KEY
    },
    data: JSON.stringify({
      query: `
          query CollectionStats($contractAddress: String!, $today: Date!, $yesterday: Date!) {
            contract(address: $contractAddress) {
              ... on ERC721Contract {
              stats(
                timeRange: {
                  gte: $yesterday
                  lt: $today
                }
              ) {
                floor
                volume
                average
                ceiling
                totalSales
                }
              }
            }
          }
        `,
      variables: {
        contractAddress,
        today: todayDate,
        yesterday: yesterdayDate
      },
    }),
  });

  return data.data.contract.stats;
}

module.exports = {
	getLastIcyToolsData,
	getIcyToolsCollectionStats,
	parseIcyToolsCollectionStats,
}