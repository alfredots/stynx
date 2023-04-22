// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        50: string
        500: string
        900: string
      }
      secondary: {
        50: string
        500: string
        900: string
      }
      neutral: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      error: {
        50: string
        500: string
        900: string
      }
      warning: {
        50: string
        500: string
        900: string
      }
      info: {
        50: string
        500: string
        900: string
      }
      success: {
        50: string
        500: string
        900: string
      }
      white: string
      black: string
    }
    typography: {
      '2xl': {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      xl: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      lg: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      md: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      sm: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      xs: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      'body-xl': {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      'body-lg': {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      'body-md': {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      'body-sm': {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
      'body-xs': {
        fontSize: string
        lineHeight: string
        letterSpacing: string
      }
    }
    spacing: {
      '0px': string
      '1px': string
      '2px': string
      '4px': string
      '6px': string
      '8px': string
      '10px': string
      '12px': string
      '14px': string
      '16px': string
      '20px': string
      '24px': string
      '28px': string
      '32px': string
      '36px': string
      '40px': string
      '44px': string
      '48px': string
      '56px': string
      '64px': string
    }
    radius: {
      px: string
      xs: string
      sm: string
      md: string
      lg: string
      full: string
    }
    shadow: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
  }
}
