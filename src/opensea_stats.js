const {getConnection} = require("./mongo");

async function calculateAndSaveStats(collectionSlug, batchId) {
	const assets = await getConnection().collection('opensea_assets').find({
		collection_slug: collectionSlug,
		batch: batchId,
		// last_save: {$exists: true},
	});

	const data = await assets.toArray();

	if (!data.length) {
		console.log('No data with last sale');
		return;
	}

	const finalData = calculateStats(data);
	console.log(finalData);
}

function calculateStats(data) {
	// 1. SIMPLIFY THE HUGE OBJECT INTO MAP OF UNIQUE WALLETS
	const cleanData = new Map();

	data.forEach(nft => {
		const {owner: {address}, last_sale: {event_timestamp}, token_id} = nft;

		// console.log(address, event_timestamp, token_id);

		if (cleanData.has(address)) {
			const {amount, holdingSince} = cleanData.get(address);

			const newHoldingSince = holdingSince > event_timestamp ? event_timestamp : holdingSince;

			cleanData.set(address, {amount: amount + 1, holdingSince: newHoldingSince});
		} else {
			cleanData.set(address, {amount: 1, holdingSince: event_timestamp, tokenId: token_id});
		}
	});

	// 2. SORT BASED ON NFTS per WALLET
	const COLLECTION_SIZE = 7777;

	const sortedMap = new Map([...cleanData.entries()].sort(([keyA, valueA], [keytB, valueB]) => valueB.amount - valueA.amount))
	const uniqueHolders = sortedMap.size;
	const uniqueHolders_PCT = (uniqueHolders * 100 / COLLECTION_SIZE).toFixed(2);

	// console.log(uniqueHolders);

	// 3. GET top10, 50, 100 holder amounts
	const TOP_10 = 10;
	const TOP_50 = 50;
	const TOP_100 = 50;

	const TOP10_holder = [...sortedMap.values()].slice(TOP_10 - 1, TOP_10)[0]?.amount;
	const TOP50_holder = [...sortedMap.values()].slice(TOP_50 - 1, TOP_50)[0]?.amount;
	const TOP100_holder = [...sortedMap.values()].slice(TOP_100 - 1, TOP_100)[0]?.amount;

	// console.log(`Top 10 holder:`,TOP10_holder);
	// console.log(`Top 50 holder:`,TOP50_holder);
	// console.log(`Top 100 holder:`,TOP100_holder);

	// 4a. CALCULATE amount of wallets with 1, 2-3, 4+ NFTS
	const SINGLE = 1;
	const TRIPLE = 3;
	const QUAD = 4;

	const SINGLE_HOLDERS = [...sortedMap.values()].filter(wallet => wallet.amount === SINGLE).length;
	const TRIPLE_HOLDERS = [...sortedMap.values()].filter(wallet => wallet.amount > SINGLE && wallet.amount <= TRIPLE).length;
	const QUAD_HOLDERS = [...sortedMap.values()].filter(wallet => wallet.amount > QUAD).length;

	// 4b. CALCULATE % of wallets with 1, 2-3, 4+ NFTS
	const SINGLE_HOLDERS_PCT = ((SINGLE_HOLDERS / uniqueHolders) * 100).toFixed(2);
	const TRIPLE_HOLDERS_PCT = ((TRIPLE_HOLDERS / uniqueHolders) * 100).toFixed(2);
	const QUAD_HOLDERS_PCT = ((QUAD_HOLDERS / uniqueHolders) * 100).toFixed(2);

	// console.log(`Holders w/ ${SINGLE_HOLDERS} NFT are ${SINGLE_HOLDERS_PCT}%`);
	// console.log(`Holders w/ ${TRIPLE_HOLDERS} NFT are ${TRIPLE_HOLDERS_PCT}%`);
	// console.log(`Holders w/ ${QUAD_HOLDERS} NFT are ${QUAD_HOLDERS_PCT}%`);


	// 5a. CALCULATE HOW LONG HAVE EACH BEEN LONGEST HOLDING FOR (DAYS);
	const extendedMap = new Map([...sortedMap.entries()].map(([key, value]) => {
		const now = new Date();
		const {holdingSince} = value;

		const timeDiff = now.getTime() - new Date(holdingSince).getTime();

		const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

		return [key, {
			...value,
			daysHolding: daysDiff
		}]
	}));

	// 5b. CALCULATE How long people hodl
	const WEEK = 7;
	const MONTH = 30;

	const WEEK_HOLDERS = [...extendedMap.values()].filter(wallet => wallet.daysHolding <= WEEK).length;
	const UNDER_MONTH_HOLDERS = [...extendedMap.values()].filter(wallet => wallet.daysHolding > WEEK && wallet.daysHolding <= MONTH).length;
	const OVER_MONTH_HOLDERS = [...extendedMap.values()].filter(wallet => wallet.daysHolding > MONTH).length;

	// CALCULATE % of wallets holding for 1-7D, 7-30D, 30D+
	const WEEK_HOLDERS_PCT = ((WEEK_HOLDERS / uniqueHolders) * 100).toFixed(2);
	const UNDER_MONTH_HOLDERS_PCT = ((UNDER_MONTH_HOLDERS / uniqueHolders) * 100).toFixed(2);
	const OVER_MONTH_HOLDERS_PCT = ((OVER_MONTH_HOLDERS / uniqueHolders) * 100).toFixed(2);

	// console.log(WEEK_HOLDERS);
	// console.log(UNDER_MONTH_HOLDERS);
	// console.log(OVER_MONTH_HOLDERS);


	// console.log(`Holders for 1-7D are ${WEEK_HOLDERS_PCT}%`);
	// console.log(`Holders for 7-30D  are ${UNDER_MONTH_HOLDERS_PCT}%`);
	// console.log(`Holders for 30D+ ${OVER_MONTH_HOLDERS_PCT}%`);

	const finalStats = {
		uniqueHolders: {
			number: uniqueHolders,
			pct: uniqueHolders_PCT
		},
		topHolders: {
			top10: TOP10_holder,
			top50: TOP50_holder,
			top100: TOP100_holder
		},
		bagSize: {
			single: {
				number: SINGLE_HOLDERS,
				pct: SINGLE_HOLDERS_PCT
			},
			triple: {
				number: TRIPLE_HOLDERS,
				pct: TRIPLE_HOLDERS_PCT
			},
			quad: {
				number: QUAD_HOLDERS,
				pct: QUAD_HOLDERS_PCT
			}
		},
		bagTime: {
			week: {
				number: WEEK_HOLDERS,
				ptc: WEEK_HOLDERS_PCT
			},
			underMonth: {
				number: UNDER_MONTH_HOLDERS,
				ptc: UNDER_MONTH_HOLDERS_PCT,
			},
			overMonth: {
				number: OVER_MONTH_HOLDERS,
				ptc: OVER_MONTH_HOLDERS_PCT
			}
		}
	}

	return finalStats;
}

module.exports = {
	calculateAndSaveStats,
	calculateStats,
};