const axios = require('axios');

const KEY = process.env.OPENSEA_API_KEY;

async function getAssets(collectionSlug, cursor) {
	let url = `https://api.opensea.io/api/v1/assets?collection_slug=${collectionSlug}&limit=50`;
	if (cursor) {
		url = `${url}&cursor=${cursor}`;
	}

	const res = await axios.get(url, {
		headers: {
			'X-API-KEY': KEY,
		}
	});

	return res.data;
}

module.exports = {
	getAssets,
}