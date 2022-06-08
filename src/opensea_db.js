const {getConnection} = require('./mongo');

async function createNewBatch(collectionSlug) {
	const batch = {
		id: 1,
		is_done: false,
		collection_slug: collectionSlug,
		created_at: new Date(),
	};

	const collection = getConnection().collection('opensea_assets_batch');

	const lastBatch = await getLastBatchId(collectionSlug);

	if (lastBatch) {
		batch.id = lastBatch.id + 1;
	}

	await collection.insertOne(batch);

	return batch;
}

async function markBatchAsDone(collectionSlug, id) {
	await getConnection().collection('opensea_assets_batch').updateOne(
		{
			collection_slug: collectionSlug,
			id,
		},
		{
			$set: {is_done: true},
		},
	);
}

async function getLastBatchId(collectionSlug) {
	const lastBatch = await getConnection().collection('opensea_assets_batch').findOne(
		{collection_slug: collectionSlug},
		{sort: {_id: -1}},
	);

	if (lastBatch) {
		return lastBatch.batch_id;
	}

	return null;
}

async function getLastOpenseaCalculatedStats(collectionSlug) {
	return await getConnection().collection('opensea_calculated_stats').findOne(
		{collection_slug: collectionSlug},
		{sort: {_id: -1}},
	);
}

async function getLastOpenseaCollectionStats(collectionSlug) {
	return await getConnection().collection('opensea_collection_stats').findOne(
		{collection_slug: collectionSlug},
		{sort: {_id: -1}},
	);
}

async function saveCollectionStats(collectionSlug, stats) {
	await getConnection().collection('opensea_collection_stats').insertOne({
		collection_slug: collectionSlug,
		...stats,
		created_at: new Date(),
	});
}

async function getAssetsByBatchId(collectionSlug, batchId) {
	 return await getConnection().collection('opensea_assets').find({
		collection_slug: collectionSlug,
		batch: batchId,
	});
}

async function saveCalculatedStats(collectionSlug, batchId, data) {
	const result = {
		batch_id: batchId,
		collection_slug: collectionSlug,
		created_at: new Date(),
		...data,
	}

	await getConnection().collection('opensea_calculated_stats').updateOne(
		{batch_id: batchId, collection_slug: collectionSlug},
		{$set: result},
		{upsert: true}
	);
}

module.exports = {
	createNewBatch,
	markBatchAsDone,
	saveCollectionStats,
	getAssetsByBatchId,
	getLastOpenseaCollectionStats,
	getLastOpenseaCalculatedStats,
	getLastBatchId,
	saveCalculatedStats,
};