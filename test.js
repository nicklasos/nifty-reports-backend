require("dotenv").config();
const {connect, close} = require("./src/mongo");
const {calculateAndSaveStats} = require("./src/opensea_stats");
const {calculateBlueChip} = require("./src/blue_chip");

async function run() {
	try {
		await connect();

		// const result = await calculateBlueChip();

		await calculateAndSaveStats('everai-heroes-duo', 1);


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