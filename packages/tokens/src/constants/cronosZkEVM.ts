import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WCRO, WETH9 } from '@pancakeswap/sdk'
import { FRTN, USDC } from './common'

export const cronosZkEvmTokens = {
  wcro: WCRO[ChainId.CRONOS_ZKEVM],
  usdc: USDC[ChainId.CRONOS_ZKEVM],
  frtn: FRTN[ChainId.CRONOS_ZKEVM],
  weth: new ERC20Token(
    ChainId.CRONOS_ZKEVM,
    '0x898B3560AFFd6D955b1574D87EE09e46669c60eA',
    18,
    'vETH',
    'Veno ETH',
    'https://ethereum.org',
  ),
}
