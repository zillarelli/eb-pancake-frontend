import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WCRO, WETH9 } from '@pancakeswap/sdk'
import { FRTN, USDC } from './common'

export const cronosZkEvmTokens = {
  wcro: WCRO[ChainId.CRONOS_ZKEVM],
  usdc: USDC[ChainId.CRONOS_ZKEVM],
  frtn: FRTN[ChainId.CRONOS_ZKEVM],
  weth: WETH9[ChainId.CRONOS_ZKEVM],
}
