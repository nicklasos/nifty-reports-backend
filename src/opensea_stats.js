const { getConnection } = require('./mongo');
const axios = require('axios');
const {
  saveCalculatedStats,
  getLastBatchId,
  createNewBatch,
  markBatchAsDone,
} = require('./opensea_db');
const { getAssets } = require('./opensea_api');

async function calculateAndSaveStatsFromLastBatch(
  collectionSlug,
  collectionSize
) {
  const batchId = await getLastBatchId(collectionSlug);
  await calculateAndSaveStats(collectionSlug, collectionSize, batchId);
}

async function calculateAndSaveStats(collectionSlug, collectionSize, batchId) {
  const assets = await getConnection().collection('opensea_assets').find({
    collection_slug: collectionSlug,
    batch: batchId,
  });

  const data = await assets.toArray();
  if (!data.length) {
    console.log('No data to calculate opensea stats');
    return;
  }

  const finalData = await calculateStats(data, collectionSize);

  await saveCalculatedStats(collectionSlug, batchId, finalData);
}

async function calculateStats(data, collectionSize) {
  // 1. SIMPLIFY THE HUGE OBJECT INTO MAP OF UNIQUE WALLETS
  const reducedData = new Map();
  let listed = 0;

  data.forEach((nft) => {
    const {
      owner: { address },
      last_sale,
      token_id,
      collection_created_date,
      active_orders,
    } = nft;

    if (active_orders) listed++;
    // Check if sale event exist otherwise set mint date as event timestamp
    const saleEvent = last_sale?.event_timestamp ?? collection_created_date;

    if (reducedData.has(address)) {
      const { amount, holdingSince } = reducedData.get(address);

      const newHoldingSince =
        holdingSince > saleEvent ? saleEvent : holdingSince;

      reducedData.set(address, {
        tokenId: token_id,
        amount: amount + 1,
        holdingSince: newHoldingSince.split('T', 1)[0],
      });
    } else {
      reducedData.set(address, {
        tokenId: token_id,
        amount: 1,
        holdingSince: saleEvent.split('T', 1)[0],
      });
    }
  });

  /* Listed NFTs */
  const listedRatio = ((listed * 100) / collectionSize).toFixed(2);

  //  FIND BLUE CHIP
  let blueChipHolder = 0;
  const BLUE_CHIP_COLLECTIONS = [
    '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // BAYC
    '0x60e4d786628fea6478f785a6d7e704777c86a7c6', // MAYC
    '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e', // DOODLES
    '0xed5af388653567af2f388e6224dc7c4b3241c544', // AZUKI
    '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b', // CLONE-X
    '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', // Punks
    '0x23581767a106ae21c074b2276d25e5c3e136a68b', // MOONBIRD
    '0x1a92f7381b9f03921564a437210bb9396471050c', // COOLCATS
  ];

  const calculateBlueChipHolders = async () => {
    const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

    const values = await Promise.all(
      [...reducedData.keys()].map(async (address) => {
        const moralisApiUrl = `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`;

        const { data } = await axios.get(moralisApiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': MORALIS_API_KEY,
          },
        });

        const matches = data.result
          .map((nft) => {
            return BLUE_CHIP_COLLECTIONS.includes(nft.token_address);
          })
          .filter(Boolean);

        return matches.length >= 1;
      })
    );

    return values.reduce((prev, curr) => prev + curr, 0);
  };

  // const res = await calculateBlueChipHolders();//.then((res) => console.log(res)).catch(console.error);
  // console.log(res);
  // return;

  // 2. SORT BASED ON NFTS per WALLET

  const sortedMap = new Map(
    [...reducedData.entries()].sort(
      ([keyA, valueA], [keyB, valueB]) => valueB.amount - valueA.amount
    )
  );

  // CALCULATE HOW LONG HAVE EACH BEEN LONGEST HOLDING FOR (DAYS);
  const extendedMap = new Map(
    [...sortedMap.entries()].map(([key, value]) => {
      const now = new Date();
      const { holdingSince } = value;

      const timeDiff = now.getTime() - new Date(holdingSince).getTime();

      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      return [
        key,
        {
          ...value,
          daysHolding: daysDiff,
        },
      ];
    })
  );

  /* Unique holders */
  const uniqueHolders = extendedMap.size;
  const uniqueHoldersRatio = ((uniqueHolders * 100) / collectionSize).toFixed(
    2
  );

  // console.log(uniqueHolders);

  // 3. GET top10, 50, 100 holder amounts
  const TOP_10 = 10;
  const TOP_50 = 50;
  const TOP_100 = 100;

  const top10Holder = [...extendedMap.values()].slice(TOP_10 - 1, TOP_10)[0]
    ?.amount;
  const top50Holder = [...extendedMap.values()].slice(TOP_50 - 1, TOP_50)[0]
    ?.amount;
  const top100Holder = [...extendedMap.values()].slice(TOP_100 - 1, TOP_100)[0]
    ?.amount;

  // console.log(`Top 10 holder:`,top10Holder);
  // console.log(`Top 50 holder:`,top50Holder);
  // console.log(`Top 100 holder:`,top100Holder);

  // 4a. CALCULATE amount of wallets with 1, 2-3, 4+ NFTS
  const SINGLE = 1;
  const TRIPLE = 3;
  const QUAD = 4;

  const singleNftHolders = [...extendedMap.values()].filter(
    (wallet) => wallet.amount === SINGLE
  ).length;
  const tripleNftHolders = [...extendedMap.values()].filter(
    (wallet) => wallet.amount > SINGLE && wallet.amount <= TRIPLE
  ).length;
  const quadNftHolders = [...extendedMap.values()].filter(
    (wallet) => wallet.amount >= QUAD
  ).length;

  // 4b. CALCULATE % of wallets with 1, 2-3, 4+ NFTS
  const singleNftHolderRatio = (
    (singleNftHolders / uniqueHolders) *
    100
  ).toFixed(2);
  const tripleNftHoldersRatio = (
    (tripleNftHolders / uniqueHolders) *
    100
  ).toFixed(2);
  const quadNftHoldersRatio = ((quadNftHolders / uniqueHolders) * 100).toFixed(
    2
  );

  // console.log(`Holders w/ ${SINGLE} NFT - ${singleNftHolders} are ${singleNftHolderRatio}%`);
  // console.log(`Holders w/ 2-${TRIPLE} NFTs - ${tripleNftHolders} are ${tripleNftHoldersRatio}%`);
  // console.log(`Holders w/ > ${QUAD} NFTs - ${quadNftHolders} NFT are ${quadNftHoldersRatio}%`);

  // 5b. CALCULATE How long people hodl
  const WEEK = 7;
  const MONTH = 30;

  const weekHolders = [...extendedMap.values()].filter(
    (wallet) => wallet.daysHolding <= WEEK
  ).length;
  const underMonthHolders = [...extendedMap.values()].filter(
    (wallet) => wallet.daysHolding > WEEK && wallet.daysHolding <= MONTH
  ).length;
  const overMonthHolders = [...extendedMap.values()].filter(
    (wallet) => wallet.daysHolding > MONTH
  ).length;

  // CALCULATE % of wallets holding for 1-7D, 7-30D, 30D+
  const weekHoldersRatio = ((weekHolders / uniqueHolders) * 100).toFixed(2);
  const underMonthHoldersRatio = (
    (underMonthHolders / uniqueHolders) *
    100
  ).toFixed(2);
  const overMonthHoldersRatio = (
    (overMonthHolders / uniqueHolders) *
    100
  ).toFixed(2);

  // console.log(weekHolders);
  // console.log(underMonthHolders);
  // console.log(overMonthHolders);

  // console.log(`Holders for 1-7D are ${weekHoldersRatio}%`);
  // console.log(`Holders for 7-30D  are ${underMonthHoldersRatio}%`);
  // console.log(`Holders for 30D+ ${overMonthHoldersRatio}%`);

  const finalStats = {
    unique_holders: {
      number: { value: uniqueHolders },
      ratio: { value: uniqueHoldersRatio },
    },
    top_holders: {
      top10: { value: top10Holder },
      top50: { value: top50Holder },
      top100: { value: top100Holder },
    },
    hold_amount: {
      single: {
        number: { value: singleNftHolders },
        ratio: { value: singleNftHolderRatio },
      },
      triple: {
        number: { value: tripleNftHolders },
        ratio: { value: tripleNftHoldersRatio },
      },
      quad: {
        number: { value: quadNftHolders },
        ratio: { value: quadNftHoldersRatio },
      },
    },
    hold_time: {
      week: {
        number: { value: weekHolders },
        ratio: { value: weekHoldersRatio },
      },
      under_month: {
        number: { value: underMonthHolders },
        ratio: { value: underMonthHoldersRatio },
      },
      over_month: {
        number: { value: overMonthHolders },
        ratio: { value: overMonthHoldersRatio },
      },
    },
    listed: {
      number: { value: listed },
      ratio: { value: listedRatio },
    },
    // blueChipHolders: {
    // 	number: { value:  0},
    // 	ration: 0
    // }
  };

  return finalStats;
}

async function parseOpenseaAssets(collectionSlug, collectionSize) {
  const openseaAssets = await getConnection().collection('opensea_assets');

  let cursor = null;
  let batch = await createNewBatch(collectionSlug);

  do {
    let data = await getAssets(collectionSlug, cursor);

    cursor = data.next;

    let assets = data.assets.map((asset) => ({
      batch: batch.id,
      collection_slug: collectionSlug,
      id: asset.id,
      num_sales: asset.num_sales,
      image_url: asset.image_url,
      name: asset.name,
      description: asset.description,
      external_link: asset.external_link,
      permalink: asset.permalink,
      decimals: asset.decimals,
      token_metadata: asset.token_metadata,
      owner: asset.owner,
      sell_orders: asset.sell_orders,
      last_sale: asset.last_sale,
      top_bid: asset.top_bid,
      listing_date: asset.listing_date,
      is_presale: asset.is_presale,
      transfer_fee_payment_token: asset.transfer_fee_payment_token,
      transfer_fee: asset.transfer_fee,
      token_id: asset.token_id,
      asset_contract: asset.asset_contract,
      active_orders: asset.sell_orders || asset.seaport_sell_orders,
      collection_created_date: asset.collection.created_date.substring(
        0,
        asset.collection.created_date.indexOf('.')
      ),
    }));

    await openseaAssets.insertMany(assets);

    process.stdout.write('.');
  } while (cursor);

  await markBatchAsDone(collectionSlug, batch.id);
  await calculateAndSaveStats(collectionSlug, collectionSize, batch.id);
}

module.exports = {
  calculateAndSaveStatsFromLastBatch,
  calculateAndSaveStats,
  calculateStats,
  parseOpenseaAssets,
};
