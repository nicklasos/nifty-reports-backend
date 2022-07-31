const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const { connect, close, getConnection } = require('./src/mongo');
const {
  captureScreenshot,
  generateScreenshots,
  cropImage,
} = require('./src/screenshot');
const {
  mergeData,
  getLastCollectionStats,
  updateCollectionStats,
} = require('./src/merge_data');

const collectionSlug = 'everai-heroes-duo';

const { collectionDetails } = require('./src/collection-details');

async function run() {
  try {
    await connect();

    // await cropImage();

    // await updateCollectionStats(
    // 	"62a4c4cc9718b35f71245920",
    // 	{
    // 		done: true,
    // 		listed: 14,
    // 	},
    // );

    // const data = await mergeData(collectionSlug);

    // const data = await getLastCollectionStats(collectionSlug, true);

    // await generateScreenshots(data);

    // await captureScreenshot();
  } finally {
    await close();
  }
}

run().catch(console.dir);
