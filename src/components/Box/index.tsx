import { BoxProps } from './types'
import * as S from './style'

export const Box = ({ children, ...props }: BoxProps) => {
  return <S.Box {...props}>{children}</S.Box>
}
