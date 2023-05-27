import { createGlobalStyle, css } from 'styled-components'

interface GlobalStyles {
  fontNext: {
    className: string
    style: {
      fontFamily: string
      fontWeight?: number
      fontStyle?: string
    }
  }
}
export const GlobalStyles = createGlobalStyle<GlobalStyles>`
 ${({ fontNext }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   html,
   body,
   #__next {
     height: 100%;
   }

   body {
     font-family: ${fontNext.style.fontFamily};
   }
 `}

`
