const axios = require('axios');

// let keke = 0;
// const BLUE_CHIP_COLLECTIONS = [
//   '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // BAYC
//   '0x60e4d786628fea6478f785a6d7e704777c86a7c6', // MAYC
//   '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e', // DOODLES
//   '0xed5af388653567af2f388e6224dc7c4b3241c544', // AZUKI
//   '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b', // CLONE-X
//   '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', // Punks
//   '0x23581767a106ae21c074b2276d25e5c3e136a68b', // MOONBIRD
//   '0x1a92f7381b9f03921564a437210bb9396471050c', // COOLCATS
//   '0x3acce66cd37518a6d77d9ea3039e00b3a2955460'
// ];

// const addresses = [
//   '0x73f49CD9FdCcd11392337e67A48560080CFA4A7D',
//   '0x1489f291FfC882bcfA85fdC1692148279AA67bC1',
//   '0x300DB91ca086190d85a76bcc6B527375667cAF85'
// ]

// const calculateBlueChipHolders = async () => {
//   const MORALIS_API_KEY = process.env.ICYTOOLS_API_KEY;

//   const values = await Promise.all(
//     addresses.map(async (address) => {

//       const moralisApiUrl = `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`;

//       const { data } = await axios.get(moralisApiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'X-API-Key': MORALIS_API_KEY,
//         },
//       });

//       const matches = data.result.map(nft => {
//         return BLUE_CHIP_COLLECTIONS.includes(nft.token_address);
//       }).filter(Boolean);

//       return matches.length >= 1;
//     }))

//     return values.reduce((prev,curr) => prev + curr, 0);
// };

// calculateBlueChipHolders().then((res) => console.log(res)).catch(console.error);

const request = axios.create({
  baseURL: 'https://api.twitter.com/2/users/by/username', ///todya_?user.fields=public_metrics
  headers: {
    Authorization: 'Bearer XXX',
  },
});

async function getAccountMetrics(username) {
  const url = `/${username}?user.fields=public_metrics`;

  const {
    data: { data },
  } = await request.get(url);

  const followersCount = data.public_metrics.followers_count;

  return followersCount;
}

getAccountMetrics('TheEverai');
