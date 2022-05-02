const { MongoClient } = require('mongodb');

if (!process.env.DB_URI) {
	throw new Error('No DB_URI');
}

const client = new MongoClient(process.env.DB_URI);

let db = null;

async function connect() {
	if (db) return db;

	await client.connect();

	if (!process.env.DB_NAME) {
		throw new Error('No DB_NAME');
	}

	db = client.db(process.env.DB_NAME);

	return db;
}

async function close() {
	await client.close();
}

function getConnection() {
	return db;
}

module.exports = {
	getConnection,
	connect,
	close,
}