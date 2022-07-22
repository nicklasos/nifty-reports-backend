const axios = require('axios');

const BLUE_CHIP_COLLECTIONS = [
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // BAYC
  '0x60e4d786628fea6478f785a6d7e704777c86a7c6', // MAYC
  '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e', // DOODLES
  '0xed5af388653567af2f388e6224dc7c4b3241c544', // AZUKI
  '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b', // CLONE-X
  '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb', // Punks
  '0x23581767a106ae21c074b2276d25e5c3e136a68b', // MOONBIRD
  '0x1a92f7381b9f03921564a437210bb9396471050c', // COOLCATS
];

const MORALIS_API_KEY =
  'D72mKKMwESsyNu6iPqCHaqpmsrSb0YCQvg5GP2F1kuNwimHLyAWbKEE0XjGJdyUf';

async function calculateBlueChip() {
  let blueChipHolder = 0;

  const calculateBlueChipHolders = async () => {
    const values = await Promise.all(
      [...reducedData.keys()].map(async (address) => {
        const moralisApiUrl = `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`;

        const { data } = await axios.get(moralisApiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': MORALIS_API_KEY,
          },
        });

        const matches = data.result
          .map((nft) => {
            return BLUE_CHIP_COLLECTIONS.includes(nft.token_address);
          })
          .filter(Boolean);

        return matches.length >= 1;
      })
    );

    return values.reduce((prev, curr) => prev + curr, 0);
  };

  const res = await calculateBlueChipHolders(); //.then((res) => console.log(res)).catch(console.error);

  console.log(res);
}

module.exports = {
  calculateBlueChip,
};
