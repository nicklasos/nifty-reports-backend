const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');
const axios = require("axios");

const id = '0x9a38dec0590abc8c883d72e52391090e948ddf12';
const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		const db = await connect();
		const optickCommunitySize = db.collection('optick_community_size');

		const url = `https://inspect-app.optick.xyz/collections/details?id=${id}&limit=100000&user_id=web-app`;

		const res = await axios.get(url);

		await optickCommunitySize.insertOne({
			collection_slug: collectionSlug,
			community_size: res.data.stats.community_size,
			created_at: new Date(),
		});

	} finally {
		await close();
	}
}

run().catch(console.dir);
