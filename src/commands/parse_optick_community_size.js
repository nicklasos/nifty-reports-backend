const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", "..", ".env")});

const {connect, close} = require("./../mongo");
const {parseOptickCommunitySize} = require("../optick");

const id = '0x9a38DEC0590aBC8c883d72E52391090e948DdF12';
const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		await connect();

		await parseOptickCommunitySize(collectionSlug, id);

	} finally {
		await close();
	}
}

run().catch(console.dir);
