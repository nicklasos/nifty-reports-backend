require('dotenv').config();
const {connect, close} = require('./src/mongo');

async function run() {
	try {
		await connect();


	} finally {
		await close();
	}
}

run().catch(console.dir);