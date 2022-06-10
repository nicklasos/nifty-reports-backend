const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, ".env")});

const {connect, close} = require("./src/mongo");
const {getLastBatchId} = require("./src/opensea_db");

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

		const lastBatch = await getLastBatchId('everai-heroes-duo');
		console.log(lastBatch);

		// const result = await calculateBlueChip();

		// await calculateAndSaveStatsFromLastBatch('everai-heroes-duo');

		// await mergeData(collectionSlug);


		// await getConnection().collection('user').insertOne({
		// 	email: 'nicklasos+1@gmail.com',
		// 	name: 'Nicklasos+1',
		// })
		//
		// await getConnection().collection('users').insertOne({
		// 	email: 'nicklasos+2@gmail.com',
		// 	name: 'Nicklasos+2',
		// })

	} finally {
		await close();
	}
}

run().catch(console.dir);