const path = require("path");
const fs = require("fs");
const fns = require('date-fns');
const {updateCollectionStats} = require("./merge_data");

async function generateScreenshots(collectionStats) {
	if (!collectionStats) throw new Error('No collection stats');

	const url = "https://www.niftyreports.xyz";

	const templates = {
		"daily-snapshot": "",
		"weekly-digest": "",
		"community-health": "",
	};

	const screenshotsDir = path.resolve(__dirname, "..", "screenshots");

	const date = fns.format(collectionStats.created_at, "yyyy-MM-dd");

	for (let template of Object.keys(templates)) {
		let fileBasePath = path.join(
			collectionStats.collection_slug,
			date,
			`${collectionStats.collection_slug}_${template}_${date}.png`,
		);

		templates[template] = fileBasePath;

		let fileFullPath = path.resolve(
			screenshotsDir,
			fileBasePath,
		);

		fs.mkdirSync(path.dirname(fileFullPath), {
			recursive: true,
		});

		let templateUrl = [
			url,
			"raw",
			collectionStats.collection_slug,
			template,
		].join("/") + "?" + collectionStats._id.toString();

		await captureScreenshot(templateUrl, fileFullPath);
	}

	await updateCollectionStats(
		collectionStats._id.toString(),
		{
			screenshots: templates,
			// done: false,
		},
	);
}

async function captureScreenshot(url, path) {
	const captureWebsite = (await import("capture-website")).default;

	await captureWebsite.file(url, path, {
		delay: 3,
		overwrite: true,
		width: 450,
		height: 450,
		launchOptions: {
			args: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
			],
		},
	});
}

module.exports = {
	captureScreenshot,
	generateScreenshots,
}