const axios = require('axios');
const fs = require('fs');

const raw_imported_data = require('./raw_data.json');

const COLLECTION_SIZE = 7777;
// 1. SIMPLIFY THE HUGE OBJECT INTO MAP OF UNIQUE WALLETS
const reducedData = new Map();

raw_imported_data.forEach((nft) => {
  const { owner, last_sale, token_id, collection_created_date } = nft;

  // Check if sale event exist otherwise set mint date as event timestamp
  const saleEvent = last_sale
    ? last_sale.event_timestamp
    : collection_created_date;

  if (reducedData.has(owner.address)) {
    const { amount, holdingSince } = reducedData.get(owner.address);

    const newHoldingSince = holdingSince > saleEvent ? saleEvent : holdingSince;

    reducedData.set(owner.address, {
      tokenId: token_id,
      amount: amount + 1,
      holdingSince: newHoldingSince.split('T', 1)[0],
    });
  } else {
    reducedData.set(owner.address, {
      tokenId: token_id,
      amount: 1,
      holdingSince: saleEvent.split('T', 1)[0],
    });
  }
});

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
  const MORALIS_API_KEY =
    'D72mKKMwESsyNu6iPqCHaqpmsrSb0YCQvg5GP2F1kuNwimHLyAWbKEE0XjGJdyUf';

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

// calculateBlueChipHolders().then((res) => console.log(res)).catch(console.error);

// 2. SORT BASED ON NFTS per WALLET

const sortedMap = new Map(
  [...reducedData.entries()].sort(
    ([keyA, valueA], [keyB, valueB]) => valueB.amount - valueA.amount
  )
);
try {
  fs.writeFileSync('./test.json', JSON.stringify([...sortedMap.entries()]));
  // file written successfully
} catch (err) {
  console.error(err);
}

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

const uniqueHolders = extendedMap.size;
const uniqueHoldersRatio = ((uniqueHolders * 100) / COLLECTION_SIZE).toFixed(2);

// 3. GET top10, 50, 100 holder amounts
const TOP_10 = 1;
const TOP_50 = 3;
const TOP_100 = 5;

const top10Holder = [...sortedMap.values()].slice(TOP_10 - 1, TOP_10)[0]
  ?.amount;
const top50Holder = [...sortedMap.values()].slice(TOP_50 - 1, TOP_50)[0]
  ?.amount;
const top100Holder = [...sortedMap.values()].slice(TOP_100 - 1, TOP_100)[0]
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
const singleNftHolderRatio = ((singleNftHolders / uniqueHolders) * 100).toFixed(
  2
);
const tripleNftHoldersRatio = (
  (tripleNftHolders / uniqueHolders) *
  100
).toFixed(2);
const quadNftHoldersRatio = ((quadNftHolders / uniqueHolders) * 100).toFixed(2);

// console.log(`Holders w/ ${singleNftHolders} NFT are ${singleNftHolderRatio}%`);
// console.log(`Holders w/ ${tripleNftHolders} NFT are ${tripleNftHoldersRatio}%`);
// console.log(`Holders w/ ${quadNftHolders} NFT are ${quadNftHoldersRatio}%`);

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
  uniqueHolders: {
    number: uniqueHolders,
    ratio: uniqueHoldersRatio,
  },
  topHolders: {
    top10: top10Holder,
    top50: top50Holder,
    top100: top100Holder,
  },
  holdAmount: {
    single: {
      number: singleNftHolders,
      ratio: singleNftHolderRatio,
    },
    triple: {
      number: tripleNftHolders,
      ratio: tripleNftHoldersRatio,
    },
    quad: {
      number: quadNftHolders,
      ratio: quadNftHoldersRatio,
    },
  },
  holdTime: {
    week: {
      number: weekHolders,
      ratio: weekHoldersRatio,
    },
    underMonth: {
      number: underMonthHolders,
      ratio: underMonthHoldersRatio,
    },
    overMonth: {
      number: overMonthHolders,
      ratio: overMonthHoldersRatio,
    },
  },
  blueChipHolders: {
    number: 0,
    ration: 0,
  },
};

console.log(finalStats);
