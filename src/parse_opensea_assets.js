const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');
const {createNewBatch, markBatchAsDone} = require('./opensea_service');
const {getAssets} = require("./opensea_api");

const COLLECTION = {
	collectionSlug: 'everai-heroes-duo',
	contractAddress: '0x9a38DEC0590aBC8c883d72E52391090e948DdF12'
}

async function run() {
	const { collectionSlug } = COLLECTION;
	try {
		const db = await connect();
		const openseaAssets = db.collection('opensea_assets');

		let cursor = null;
		let batch = await createNewBatch(collectionSlug);

		do {

			let data = await getAssets(collectionSlug, cursor);

			cursor = data.next;

			let assets = data.assets.map(asset => ({
				batch: batch.id,
				collection_slug: collectionSlug,
				id: asset.id,
				num_sales: asset.num_sales,
				image_url: asset.image_url,
				name: asset.name,
				description: asset.description,
				external_link: asset.external_link,
				permalink: asset.permalink,
				decimals: asset.decimals,
				token_metadata: asset.token_metadata,
				owner: asset.owner,
				sell_orders: asset.sell_orders,
				last_sale: asset.last_sale,
				top_bid: asset.top_bid,
				listing_date: asset.listing_date,
				is_presale: asset.is_presale,
				transfer_fee_payment_token: asset.transfer_fee_payment_token,
				transfer_fee: asset.transfer_fee,
				token_id: asset.token_id,
				asset_contract: asset.asset_contract,
			}));

			await openseaAssets.insertMany(assets);

			process.stdout.write('.');

		} while (cursor);

		await markBatchAsDone(collectionSlug, batch.id);

	} finally {
		await close();
	}
}

run().catch(console.dir);
