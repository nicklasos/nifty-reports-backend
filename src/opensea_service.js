const {getConnection} = require('./mongo');

async function createNewBatch(collectionSlug) {
	const batch = {
		id: 1,
		is_done: false,
		collection_slug: collectionSlug,
		created_at: new Date(),
	};

	const collection = getConnection().collection('Opensea_assets_batch');

	const lastBatch = await collection.findOne(
		{collection_slug: collectionSlug},
		{sort: {id: -1}},
	)

	if (lastBatch) {
		batch.id = lastBatch.id + 1;
	}

	await collection.insertOne(batch);

	return batch;
}

async function markBatchAsDone(collectionSlug, id) {
	await getConnection().collection('Opensea_assets_batch').updateMany(
		{
			collection_slug: collectionSlug,
			id,
		},
		{
			is_done: true,
		},
	);
}

async function saveCollectionStats(collectionSlug, stats) {
	await getConnection().collection('opensea_collection_stats').insertOne({
		collection_slug: collectionSlug,
		...stats,
		created_at: new Date(),
	})
}

module.exports = {
	createNewBatch,
	markBatchAsDone,
	saveCollectionStats,
};