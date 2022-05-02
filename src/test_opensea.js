const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const axios = require('axios');

async function run() {
	try {

		const res = await axios.get('https://api.opensea.io/api/v1/assets?collection_slug=everai-heroes-duo', {
			headers: {
				'X-API-KEY': process.env.OPENSEA_API_KEY,
			}
		});

		console.log(res.data);

	} finally {

	}
}

run().catch(console.dir);