const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const { connect, close } = require('./../mongo');

const { collectionDetails } = require('../collection-details');
const { parse } = require('./parse');

async function run() {
  try {
    await connect();

    for (const [name, collection] of Object.entries(collectionDetails)) {
      if (collection.enabled) {
        await parse(collection);
      }
    }
  } finally {
    await close();
  }
}

run().catch(console.dir);
