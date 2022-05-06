// SIMPLIFY THE HUGE OBJECT INTO MAP OF UNIQUE WALLETS
const cleanData = new Map();

RAW_DATA.forEach(nft => {
  const { owner: { address }, last_sale: { event_timestamp } } = nft;

  if (cleanData.has(address)) {
    const { nftsAmount, earliestPurchase } = cleanData.get(address);

    const newEarliestPurchase = earliestPurchase > event_timestamp ? event_timestamp : earliestPurchase;

    cleanData.set(address, { nftsAmount: nftsAmount + 1, earliestPurchase: newEarliestPurchase });
  } else {
    cleanData.set(address, { nftsAmount: 1, earliestPurchase: event_timestamp });
  }
});

// console.log(cleanData)

// SORT BASED ON NFTS per WALLET

const sortedMap = new Map([...cleanData.entries()].sort(([keyA, valueA], [keytB, valueB]) => valueB.nftsAmount - valueA.nftsAmount))

const holdersArrSize = sortedMap.size;

// console.log(holdersArrSize);

// GET top2 and top5 holder amounts
const TOP_2 = 2;
const TOP_5 = 5;

const TOP2_holder = [...sortedMap.values()].slice(TOP_2 - 1, TOP_2)[0].nftsAmount;

const TOP5_holder = [...sortedMap.values()].slice(TOP_5 - 1, TOP_5)[0].nftsAmount;

// console.log(TOP2_holder);
// console.log(TOP5_holder);

// CALCULATE amount of wallets with 1, 2-3, 4+ NFTS
const SINGLE = 1;
const TRIPLE = 3;
const QUAD = 4;

const SINGLE_HOLDERS = [...sortedMap.values()].filter(wallet => wallet.nftsAmount === SINGLE).length;
const TRIPLE_HOLDERS = [...sortedMap.values()].filter(wallet => wallet.nftsAmount > SINGLE && wallet.nftsAmount <= TRIPLE).length;
const QUAD_HOLDERS = [...sortedMap.values()].filter(wallet => wallet.nftsAmount > QUAD).length;

// CALCULATE % of wallets with 1, 2-3, 4+ NFTS
const SINGLE_HOLDERS_PCT = ((SINGLE_HOLDERS / holdersArrSize) * 100).toFixed(2);
const TRIPLE_HOLDERS_PCT = ((TRIPLE_HOLDERS / holdersArrSize) * 100).toFixed(2);
const QUAD_HOLDERS_PCT = ((QUAD_HOLDERS / holdersArrSize) * 100).toFixed(2);

// console.log(`Holders w/ ${SINGLE_HOLDERS} NFT are ${SINGLE_HOLDERS_PCT}%`);
// console.log(`Holders w/ ${TRIPLE_HOLDERS} NFT are ${TRIPLE_HOLDERS_PCT}%`);
// console.log(`Holders w/ ${QUAD_HOLDERS} NFT are ${QUAD_HOLDERS_PCT}%`);


// CALCULATE HOW LONG HAVE EACH BEEN LONGEST HOLDING FOR (DAYS);
const extendedMap = new Map([...sortedMap.entries()].map(([key, value]) => {
  const now = new Date();
  const { earliestPurchase } = value;

  const timeDiff = now.getTime() - new Date(earliestPurchase).getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  return [key, {
    ...value,
    daysHolding: daysDiff
  }]
}));

// console.log(extendedMap);

// CALCULATE How long people hodl
const WEEK = 7;
const MONTH = 30;

const WEEK_HOLDERS = [...extendedMap.values()].filter(wallet => wallet.daysHolding <= WEEK).length;
const UNDER_MONTH_HOLDERS = [...extendedMap.values()].filter(wallet => wallet.daysHolding > WEEK && wallet.daysHolding < MONTH).length;
const OVER_MONTH_HOLDERS = [...extendedMap.values()].filter(wallet => wallet.daysHolding > MONTH).length;

// CALCULATE % of wallets holding for 1-7D, 7-30D, 30D+
const WEEK_HOLDERS_PCT = ((WEEK_HOLDERS / holdersArrSize) * 100).toFixed(2);
const UNDER_MONTH_HOLDERS_PCT = ((UNDER_MONTH_HOLDERS / holdersArrSize) * 100).toFixed(2);
const OVER_MONTH_HOLDERS_PCT = ((OVER_MONTH_HOLDERS / holdersArrSize) * 100).toFixed(2);

// console.log(WEEK_HOLDERS);
// console.log(UNDER_MONTH_HOLDERS);
// console.log(OVER_MONTH_HOLDERS);


// console.log(`Holders for 1-7D are ${WEEK_HOLDERS_PCT}%`);
// console.log(`Holders for 7-30D  are ${UNDER_MONTH_HOLDERS_PCT}%`);
// console.log(`Holders for 30D+ ${OVER_MONTH_HOLDERS_PCT}%`);