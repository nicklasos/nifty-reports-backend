const {getConnection} = require("./mongo");
const {getLastIcyToolsData} = require("./icy_tools");
const {getLastOpenseaCollectionStats, getLastOpenseaCalculatedStats} = require("./opensea_db");
const {getLastOptickCommunitySize} = require("./optick");

async function mergeData(collectionSlug) {
	const icyTools = await getLastIcyToolsData(collectionSlug);
	const openseaStats = await getLastOpenseaCollectionStats(collectionSlug);
	const optickCommunitySize = await getLastOptickCommunitySize(collectionSlug);
	const openseaCalculatedStats = await getLastOpenseaCalculatedStats(collectionSlug);

	// console.log(icyTools);
	// console.log(openseaStats);
	// console.log(optickCommunitySize);
	// console.log(openseaCalculatedStats);
	
	const data = {
		...openseaCalculatedStats,
		...openseaStats,
		...icyTools,
		community_size: optickCommunitySize.community_size,
	}

	delete data['_id'];
	delete data['batch_id'];

	await getConnection().collection('collection_stats').insertOne(data);
}

module.exports = {
	mergeData,
};