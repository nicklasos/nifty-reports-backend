type Collection = {
  lastFetched: Date; // 2022-05
  name: string; // Everai Heroes: DUO
  slug: string; // everai-heroes-duo
  tokenId: string; // EveraiDUO
  totalSupply: number; // 7777
  chain: "eth" | "sol"; // 'eth'
  contractAddress: string; //0x9a38DEC0590aBC8c883d72E52391090e948DdF12
  owners: number; // 3000
  pfps: number; // 400
  floorPrice: string; // 0.345
  topPrice: string; // 6.215
  avgPrice: string; // 0.764
  sales: {
    daily: number; // 76
    weekly: number; // 342
    monthly: number; // 14092
  };
  uniqueHolders: {
    number: number; // 3000
    pct: number; // 40 (%)
  };
  topHolders: {
    top10: number; // 100
    top50: number; // 15
    top100: number; // 5
  };
  bagSize: {
    single: {
      number: number; // 2400
      pct: number; // 68 (%)
    };
    triple: {
      number: number; // 700
      pct: number; // 21 %
    };
    quad: {
      number: number; // 100
      pct: number; // 3
    };
  };
  bagTime: {
    week: {
      number: number; // 2000
      ptc: number; // 33 (%)
    };
    underMonth: {
      number: number; // 2000
      ptc: number; // 33 (%)
    };
    overMonth: {
      number: number; // 2000
      ptc: number; // 33 (%)
    };
  };
};
