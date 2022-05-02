const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/?retryWrites=true&writeConcern=majority';

const client = new MongoClient(uri);

let db = null;

async function connect() {
	if (db) return db;

	await client.connect();

	if (!process.env.DB_NAME) {
		throw new Error('No DB_NAME');
	}

	return db = client.db(process.env.DB_NAME);
}

async function close() {
	await client.close();
}

module.exports = {
	connect,
	close,
}