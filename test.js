const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, ".env")});

const {connect, close} = require("./src/mongo");

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

	} finally {
		await close();
	}
}

run().catch(console.dir);