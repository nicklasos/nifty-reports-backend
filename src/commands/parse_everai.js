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
const twitterHandle = 'TheEverai';

async function run() {
	try {
		await connect();

		await parseOpenseaAssets(collectionSlug);

		const contract = await getContractStats(contractAddress);
		const collection = await getCollectionStats(collectionSlug);
		const twitterFollowers = await getTwitterFollowers(twitterHandle);

		const stats = {
			...collection.stats,
			image_url: contract.image_url,
			contract_creation_date: contract.created_date,
			twitter_followers: twitterFollowers,
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
