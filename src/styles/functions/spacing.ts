import { theme } from '../theme'

export const spacing = (value: keyof typeof spacing) => {
  return theme.spacing[value]
}
