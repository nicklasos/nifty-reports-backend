const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "..", "..", ".env")});

const {connect, close} = require("./../mongo");
const {parseIcyToolsCollectionStats} = require("../icy_tools");

const collectionSlug = 'everai-heroes-duo';
const contractAddress = '0x9a38DEC0590aBC8c883d72E52391090e948DdF12';

async function run() {
	try {
		await connect();

		await parseIcyToolsCollectionStats(collectionSlug, contractAddress);

	} finally {
		await close();
	}
}

run().catch(console.dir);
