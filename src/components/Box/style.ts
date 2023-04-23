import styled, { DefaultTheme, css } from 'styled-components'

import {
  Border,
  BorderRadius,
  BoxProps,
  Flex,
  Grid,
  Layout,
  Margin,
  Padding,
  Position,
  Sizing
} from './types'

const renderLayout = (layout: Layout) => {
  return css`
    ${layout.display && `display: ${layout.display};`}
    ${layout.position && `display: ${layout.position};`}
    ${layout.zIndex && `z-index: ${layout.zIndex};`}
  `
}

const renderPosition = (position: Position) => {
  return css`
    ${position.top && `top: ${position.top};`}
    ${position.right && `right: ${position.right};`}
    ${position.bottom && `bottom: ${position.bottom};`}
    ${position.left && `bottom: ${position.left};`}
  `
}

const renderFlex = (flex: Flex) => {
  return css`
    ${flex.flexDirection && `flex-direction: ${flex.flexDirection};`}
    ${flex.flexWrap && `flex-wrap: ${flex.flexWrap};`}
    ${flex.flexFlow && `flex-flow: ${flex.flexFlow};`}
    ${flex.justifyContent && `justify-content: ${flex.justifyContent};`}
    ${flex.alignItems && `align-items: ${flex.alignItems};`}
    ${flex.alignContent && `align-content: ${flex.alignContent};`}
    ${flex.order && `order: ${flex.order};`}
    ${flex.flexGrow && `flex-grow: ${flex.flexGrow};`}
    ${flex.flexShrink && `flex-shrink: ${flex.flexShrink};`}
  `
}

const renderSizing = (sizing: Sizing) => {
  return css`
    ${sizing.width && `width: ${sizing.width};`}
    ${sizing.height && `height: ${sizing.height};`}
    ${sizing.maxWidth && `max-width: ${sizing.maxWidth};`}
    ${sizing.minWidth && `min-width: ${sizing.minWidth};`}
    ${sizing.maxHeight && `max-height: ${sizing.maxHeight};`}
    ${sizing.minHeight && `min-height: ${sizing.minHeight};`}
  `
}

const renderGrid = (grid: Grid) => {
  return css`
    ${grid.templateColumns && `grid-template-columns: ${grid.templateColumns};`}
    ${grid.templateRows && `grid-template-rows: ${grid.templateRows};`}
    ${grid.templateAreas && `grid-template-areas: ${grid.templateAreas};`}
    ${grid.templateAreas && `grid-template-areas: ${grid.templateAreas};`}
    ${grid.columnGap && `column-gap: ${grid.columnGap};`}
    ${grid.rowGap && `row-gap: ${grid.rowGap};`}
    ${grid.justifyItems && `row-justify-items: ${grid.justifyItems};`}
    ${grid.alignItems && `row-align-items: ${grid.alignItems};`}
  `
}

const renderBorderRadius = (borderRadius: BorderRadius) => {
  return css`
    ${borderRadius.type && `border-radius: ${borderRadius.type};`}
    ${borderRadius.topLeft &&
    `border-top-left-radius: ${borderRadius.topLeft};`}
    ${borderRadius.topRight &&
    `border-top-right-radius: ${borderRadius.topRight};`}
    ${borderRadius.bottomLeft &&
    `border-bottom-left-radius: ${borderRadius.bottomLeft};`}
    ${borderRadius.bottomRight &&
    `border-bottom-right-radius: ${borderRadius.bottomRight};`}
  `
}

const renderBorder = (border: Border) => {
  return css`
    ${border.color && `border-color: ${border.color};`}
    ${border.style && `border-style: ${border.style};`}
    ${border.width && `border-width: ${border.width};`}
  `
}

const renderMargin = (margin: Margin) => {
  return css`
    ${margin.style && `margin: ${margin.style};`}
    ${margin.top && `margin-top: ${margin.top};`}
    ${margin.right && `margin-right: ${margin.right};`}
    ${margin.bottom && `margin-bottom: ${margin.bottom};`}
    ${margin.left && `margin-left: ${margin.left};`}
  `
}

const renderPadding = (padding: Padding) => {
  return css`
    ${padding.style && `padding: ${padding.style};`}
    ${padding.top && `padding-top: ${padding.top};`}
    ${padding.right && `padding-right: ${padding.right};`}
    ${padding.bottom && `padding-bottom: ${padding.bottom};`}
    ${padding.left && `padding-left: ${padding.left};`}
  `
}

export const Box = styled.div<BoxProps>`
  ${({
    theme,
    bgColor,
    shadow,
    flex,
    layout,
    sizing,
    position,
    grid,
    borderRadius,
    border,
    margin,
    padding
  }) => css`
    ${bgColor && `background-color: ${theme.colors[bgColor]};`}
    ${shadow &&
    `box-shadow: ${theme.shadow[shadow.type]} ${theme.colors[shadow.color]} ;`}

    ${() => renderLayout(layout)}
    ${() => renderPosition(position)}
    ${() => renderFlex(flex)}
    ${() => renderSizing(sizing)}
    ${() => renderGrid(grid)}
    ${() => renderBorderRadius(borderRadius)}
    ${() => renderBorder(border)}
    ${() => renderMargin(margin)}
    ${() => renderPadding(padding)}
  `}
`
