import { BoxProps } from './types'
import * as S from './style'

export const Box = ({ bgColor, layout, sizing, flex, children }: BoxProps) => {
  return (
    <S.Box bgColor={bgColor} layout={layout} sizing={sizing} flex={flex}>
      {children}
    </S.Box>
  )
}
