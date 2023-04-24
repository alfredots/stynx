import { theme } from '@styles/theme'
import { ReactNode } from 'react'

type TypographyRenderProps = {
  weight?: keyof typeof theme.weight
  color?: keyof typeof theme.colors
  variant?: keyof typeof theme.typography
}

export type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  sm?: TypographyRenderProps
  md?: TypographyRenderProps
  lg?: TypographyRenderProps
  xl?: TypographyRenderProps
  twoXl?: TypographyRenderProps
  children: ReactNode
} & TypographyRenderProps
