import styled, { css } from 'styled-components'
import { TypographyProps } from './types'
import { maxWidth } from '@styles/media'

export const Text = styled.span<TypographyProps>`
  ${({ theme, color, weight, variant, sm, md, lg, xl, twoXl }) => css`
    ${color && `color: ${theme.colors[color]}`};
    ${weight && `font-weight: ${theme.weight[weight]}`};
    ${variant && `font-size: ${theme.typography[variant].fontSize}`};
    ${variant && `line-height: ${theme.typography[variant].lineHeight}`};
    ${variant && `letter-spacing: ${theme.typography[variant].letterSpacing}`};

    @media ${maxWidth.sm} {
      ${sm?.color && `color: ${theme.colors[sm.color]}`};
      ${sm?.weight && `font-weight: ${theme.weight[sm.weight]}`};
      ${sm?.variant && `font-size: ${theme.typography[sm.variant].fontSize}`};
      ${sm?.variant &&
      `line-height: ${theme.typography[sm.variant].lineHeight}`};
      ${sm?.variant &&
      `letter-spacing: ${theme.typography[sm.variant].letterSpacing}`};
    }

    @media ${maxWidth.md} {
      ${md?.color && `color: ${theme.colors[md.color]}`};
      ${md?.weight && `font-weight: ${theme.weight[md.weight]}`};
      ${md?.variant && `font-size: ${theme.typography[md.variant].fontSize}`};
      ${md?.variant &&
      `line-height: ${theme.typography[md.variant].lineHeight}`};
      ${md?.variant &&
      `letter-spacing: ${theme.typography[md.variant].letterSpacing}`};
    }

    @media ${maxWidth.lg} {
      ${lg?.color && `color: ${theme.colors[lg.color]}`};
      ${lg?.weight && `font-weight: ${theme.weight[lg.weight]}`};
      ${lg?.variant && `font-size: ${theme.typography[lg.variant].fontSize}`};
      ${lg?.variant &&
      `line-height: ${theme.typography[lg.variant].lineHeight}`};
      ${lg?.variant &&
      `letter-spacing: ${theme.typography[lg.variant].letterSpacing}`};
    }

    @media ${maxWidth.xl} {
      ${xl?.color && `color: ${theme.colors[xl.color]}`};
      ${xl?.weight && `font-weight: ${theme.weight[xl.weight]}`};
      ${xl?.variant && `font-size: ${theme.typography[xl.variant].fontSize}`};
      ${xl?.variant &&
      `line-height: ${theme.typography[xl.variant].lineHeight}`};
      ${xl?.variant &&
      `letter-spacing: ${theme.typography[xl.variant].letterSpacing}`};
    }

    @media ${maxWidth['2xl']} {
      ${twoXl?.color && `color: ${theme.colors[twoXl.color]}`};
      ${twoXl?.weight && `font-weight: ${theme.weight[twoXl.weight]}`};
      ${twoXl?.variant &&
      `font-size: ${theme.typography[twoXl.variant].fontSize}`};
      ${twoXl?.variant &&
      `line-height: ${theme.typography[twoXl.variant].lineHeight}`};
      ${twoXl?.variant &&
      `letter-spacing: ${theme.typography[twoXl.variant].letterSpacing}`};
    }
  `}
`
