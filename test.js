require('dotenv').config();
const {connect, close} = require('./src/mongo');
const {calculateAndSaveStats} = require("./src/opensea_stats");

async function run() {
	try {
		await connect();

		await calculateAndSaveStats('everai-heroes-duo', 1);

	} finally {
		await close();
	}
}

run().catch(console.dir);