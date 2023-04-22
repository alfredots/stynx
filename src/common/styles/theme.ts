import { DefaultTheme } from 'styled-components'

import { colors } from './tokens/colors'
import { typography } from './tokens/typography'
import { shadow } from './tokens/shadow'
import { spacing } from './tokens/spacing'
import { radius } from './tokens/radius'

export const theme: DefaultTheme = {
  colors,
  typography,
  spacing,
  shadow,
  radius
} as const
