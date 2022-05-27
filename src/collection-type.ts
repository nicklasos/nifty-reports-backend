type Collection = {
  lastFetched: Date; // 2022-05-05
  statsFor: Date; // 2022-05-04
  name: string; // Everai Heroes: DUO
  slug: string; // everai-heroes-duo
  tokenId: string; // EveraiDUO
  imageUrl: string; // aws.s3/
  totalSupply: number; // 7777
  chain: "eth" | "sol"; // 'eth'
  contractAddress: string; //0x9a38DEC0590aBC8c883d72E52391090e948DdF12
  contractCreatedData: Date; // 2022-03-05
  owners: number; // 3000
  pfps: number; // 400
  twitterFollowers: number; // 82.2
  discord: number; // 24.2
  price: {
    floor: string; // 0.345
    top: string; // 6.215
    avg: string; // 0.764
  };
  sales: {
    daily: number; // 76
    weekly: number; // 342
    monthly: number; // 14092
  };
  uniqueHolders: {
    number: number; // 3000
    ratio: number; // 40 (%)
  };
  topHolders: {
    top10: number; // 100
    top50: number; // 15
    top100: number; // 5
  };
  holdAmount: {
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
  blueChipHolders: {
    number: number;
    ratio: number;
  };
};
