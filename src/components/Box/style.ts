import styled, { css } from 'styled-components'

import { BoxProps } from './types'

export const Box = styled.div<BoxProps>`
  ${({ theme, bgColor, flex, layout, sizing }) => css`
    ${bgColor && `background-color: ${theme.colors[bgColor]};`}

    ${sizing.width && `width: ${sizing.width};`}
    ${sizing.height && `height: ${sizing.height};`}
  `}
`
