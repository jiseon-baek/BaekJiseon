import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../src/component/Layout'
import Navbar from '../src/component/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
          
          <Layout>
          <Navbar/>
            <Component {...pageProps} />
          </Layout>
          
    </>
  )
}

export default MyApp
