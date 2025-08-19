import { NativeCurrencyBase } from '../hooks/useNativeCurrency'
import { ChainWithRpcUrl } from './networks'

export type NetworkType =
  | 'Ethereum'
  | 'Rollup'
  | 'AnyTrust'
  | 'Ethereum Testnet'
  | 'Arbitrum Testnet'

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
  2868: {
    chainId: 2868,
    confirmPeriodBlocks: 150,
    ethBridge: {
      bridge: '0x221E74c81F4233ec7Ec8688B360bf4246A95d2dF',
      inbox: '0x559A87d5a82E02a76820550B887FD5cE3E2DFb3e',
      outbox: '0xeB27CF676dFB84FE834751512F2Ca433E531218B',
      rollup: '0xdA8Ea762af9777C95D619d49ad35f74c939e1A42',
      sequencerInbox: '0xfe41991969CF568e8420F0F309d24DC20Fc0d3a3'
    },
    nativeToken: '0x74B1A2E85462a102509aeE0Ee899BD3F7aA69E1F',
    explorerUrl: 'https://explorer.hyperagi.ai',
    rpcUrl: 'https://rpc.hyperagi.ai',
    isCustom: true,
    isTestnet: false,
    name: 'HyperAGI',
    slug: 'HyperAGI',
    parentChainId: 42161,
    retryableLifetimeSeconds: 604800,
    tokenBridge: {
      parentCustomGateway: '0xb30f2730976d00c18102995a449559823cb2fe0f',
      parentErc20Gateway: '0x404468B0e2101A687E345B425feEBdB91D058a69',
      parentGatewayRouter: '0xc08449d65e04f2a40ab5d440e1e5cfcbaa8943ca',
      parentMultiCall: '0x90B02D9F861017844F30dFbdF725b6aa84E63822  ',
      parentProxyAdmin: '0x0000000000000000000000000000000000000000',
      parentWeth: '0x0000000000000000000000000000000000000000',
      parentWethGateway: '0x0000000000000000000000000000000000000000',
      childCustomGateway: '0x33063838ff9efacac4c47baf32406f067c0f5862',
      childErc20Gateway: '0x6471d78ac81042cd22477b9c86dbbde0693b5028',
      childGatewayRouter: '0x80d90949c93459a625f7d7ab71472aae7fd6f206',
      childMultiCall: '0xc68906fb5bf01c69f34f7ea49eb65f6d55bd0a23',
      childProxyAdmin: '0xf4e73311c80088b107d2b3baf221667893ca3272',
      childWeth: '0x0000000000000000000000000000000000000000',
      childWethGateway: '0x0000000000000000000000000000000000000000'
    },
    bridgeUiConfig: {
      color: '#3ABE7B',
      network: {
        name: 'HyperAGI',
        logo: '/images/HyperAGILogo.svg',
        description: 'HyperAGI.'
      },
      nativeTokenData: {
        name: 'HyperAGI Token',
        symbol: 'HYPT',
        decimals: 18,
        logoUrl: '/images/HyperAGILogo.svg'
      }
    }
  }
}

export const orbitChains = { ...orbitMainnets, ...orbitTestnets }

export function getOrbitChains(
  {
    mainnet,
    testnet
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
      .find(chain => chain.chainId === chainId)?.ethBridge.inbox
  )
}

export function getChainIdFromInboxAddress(inboxAddress: string) {
  return getOrbitChains().find(
    chain => chain.ethBridge.inbox.toLowerCase() === inboxAddress.toLowerCase()
  )?.chainId
}
