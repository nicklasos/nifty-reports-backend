require("dotenv").config();
const {connect, close} = require("./src/mongo");
const {calculateAndSaveStats, calculateAndSaveStatsFromLastBatch} = require("./src/opensea_stats");
const {calculateBlueChip} = require("./src/blue_chip");
const {mergeData} = require("./src/merge_data");

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

		// const result = await calculateBlueChip();

		// await calculateAndSaveStatsFromLastBatch('everai-heroes-duo');

		await mergeData(collectionSlug);


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