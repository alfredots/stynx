/* eslint-disable react/no-unknown-property */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '@styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

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
      <GlobalStyles fontNext={inter} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
