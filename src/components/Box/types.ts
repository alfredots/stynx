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
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'
  zIndex?: number
}

export type Position = {
  left?: string
  bottom?: string
  right?: string
  top?: string
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

export type Grid = {
  templateColumns?: string
  templateRows?: string
  templateAreas?: string
  columnGap?: string
  rowGap?: string
  gap?: string
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
}

export type BoxShadow = {
  type?: keyof typeof theme.shadow
  color?: keyof typeof theme.colors
}

export type BorderRadius = {
  type: keyof typeof theme.radius
  topLeft: keyof typeof theme.radius
  topRight: keyof typeof theme.radius
  bottomRight: keyof typeof theme.radius
  bottomLeft: keyof typeof theme.radius
}

export type Border = {
  color?: keyof typeof theme.colors
  style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid'
  width?: keyof typeof theme.spacing
}

export type Margin = {
  style?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export type Padding = {
  style?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

type RenderProps = {
  sizing?: Sizing
  layout?: Layout
  flex?: Flex
  position?: Position
  grid?: Grid
  bgColor?: keyof typeof theme.colors
  shadow?: BoxShadow
  borderRadius?: BorderRadius
  border?: Border
  margin?: Margin
  padding?: Padding
}

export type BoxProps = {
  children: ReactNode
  sm?: RenderProps
  md?: RenderProps
  lg?: RenderProps
  xl?: RenderProps
  twoXl?: RenderProps
} & RenderProps
