import AnkrscanProvider from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrscanProvider('');

//defining the list of supported blockchains
const listOfChains: Blockchain[] = ['eth', 'arbitrum', 'avalanche', 
'bsc', 'fantom', 'polygon', ];

//key-value pair mapping of chains to their native symbols
export const chainsToNativeSymbols: { [key in Blockchain]: string } = {
  eth: 'ETH',
  arbitrum: 'ETH',
  avalanche: 'AVAX',
  bsc: 'BNB',
  fantom: 'FTM',
  polygon: 'MATIC',
};

//getAccountBalance function to fetch coins and their respective token balances
export const getAccountBalance = async (
  walletAddress: string,
  blockchain: Blockchain
) => {
  return provider.getAccountBalance({
    walletAddress,
    blockchain,
  });
};

//use getAccountBalance to sum total balance across chains
export const getTotalMultichainBalance = async (walletAddress: string) => {
  let total = 0;
  for await (const chain of listOfChains) {
    const { totalBalanceUsd, assets } = await getAccountBalance(
      walletAddress,
      chain
    );
    total += +totalBalanceUsd;
  }
  return total;
};
