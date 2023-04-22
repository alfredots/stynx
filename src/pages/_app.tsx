import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '@styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project start to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
