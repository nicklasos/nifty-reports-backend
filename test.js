const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, ".env")});

const {connect, close, getConnection} = require("./src/mongo");
const {captureScreenshot, generateScreenshots} = require("./src/screenshot");
const {mergeData, getLastCollectionStats} = require("./src/merge_data");

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

		// const data = await mergeData(collectionSlug);
		const data = await getLastCollectionStats(collectionSlug, false);

		// console.log(data.screenshots.daily_snapshot);

		await generateScreenshots(data);

		// await captureScreenshot();

	} finally {
		await close();
	}
}

run().catch(console.dir);