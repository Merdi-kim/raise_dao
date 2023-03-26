import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  Chain,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const ScrollChain: Chain = {
  id: 534353,
  name: 'Scroll',
  network: 'scroll',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public:{
      http:['https://alpha-rpc.scroll.io/l2']
    },
    default: {
      http: ['https://alpha-rpc.scroll.io/l2'],
    },
  },
  blockExplorers: {
    default: { name: 'Scroll explorer', url: 'https://blockscout.scroll.io/' },
    
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [ScrollChain],
  [
    jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.default.http[0] }),
    })
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Raise',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  ) 
}

