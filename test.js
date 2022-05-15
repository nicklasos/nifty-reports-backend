require('dotenv').config();
const {connect, close, getConnection} = require('./src/mongo');
const {calculateAndSaveStats} = require("./src/opensea_stats");

async function run() {
	try {
		await connect();

		// await calculateAndSaveStats('everai-heroes-duo', 1);

		await getConnection().collection('collection').insertOne({
			collection_slug: 'everai-heroes-duo',
			id: 1,
		})

	} finally {
		await close();
	}
}

run().catch(console.dir);