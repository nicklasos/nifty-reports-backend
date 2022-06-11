const {getConnection} = require("./mongo");
const {getLastIcyToolsData} = require("./icy_tools");
const {getLastOpenseaCollectionStats, getLastOpenseaCalculatedStats} = require("./opensea_db");
const {ObjectId} = require("mongodb");

// const {getLastOptickCommunitySize} = require("./optick");

async function mergeData(collectionSlug) {
	const icyTools = await getLastIcyToolsData(collectionSlug);
	const openseaStats = await getLastOpenseaCollectionStats(collectionSlug);
	// const optickCommunitySize = await getLastOptickCommunitySize(collectionSlug);
	const openseaCalculatedStats = await getLastOpenseaCalculatedStats(collectionSlug);

	// console.log(icyTools);
	// console.log(openseaStats);
	// console.log(optickCommunitySize);
	// console.log(openseaCalculatedStats);

	const data = {
		...openseaCalculatedStats,
		...openseaStats,
		...icyTools,
		created_at: new Date(),
		done: false,
	}

	delete data['_id'];
	delete data['batch_id'];

	const lastInserted = await getConnection().collection('collection_stats').insertOne(data);

	return await getConnection().collection('collection_stats').findOne({
		_id: lastInserted.insertedId,
	});
}

async function getLastCollectionStats(collectionSlug, done) {
	return await getConnection().collection('collection_stats').findOne(
		{collection_slug: collectionSlug, done},
		{sort: {_id: -1}},
	);
}

async function updateCollectionStats(id, data) {
	await getConnection().collection('collection_stats').updateOne(
		{_id: ObjectId(id)},
		{$set: data},
	);
}

module.exports = {
	mergeData,
	getLastCollectionStats,
	updateCollectionStats,
};