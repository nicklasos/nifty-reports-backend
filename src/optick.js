const axios = require("axios");
const {getConnection} = require("./mongo");

async function parseOptickCommunitySize(collectionSlug, id) {
	const optickCommunitySize = await getConnection().collection('optick_community_size');

	// OLD ENDPOINT
	const url = `https://inspect-app.optick.xyz/collections/details?id=${id.toLowerCase()}&limit=100000&user_id=web-app`;
	// NEW ENDPOINT
	// https://www.nftinspect.xyz/_next/data/FXJNZbFuXxwEYKdpKfGND/collections/0x9a38dec0590abc8c883d72e52391090e948ddf12.json?idAndTab=0x9a38dec0590abc8c883d72e52391090e948ddf12

	const res = await axios.get(url);

	await optickCommunitySize.insertOne({
		collection_slug: collectionSlug,
		community_size: res.data.stats.community_size,
		created_at: new Date(),
	});
}

async function getLastOptickCommunitySize(collectionSlug) {
	return await getConnection().collection('optick_community_size').findOne(
		{collection_slug: collectionSlug},
		{sort: {_id: -1}},
	);
}

module.exports = {
	parseOptickCommunitySize,
	getLastOptickCommunitySize,
};