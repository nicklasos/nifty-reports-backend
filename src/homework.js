const axios = require('axios');

const RAW_DATA = [{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e9"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e8"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e7"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471b"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e2"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471b"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471b"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471c"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471d"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471e"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471f"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
     "collection_slug": "everai-heroes-duo",
        "decimals": 0,
           "description": null,
              "external_link": null,
                 "id": 353455086,
                    "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
                       "is_presale": false,
                          "last_sale": {
     "quantity": "1",
        "auction_type": null,
           "event_timestamp": "2022-04-16T08:11:22",
              "asset_bundle": null,
                 "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
           "name": "Ether",
              "decimals": 18,
                 "eth_price": "1.000000000000000",
                    "symbol": "ETH",
                       "usd_price": "2825.860000000000127000",
                          "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
        "asset": {
        "token_id": "3912",
           "decimals": 0
     },
     "transaction": {
        "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
           "to_account": {
           "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                    "user": null
        },
        "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
           "transaction_index": "268",
              "block_number": "14595191",
                 "from_account": {
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
              "config": "",
                 "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
                    "user": {
              "username": null
           }
        },
        "timestamp": "2022-04-16T08:11:22",
           "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
        "event_type": "successful"
  },
  "listing_date": null,
     "name": "Duo #3912",
        "num_sales": 10,
           "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "config": "",
           "address": "0x64c258ae785bfe87eef987f9da9b4664707a471g"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
     "sell_orders": null,
        "token_id": "3912",
           "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
              "top_bid": null,
                 "transfer_fee": null,
                    "transfer_fee_payment_token": null
},
{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
  "collection_slug": "everai-heroes-duo",
  "decimals": 0,
  "description": null,
  "external_link": null,
  "id": 353455086,
  "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
  "is_presale": false,
  "last_sale": {
     "quantity": "1",
     "auction_type": null,
     "event_timestamp": "2022-04-16T08:11:22",
     "asset_bundle": null,
     "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
        "name": "Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "symbol": "ETH",
        "usd_price": "2825.860000000000127000",
        "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
     "asset": {
        "token_id": "3912",
        "decimals": 0
     },
     "transaction": {
     "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
     "to_account": {
        "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "user": null
     },
     "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
     "transaction_index": "268",
     "block_number": "14595191",
     "from_account": {
        "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "user": {
           "username": null
        }
     },
     "timestamp": "2022-04-16T08:11:22",
     "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
     "event_type": "successful"
  },
  "listing_date": null,
  "name": "Duo #3912",
  "num_sales": 10,
  "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
     "config": "",
     "address": "0x64c258ae785bfe87eef987f9da9b4664707a471b"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
  "sell_orders": null,
  "token_id": "3912",
  "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
  "top_bid": null,
  "transfer_fee": null,
  "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
  "collection_slug": "everai-heroes-duo",
  "decimals": 0,
  "description": null,
  "external_link": null,
  "id": 353455086,
  "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
  "is_presale": false,
  "last_sale": {
     "quantity": "1",
     "auction_type": null,
     "event_timestamp": "2022-04-16T08:11:22",
     "asset_bundle": null,
     "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
        "name": "Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "symbol": "ETH",
        "usd_price": "2825.860000000000127000",
        "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
     "asset": {
        "token_id": "3912",
        "decimals": 0
     },
     "transaction": {
     "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
     "to_account": {
        "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "user": null
     },
     "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
     "transaction_index": "268",
     "block_number": "14595191",
     "from_account": {
        "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "user": {
           "username": null
        }
     },
     "timestamp": "2022-04-16T08:11:22",
     "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
     "event_type": "successful"
  },
  "listing_date": null,
  "name": "Duo #3912",
  "num_sales": 10,
  "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
     "config": "",
     "address": "0x64c258ae785bfe87eef987f9da9b4664707a471d"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
  "sell_orders": null,
  "token_id": "3912",
  "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
  "top_bid": null,
  "transfer_fee": null,
  "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
  "collection_slug": "everai-heroes-duo",
  "decimals": 0,
  "description": null,
  "external_link": null,
  "id": 353455086,
  "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
  "is_presale": false,
  "last_sale": {
     "quantity": "1",
     "auction_type": null,
     "event_timestamp": "2022-04-16T08:11:22",
     "asset_bundle": null,
     "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
        "name": "Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "symbol": "ETH",
        "usd_price": "2825.860000000000127000",
        "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
     "asset": {
        "token_id": "3912",
        "decimals": 0
     },
     "transaction": {
     "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
     "to_account": {
        "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "user": null
     },
     "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
     "transaction_index": "268",
     "block_number": "14595191",
     "from_account": {
        "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "user": {
           "username": null
        }
     },
     "timestamp": "2022-04-16T08:11:22",
     "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
     "event_type": "successful"
  },
  "listing_date": null,
  "name": "Duo #3912",
  "num_sales": 10,
  "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
     "config": "",
     "address": "0x64c258ae785bfe87eef987f9da9b4664707a471b"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
  "sell_orders": null,
  "token_id": "3912",
  "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
  "top_bid": null,
  "transfer_fee": null,
  "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
  "collection_slug": "everai-heroes-duo",
  "decimals": 0,
  "description": null,
  "external_link": null,
  "id": 353455086,
  "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
  "is_presale": false,
  "last_sale": {
     "quantity": "1",
     "auction_type": null,
     "event_timestamp": "2022-04-16T08:11:22",
     "asset_bundle": null,
     "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
        "name": "Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "symbol": "ETH",
        "usd_price": "2825.860000000000127000",
        "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
     "asset": {
        "token_id": "3912",
        "decimals": 0
     },
     "transaction": {
     "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
     "to_account": {
        "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "user": null
     },
     "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
     "transaction_index": "268",
     "block_number": "14595191",
     "from_account": {
        "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "user": {
           "username": null
        }
     },
     "timestamp": "2022-04-16T08:11:22",
     "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
     "event_type": "successful"
  },
  "listing_date": null,
  "name": "Duo #3912",
  "num_sales": 10,
  "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
     "config": "",
     "address": "0x64c258ae785bfe87eef987f9da9b4664707a471z"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
  "sell_orders": null,
  "token_id": "3912",
  "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
  "top_bid": null,
  "transfer_fee": null,
  "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
  "collection_slug": "everai-heroes-duo",
  "decimals": 0,
  "description": null,
  "external_link": null,
  "id": 353455086,
  "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
  "is_presale": false,
  "last_sale": {
     "quantity": "1",
     "auction_type": null,
     "event_timestamp": "2022-04-16T08:11:22",
     "asset_bundle": null,
     "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
        "name": "Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "symbol": "ETH",
        "usd_price": "2825.860000000000127000",
        "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
     "asset": {
        "token_id": "3912",
        "decimals": 0
     },
     "transaction": {
     "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
     "to_account": {
        "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "user": null
     },
     "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
     "transaction_index": "268",
     "block_number": "14595191",
     "from_account": {
        "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "user": {
           "username": null
        }
     },
     "timestamp": "2022-04-16T08:11:22",
     "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
     "event_type": "successful"
  },
  "listing_date": null,
  "name": "Duo #3912",
  "num_sales": 10,
  "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
     "config": "",
     "address": "0x64c258ae785bfe87eef987f9da9b4664707a471q"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
  "sell_orders": null,
  "token_id": "3912",
  "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
  "top_bid": null,
  "transfer_fee": null,
  "transfer_fee_payment_token": null
},{
  "_id": {
     "$oid": "626ffcaf69fd6741039a39e6"
  },
  "batch": 1,
  "collection_slug": "everai-heroes-duo",
  "decimals": 0,
  "description": null,
  "external_link": null,
  "id": 353455086,
  "image_url": "https://lh3.googleusercontent.com/tWbBZTU_zI9Mt2MKQPqZdIlnZlQWzHmJPBOD3QXvW77zRY06Equmrc3JumleMaqJ0f6Z9Cjpe6wJEDHlIluZuKQyLhXno40_DkqyY4k",
  "is_presale": false,
  "last_sale": {
     "quantity": "1",
     "auction_type": null,
     "event_timestamp": "2022-04-16T08:11:22",
     "asset_bundle": null,
     "payment_token": {
        "address": "0x0000000000000000000000000000000000000000",
        "name": "Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "symbol": "ETH",
        "usd_price": "2825.860000000000127000",
        "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
     },
     "total_price": "1090000000000000000",
     "asset": {
        "token_id": "3912",
        "decimals": 0
     },
     "transaction": {
     "transaction_hash": "0xcacb684816c447a65971a29b29c3a1208aa893816475c38bd1ffc2654eab138a",
     "to_account": {
        "address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "user": null
     },
     "block_hash": "0x6a7a75cb27da88cfafe1a666ea77d546b0667cdefabc1004f731d1725cd47c4f",
     "transaction_index": "268",
     "block_number": "14595191",
     "from_account": {
        "address": "0x64c258ae785bfe87eef987f9da9b4664707a471a",
        "config": "",
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
        "user": {
           "username": null
        }
     },
     "timestamp": "2022-04-16T08:11:22",
     "id": 335681742
     },
     "created_date": "2022-04-16T08:12:05.768808",
     "event_type": "successful"
  },
  "listing_date": null,
  "name": "Duo #3912",
  "num_sales": 10,
  "owner": {
     "user": {
        "username": null
     },
     "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/7.png",
     "config": "",
     "address": "0x64c258ae785bfe87eef987f9da9b4664707a471x"
  },
  "permalink": "https://opensea.io/assets/0x9a38dec0590abc8c883d72e52391090e948ddf12/3912",
  "sell_orders": null,
  "token_id": "3912",
  "token_metadata": "https://opensea.mypinata.cloud/ipfs/QmZkPTq6AGnsoCkYiDPCFMaAjHpZAfHipyJeAdwtJh1fP5/3912",
  "top_bid": null,
  "transfer_fee": null,
  "transfer_fee_payment_token": null
},];

// 1. SIMPLIFY THE HUGE OBJECT INTO MAP OF UNIQUE WALLETS
const reducedData = new Map();

RAW_DATA.forEach(nft => {
  const { owner: { address }, last_sale: { event_timestamp }, token_id } = nft;

  // Check if sale event exist otherwise set mint date as event timestamp
  // TODO: use contractCreationDate from `getContractStats`
  const saleEvent = event_timestamp ?? contractCreationDate;

  if (reducedData.has(address)) {
    const { amount, holdingSince } = reducedData.get(address);

    const newHoldingSince = holdingSince > saleEvent ? saleEvent : holdingSince;

    reducedData.set(address, { amount: amount + 1, holdingSince: newHoldingSince });
  } else {
    reducedData.set(address, { amount: 1, holdingSince: saleEvent, tokenId: token_id });
  }
});

// console.log(reducedData)


//  FIND BLUE CHIP
let blueChipHolder = 0;
const BLUE_CHIP_COLLECTIONS = [
'0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // BAYC
'0x60e4d786628fea6478f785a6d7e704777c86a7c6', // MAYC
'0x8a90cab2b38dba80c64b7734e58ee1db38b8992e', // DOODLES
'0xed5af388653567af2f388e6224dc7c4b3241c544', // AZUKI
'0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b', // CLONE-X
'0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', // Punks
'0x23581767a106ae21c074b2276d25e5c3e136a68b', // MOONBIRD
'0x1a92f7381b9f03921564a437210bb9396471050c', // COOLCATS
]
 
const calculateBlueChipHolders = async () => {
  const MORALIS_API_KEY = 'D72mKKMwESsyNu6iPqCHaqpmsrSb0YCQvg5GP2F1kuNwimHLyAWbKEE0XjGJdyUf'
  
  
  const values = await Promise.all(
    [...reducedData.keys()].map(async (address) => {

      const moralisApiUrl = `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`;

      const { data } = await axios.get(moralisApiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': MORALIS_API_KEY,
        },
      });

      const matches = data.result.map(nft => {
        return BLUE_CHIP_COLLECTIONS.includes(nft.token_address);
      }).filter(Boolean);
      
      return matches.length >= 1;
    }))

    return values.reduce((prev,curr) => prev + curr, 0);
};

calculateBlueChipHolders().then((res) => console.log(res)).catch(console.error);

// 2. SORT BASED ON NFTS per WALLET 

const COLLECTION_SIZE = 7777;

const sortedMap = new Map([...reducedData.entries()].sort(([keyA, valueA], [keyB, valueB]) => valueB.amount - valueA.amount))

// CALCULATE HOW LONG HAVE EACH BEEN LONGEST HOLDING FOR (DAYS);
const extendedMap = new Map([...sortedMap.entries()].map(([key, value]) => {
   const now = new Date();
   const { holdingSince } = value;
 
   const timeDiff = now.getTime() - new Date(holdingSince).getTime();
   
   const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
 
   return [key, {
     ...value,
     daysHolding: daysDiff
   }]
 }));

const uniqueHolders = extendedMap.size;
const uniqueHolders_PCT = (uniqueHolders * 100 / COLLECTION_SIZE).toFixed(2);

// console.log(uniqueHolders);

// 3. GET top10, 50, 100 holder amounts
const TOP_10 = 10;
const TOP_50 = 50;
const TOP_100 = 100;

const top10Holder = [...extendedMap.values()].slice(TOP_10 - 1, TOP_10)[0]?.amount;
const top50Holder = [...extendedMap.values()].slice(TOP_50 - 1, TOP_50)[0]?.amount;
const top100Holder = [...extendedMap.values()].slice(TOP_100 - 1, TOP_100)[0]?.amount;

// console.log(`Top 10 holder:`,top10Holder);
// console.log(`Top 50 holder:`,top50Holder);
// console.log(`Top 100 holder:`,top100Holder);

// 4a. CALCULATE amount of wallets with 1, 2-3, 4+ NFTS
const SINGLE = 1;
const TRIPLE = 3;
const QUAD = 4;

const singleNftHolders = [...extendedMap.values()].filter(wallet => wallet.amount === SINGLE).length;
const tripleNftHolders = [...extendedMap.values()].filter(wallet => wallet.amount > SINGLE && wallet.amount <= TRIPLE).length;
const quadNftHolders = [...extendedMap.values()].filter(wallet => wallet.amount > QUAD).length;

// 4b. CALCULATE % of wallets with 1, 2-3, 4+ NFTS
const singleNftHolderRatio = ((singleNftHolders / uniqueHolders) * 100).toFixed(2);
const tripleNftHoldersRatio = ((tripleNftHolders / uniqueHolders) * 100).toFixed(2);
const quadNftHoldersRatio = ((quadNftHolders / uniqueHolders) * 100).toFixed(2);

// console.log(`Holders w/ ${singleNftHolders} NFT are ${singleNftHolderRatio}%`);
// console.log(`Holders w/ ${tripleNftHolders} NFT are ${tripleNftHoldersRatio}%`);
// console.log(`Holders w/ ${quadNftHolders} NFT are ${quadNftHoldersRatio}%`);


// 5b. CALCULATE How long people hodl
const WEEK = 7;
const MONTH = 30;

const weekHolders = [...extendedMap.values()].filter(wallet => wallet.daysHolding <= WEEK).length;
const underMonthHolders = [...extendedMap.values()].filter(wallet => wallet.daysHolding > WEEK && wallet.daysHolding <= MONTH).length;
const overMonthHolders = [...extendedMap.values()].filter(wallet => wallet.daysHolding > MONTH).length;

// CALCULATE % of wallets holding for 1-7D, 7-30D, 30D+
const weekHoldersRatio = ((weekHolders / uniqueHolders) * 100).toFixed(2);
const underMonthHoldersRatio = ((underMonthHolders / uniqueHolders) * 100).toFixed(2);
const overMonthHoldersRatio = ((overMonthHolders / uniqueHolders) * 100).toFixed(2);

// console.log(weekHolders);
// console.log(underMonthHolders);
// console.log(overMonthHolders);


// console.log(`Holders for 1-7D are ${weekHoldersRatio}%`);
// console.log(`Holders for 7-30D  are ${underMonthHoldersRatio}%`);
// console.log(`Holders for 30D+ ${overMonthHoldersRatio}%`);

const finalStats = {
    uniqueHolders: {
      number: uniqueHolders,
      ratio: uniqueHolders_PCT
    },
    topHolders: {
      top10: top10Holder,
      top50: top50Holder,
      top100: top100Holder
    },
    holdAmount: {
      single: {
        number: singleNftHolders,
        ratio: singleNftHolderRatio
      },
      triple: {
        number: tripleNftHolders,
        ratio: tripleNftHoldersRatio
      },
      quad: {
        number: quadNftHolders,
        ratio: quadNftHoldersRatio
      }
    },
    holdTime: {
      week: {
        number: weekHolders,
        ratio: weekHoldersRatio
      },
      underMonth: {
        number: underMonthHolders,
        ratio: underMonthHoldersRatio,
      },
      overMonth: {
        number: overMonthHolders,
        ratio: overMonthHoldersRatio
      }
    },
    blueChipHolders: {
       number: 0,
       ration: 0
    }
}

console.log(finalStats);