import { ReactNode } from 'react'
import { theme } from '@styles/theme'

export type Sizing = {
  width?: string
  height?: string
  maxWidth?: string
  minWidth?: string
  maxHeight?: string
  minHeight?: string
}

export type Layout = {
  display?: 'flex' | 'block' | 'inline-block' | 'grid'
}

export type Flex = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  flexFlow?: 'row nowrap' | 'row wrap' | 'column nowrap' | 'column wrap'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
  order?: number
  flexGrow?: number
  flexShrink?: number
}

export type BoxProps = {
  sizing?: Sizing
  layout?: Layout
  flex?: Flex
  bgColor?: keyof typeof theme.colors
  children: ReactNode
}
