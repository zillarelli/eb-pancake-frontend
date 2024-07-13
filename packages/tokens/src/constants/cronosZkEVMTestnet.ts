import { WCRO } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { USDC } from './common'

export const cronosZkEvmTestnetTokens = {
  wcro: WCRO[ChainId.CRONOS_ZKEVM_TESTNET],
  usdc: USDC[ChainId.CRONOS_ZKEVM_TESTNET],
}
