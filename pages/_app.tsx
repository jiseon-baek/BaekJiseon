import type { AppProps } from 'next/app';
import Head from 'next/head'
import '../styles/globals.css';
import Layout from '../src/component/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
          <Layout>
          <Component {...pageProps} />
          </Layout>
    </>
  )
}

export default MyApp
