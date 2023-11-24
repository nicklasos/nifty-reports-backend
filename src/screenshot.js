const path = require('path');
const fs = require('fs');
const fns = require('date-fns');
const {updateCollectionStats} = require('./merge_data');
const Jimp = require('jimp');

async function generateScreenshots(collectionStats) {
  if (!collectionStats) throw new Error('No collection stats');

  const url = 'https://www.niftyreports.xyz';

  const templates = {
    'snapshot': {
      '1d': '',
      '7d': '',
      '30d': '',
    },
    'digest': {
      '1d': '',
      '7d': '',
      '30d': '',
    },
    'health': {
      '1d': '',
      '7d': '',
      '30d': '',
    },
  };

  const screenshotsDir = path.resolve(__dirname, '..', 'screenshots');

  const date = fns.format(collectionStats.created_at, 'yyyy-MM-dd');

  for (let template of Object.keys(templates)) {
    for (let interval of Object.keys(templates[template])) {
      let fileBasePath = path.join(
        collectionStats.collection_slug,
        date,
        `${collectionStats.collection_slug}_${template}_${interval}_${date}.png`
      );

      templates[template][interval] = fileBasePath;

      let fileFullPath = path.resolve(screenshotsDir, fileBasePath);

      fs.mkdirSync(path.dirname(fileFullPath), {
        recursive: true,
      });

      let templateUrl =
        [url, 'raw', collectionStats.collection_slug, template].join('/') +
        '?id=' + collectionStats._id.toString() +
        '&interval=' + interval;

      await captureScreenshot(templateUrl, fileFullPath);
    }
  }

  await updateCollectionStats(collectionStats._id.toString(), {
    screenshots: templates,
    done: true,
  });
}

async function captureScreenshot(url, path) {
  const captureWebsite = (await import('capture-website')).default;

  await captureWebsite.file(url, path, {
    delay: 3,
    overwrite: true,
    width: 900,
    height: 900,
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });

  await cropImage(path);
}

async function cropImage(imagePath) {
  const image = await Jimp.read(
    imagePath
  );

  image.crop(0, 0, 466 * 2, 466 * 2).write(
    imagePath
  );
}

module.exports = {
  captureScreenshot,
  generateScreenshots,
  cropImage,
};
