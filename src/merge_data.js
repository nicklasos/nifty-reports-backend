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


}

module.exports = {
	mergeData,
};