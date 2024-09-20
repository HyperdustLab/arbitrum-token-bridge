import { NativeCurrencyBase } from '../hooks/useNativeCurrency'
import { ChainWithRpcUrl } from './networks'

export type NetworkType = 'Ethereum' | 'Rollup' | 'AnyTrust' | 'Ethereum Testnet' | 'Arbitrum Testnet'

export type BridgeUiConfig = {
  color: `#${string}`
  network: {
    name: string
    logo: string
    description?: string
  }
  nativeTokenData?: NativeCurrencyBase
}

export type OrbitChainConfig = ChainWithRpcUrl & {
  bridgeUiConfig: BridgeUiConfig
}

export const orbitMainnets: {
  [key: number]: OrbitChainConfig
} = {}

export const orbitTestnets: { [key in number]: OrbitChainConfig } = {
  73871202146: {
    chainId: 73871202146,
    confirmPeriodBlocks: 150,
    ethBridge: {
      bridge: '0x106DC4aB4161698278dC511d067B670224772C15',
      inbox: '0x8FF3C239aC2f9EDE4Fd725cC97eD3D6a854e4Ad0',
      outbox: '0x057d777a37371ac8eE167E1c7Ed94dbb0CD57BfD',
      rollup: '0xbaAc5E18720bB996a76Fe2F411f9032a62774c3b',
      sequencerInbox: '0xebd9D826Da330f1eB28361945EcC5DD3451918d4',
    },
    nativeToken: '0xd03E48d335959af29e560D66f9cC0D9095A8dE8d',
    explorerUrl: 'https://tagtal.hyperagi.network',
    rpcUrl: 'https://tagtal-rpc.hyperagi.network',
    isCustom: true,
    isTestnet: true,
    name: 'Tagtal Orbit Devnet',
    slug: 'Tagtal Orbit Devnet',
    parentChainId: 42161,
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      parentCustomGateway: '0x2a9844EAca61aF157B0C64adc159f460991e4a09',
      parentErc20Gateway: '0x404468B0e2101A687E345B425feEBdB91D058a69',
      parentGatewayRouter: '0x3851274F55607647DeB7c3b76902Dd24CA9f688a',
      parentMultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822  ',
      parentProxyAdmin: '0x0000000000000000000000000000000000000000',
      parentWeth: '0x0000000000000000000000000000000000000000',
      parentWethGateway: '0x0000000000000000000000000000000000000000',
      childCustomGateway: '0xfDbF585104B00f42710e154423CEe77803Ecef99',
      childErc20Gateway: '0xC3E983FFdED0FA18124CAfAF0658E008C449bAb2',
      childGatewayRouter: '0x8D8dB784Be9517740Bc7b62d9198E7109C99Fb4E',
      childMultiCall: '0x780e02e008d8C68Ac07910C1Bfd58536c6729305',
      childProxyAdmin: '0xBB2745a8C27dd026F8b61a83E7DF30Bc1B9D07bd',
      childWeth: '0x0000000000000000000000000000000000000000',
      childWethGateway: '0x0000000000000000000000000000000000000000',
    },
    bridgeUiConfig: {
      color: '#3ABE7B',
      network: {
        name: 'Tagtal Orbit Devnet',
        logo: '/images/HyperAGILogo.svg',
        description: 'Tagtal Orbit Devnet.',
      },
      nativeTokenData: {
        name: 'TAGTAL',
        symbol: 'TAGTAL',
        decimals: 18,
        logoUrl: '/images/HyperAGILogo.svg',
      },
    },
  },
}

export const orbitChains = { ...orbitMainnets, ...orbitTestnets }

export function getOrbitChains(
  {
    mainnet,
    testnet,
  }: {
    mainnet: boolean
    testnet: boolean
  } = { mainnet: true, testnet: true }
): OrbitChainConfig[] {
  const mainnetChains = mainnet ? Object.values(orbitMainnets) : []
  const testnetChains = testnet ? Object.values(orbitTestnets) : []

  return [...mainnetChains, ...testnetChains]
}

export function getInboxAddressFromOrbitChainId(chainId: number) {
  return (
    getOrbitChains()
      //
      .find((chain) => chain.chainId === chainId)?.ethBridge.inbox
  )
}

export function getChainIdFromInboxAddress(inboxAddress: string) {
  return getOrbitChains().find((chain) => chain.ethBridge.inbox.toLowerCase() === inboxAddress.toLowerCase())?.chainId
}
