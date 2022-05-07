const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');
const {getCollectionStats} = require('./opensea_api');
const {saveCollectionStats} = require('./opensea_service');

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

		const data = await getCollectionStats(collectionSlug);

		await saveCollectionStats(collectionSlug, data.stats);

	} finally {
		await close();
	}
}

run().catch(console.dir);
