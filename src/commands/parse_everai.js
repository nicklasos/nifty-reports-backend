const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "..", "..", ".env")});

const {connect, close} = require("./../mongo");
const {parseOpenseaAssets} = require("../opensea_stats");
const {getContractStats, getCollectionStats} = require("../opensea_api");
const {getTwitterFollowers} = require("../twitter_api");
const {saveCollectionStats} = require("../opensea_db");
const {parseIcyToolsCollectionStats} = require("../icy_tools");
const {parseOptickCommunitySize} = require("../optick");
const {mergeData} = require("../merge_data");

const collectionSlug = 'everai-heroes-duo';
const contractAddress = '0x9a38DEC0590aBC8c883d72E52391090e948DdF12';
const collectionSize = 7777;
const twitterHandle = 'TheEverai';

async function run() {
	try {
		await connect();

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
				floor: collection.stats.floor_price,
				average: {
					daily: collection.stats.one_day_average_price,
					weekly: collection.stats.seven_day_average_price,
					monthly: collection.stats.thirty_day_average_price,
					total: collection.stats.average_price
				}
			},
			sales: {
				daily: collection.stats.one_day_sales,
				weekly: collection.stats.seven_day_sales,
				monthly: collection.stats.thirty_day_sales,
				total: collection.stats.total_sales
			},
			volume: {
				daily: collection.stats.one_day_volume,
				weekly: collection.stats.seven_day_volume,
				monthly: collection.stats.thirty_day_volume,
				total: collection.stats.total_volume
			},
		}

		await saveCollectionStats(collectionSlug, stats);

		await parseIcyToolsCollectionStats(collectionSlug, contractAddress);

		await parseOptickCommunitySize(collectionSlug, contractAddress);

		await mergeData(collectionSlug);

	} finally {
		await close();
	}
}

run().catch(console.dir);
