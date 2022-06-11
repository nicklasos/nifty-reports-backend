const path = require("path");
const fs = require("fs");
const fns = require('date-fns');
const {updateCollectionStats} = require("./merge_data");

async function generateScreenshots(collectionStats) {
	const url = "https://nifty-reports-todya.vercel.app";

	const templates = {
		"daily_snapshot": "",
		"weekly_digest": "",
		"community_health": "",
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
			"templates",
			collectionStats.collection_slug,
			template,
			collectionStats._id.toString(),
		].join("/");

		await captureScreenshot(templateUrl, fileFullPath);
	}

	await updateCollectionStats(
		collectionStats._id.toString(),
		{screenshots: templates},
	);
}

async function captureScreenshot(url, path) {
	const captureWebsite = (await import("capture-website")).default;

	await captureWebsite.file(url, path, {
		delay: 3,
		overwrite: true,
		width: 500,
		height: 500,
	});
}

module.exports = {
	captureScreenshot,
	generateScreenshots,
}
