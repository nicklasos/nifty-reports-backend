const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');
const {getCollectionStats, getContractStats} = require('./opensea_api');
const {saveCollectionStats} = require('./opensea_service');
const {getTwitterFollowers} = require("./twitter_api");

const COLLECTION = {
	collectionSlug: 'everai-heroes-duo',
	contractAddress: '0x9a38DEC0590aBC8c883d72E52391090e948DdF12',
	twitterHandle: 'TheEverai'
}

async function run() {
	const { collectionSlug, contractAddress, twitterHandle } = COLLECTION;
	try {
		await connect();

		const contract = await getContractStats(contractAddress);
		const collection = await getCollectionStats(collectionSlug);
		const twitterFollowers = await getTwitterFollowers(twitterHandle);

		const stats = {
			...collection.stats,
			imageUrl: contract.image_url,
			contractCreationDate: contract.created_date,
			twitterFollowers,
		}


		await saveCollectionStats(collectionSlug, stats);

	} finally {
		await close();
	}
}

run().catch(console.dir);
