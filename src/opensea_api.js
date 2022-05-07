const axios = require('axios');

const request = axios.create({
	baseURL: 'https://api.opensea.io/api/v1',
	headers: {
		'X-API-KEY': process.env.OPENSEA_API_KEY,
	}
});

async function getCollectionStats(collectionSlug) {
	const url = `/collection/${collectionSlug}/stats`

	const res = await request.get(url);

	return res.data;
}

async function getAssets(collectionSlug, cursor) {
	let url = `/assets?collection_slug=${collectionSlug}&limit=50`;
	if (cursor) {
		url = `${url}&cursor=${cursor}`;
	}

	const res = await request.get(url);

	return res.data;
}

module.exports = {
	getAssets,
	getCollectionStats,
}