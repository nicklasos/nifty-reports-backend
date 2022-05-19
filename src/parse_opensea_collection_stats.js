const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');
const {getCollectionStats, getContractStats} = require('./opensea_api');
const {saveCollectionStats} = require('./opensea_service');

const COLLECTION = {
	collectionSlug: 'everai-heroes-duo',
	contractAddress: '0x9a38DEC0590aBC8c883d72E52391090e948DdF12'
}

async function run() {
	const { collectionSlug, contractAddress } = COLLECTION;
	try {
		await connect();

		const contract = await getContractStats(contractAddress);
		const collection = await getCollectionStats(collectionSlug);

		const stats = {
			...collection.stats,
			imageUrl: contract.image_url,
			contractCreationDate: contract.created_date
		}


		await saveCollectionStats(collectionSlug, stats);

	} finally {
		await close();
	}
}

run().catch(console.dir);
