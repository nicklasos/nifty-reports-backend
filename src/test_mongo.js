const path = require("path");

require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');

async function run() {
	try {
		const db = await connect();

		const movies = db.collection('movies');

		await movies.insertOne({
			title: 'Bar',
		})

		const query = {title: 'Bar'};
		const movie = await movies.findOne(query);

		console.log(movie);

		// await movie.forEach(i => {
		// 	console.log(i.title);
		// });

	} finally {
		await close();
	}
}

run().catch(console.dir);