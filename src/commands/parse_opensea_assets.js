const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "..", "..", ".env")});

const {connect, close} = require("./../mongo");
const {parseOpenseaAssets} = require("../opensea_stats");

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

		await parseOpenseaAssets(collectionSlug);

	} finally {
		await close();
	}
}

run().catch(console.dir);
