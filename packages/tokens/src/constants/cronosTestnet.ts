import { WCRO } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { FRTN_TESTNET, USDC_TESTNET } from './common'

export const cronosTestnetTokens = {
  wcro: WCRO[ChainId.CRONOS_TESTNET],
  usdc: USDC_TESTNET,
  frtn: FRTN_TESTNET,
}
