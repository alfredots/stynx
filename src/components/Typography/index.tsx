import { TypographyProps } from './types'
import * as S from './styles'
export const Typography = ({
  as = 'p',
  variant = 'body-md',
  children,
  ...props
}: TypographyProps) => {
  return (
    <S.Text as={as} variant={variant} {...props}>
      {children}
    </S.Text>
  )
}
