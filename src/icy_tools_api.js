const axios = require('axios');

const COLLECTION = {
	collectionSlug: 'everai-heroes-duo',
	contractAddress: '0x9a38DEC0590aBC8c883d72E52391090e948DdF12',
	twitterHandle: 'TheEverai'
}

async function getCollectionStats(contractAddress) {
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

  const collectionStats = data.data.contract;
  return collectionStats;
}

getCollectionStats(COLLECTION.contractAddress).then((res) => console.log(res)).catch(console.error);

module.exports = {
	getCollectionStats,
}