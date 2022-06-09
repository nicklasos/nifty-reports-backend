type Collection = {
  lastFetched: Date; // 2022-05-05 ❌
  createdAt: Date; // ✅ 2022-05-04 ✅
  name: string; // ✅ Everai Heroes: DUO
  slug: string; // ✅ everai-heroes-duo
  description: string; // ✅ yada-yada
  externalLink: string; // ✅ everai.xyz
  tokenId: string; // ✅ EveraiDUO
  imageUrl: string; // ✅ aws.s3/
  totalSupply: number; // ✅ 7777
  chain: "eth" | "sol"; // ✅ 'eth'
  contractAddress: string; // ✅ 0x9a38DEC0590aBC8c883d72E52391090e948DdF12 ❌
  contractCreationDate: Date; // ✅ 2022-03-05
  communitySize: number; // ✅ 400
  twitterFollowers: number; // ✅ 822000
  discord: number; // ❌ 24.2
  price: {
    // ✅ OPENSEA STATS
    floor: string; // OPENSEA FLOOR 0.345
    average: {
      // OPENSEA one_day_average_price 0.764
      daily: string;
      weekly: string;
      monthly: string;
    };
  };
  salesPrice: {
    // ✅ ICY TOOLS STATS
    daily: {
      lowest: string; // ICY-TOOLS FLOOR 0.15
      highest: string; // ICY-TOOLS CEILING 6.215
    };
    weekly: {
      lowest: string; // ICY-TOOLS FLOOR 0.15
      highest: string; // ICY-TOOLS CEILING 6.215
    };
  };
  salesAmount: {
    // ✅ OPENSEA STATS
    daily: number; // 76
    weekly: number; // 342
    monthly: number; // 14092
  };
  volume: {
    // ✅ OPENSEA STATS
    daily: number;
    weekly: number;
    monthly: number;
  };
  uniqueHolders: {
    // ✅ OPENSEA STATS
    number: number; // 3000
    ratio: number; // 40 (%)
  };
  topHolders: {
    // ✅ openseaCalculatedStats
    top10: number; // 100
    top50: number; // 15
    top100: number; // 5
  };
  holdAmount: {
    // ✅ openseaCalculatedStats
    single: {
      number: number; // 2400
      ratio: number; // 68 (%)
    };
    triple: {
      number: number; // 700
      ratio: number; // 21 %
    };
    quad: {
      number: number; // 100
      ratio: number; // 3 %
    };
  };
  holdTime: {
    // ✅
    week: {
      number: number; // 2000
      ratio: number; // 33 (%)
    };
    underMonth: {
      number: number; // 2000
      ratio: number; // 33 (%)
    };
    overMonth: {
      number: number; // 2000
      ratio: number; // 33 (%)
    };
  };
  listed?: {
    number: number;
    ratio: number;
  };
  blueChipHolders: {
    // ❌
    number: number;
    ratio: number;
  };
};
