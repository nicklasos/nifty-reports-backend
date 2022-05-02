const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, "..", ".env")});

const {connect, close} = require('./mongo');
const {createNewBatch, markBatchAsDone} = require('./opensea_assets');
const axios = require('axios');

const collectionSlug = 'everai-heroes-duo';

async function run() {
	try {
		const db = await connect();
		const openseaAssets = db.collection('opensea_assets');

		let cursor = null;
		let batch = await createNewBatch(collectionSlug);

		do {

			let url = `https://api.opensea.io/api/v1/assets?collection_slug=${collectionSlug}&limit=50`;
			if (cursor) {
				url = `${url}&cursor=${cursor}`;
			}

			const res = await axios.get(url, {
				headers: {
					'X-API-KEY': process.env.OPENSEA_API_KEY,
				}
			});

			cursor = res.data.next;

			let assets = res.data.assets.map(asset => ({
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
