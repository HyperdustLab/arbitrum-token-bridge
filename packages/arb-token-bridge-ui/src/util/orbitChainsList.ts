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
    isTestnet: false,
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
      childGatewayRouter: '0x2a9844EAca61aF157B0C64adc159f460991e4a09',
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
  15681077991: {
    chainId: 15681077991,
    confirmPeriodBlocks: 150,
    ethBridge: {
      bridge: '0x45591E537406a2F91968EFB508217f847d37823e',
      inbox: '0xdD5e79361F8536f42Def50862389C642AFeed193',
      outbox: '0xD3D217CA2B6a3E2B79Fb120344c8A53407Ad7fE1',
      rollup: '0x86E71d6CB0e5b29184337b1a35D961DC48BdeDBd',
      sequencerInbox: '0x72A4638dCd29C6ae0631C8fF813cF111Ed5Dc867',
    },
    nativeToken: '0xd03E48d335959af29e560D66f9cC0D9095A8dE8d',
    explorerUrl: 'https://explorer.hyperagi.network',
    rpcUrl: 'https://testnet-rpc.hyperagi.network',
    isCustom: true,
    isTestnet: false,
    name: 'HyperAGI',
    slug: 'HyperAGI',
    parentChainId: 42161,
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      parentCustomGateway: '0xf9d3cdca76a05aaf40544336296a5f4b18ba2528',
      parentErc20Gateway: '0x404468B0e2101A687E345B425feEBdB91D058a69',
      parentGatewayRouter: '0x5faac976945b43aa0349aab4720d7a9cf8347cab',
      parentMultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822  ',
      parentProxyAdmin: '0x0000000000000000000000000000000000000000',
      parentWeth: '0x0000000000000000000000000000000000000000',
      parentWethGateway: '0x0000000000000000000000000000000000000000',
      childCustomGateway: '0x1c51dae3a01ed56597f87aeb74f63c32c44e5ef4',
      childErc20Gateway: '0x0810925623f6edcab73c48d756053639d6807406',
      childGatewayRouter: '0x8cc06f1daec299e4d339aa74e7d08a07c12218ca',
      childMultiCall: '0x6e7e4f259d7eeb95f6613be5c9ebd66ef59d9695',
      childProxyAdmin: '0xbb2745a8c27dd026f8b61a83e7df30bc1b9d07bd',
      childWeth: '0x0000000000000000000000000000000000000000',
      childWethGateway: '0x0000000000000000000000000000000000000000',
    },
    bridgeUiConfig: {
      color: '#3ABE7B',
      network: {
        name: 'HyperAGI',
        logo: '/images/HyperAGILogo.svg',
        description: 'HyperAGI',
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
