const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const { connect, close } = require('./../mongo');

const { collectionDetails } = require('../collection-details');
const { parse } = require('./parse');

async function run() {
  try {
    await connect();

    await parse(collectionDetails['childrenofukiyo']);
  } finally {
    await close();
  }
}

run().catch(console.dir);
