const axios = require("axios");
const {getConnection} = require("./mongo");

async function parseOptickCommunitySize(collectionSlug, id) {
	const optickCommunitySize = await getConnection().collection('optick_community_size');

	const url = `https://inspect-app.optick.xyz/collections/details?id=${id.toLowerCase()}&limit=100000&user_id=web-app`;

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
		{sort: {id: -1}},
	);
}

module.exports = {
	parseOptickCommunitySize,
	getLastOptickCommunitySize,
};