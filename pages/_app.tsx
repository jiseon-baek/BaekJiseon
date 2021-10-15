import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../src/component/Layout'
import Navbar from '../src/component/Navbar';
import React, { FunctionComponent } from 'react';

const MyApp:FunctionComponent<{ Component: any, pageProps: any}> = ({ Component, pageProps}) => {
  return (
    <>
          <Navbar/>
          <Layout>
          
            <Component {...pageProps} />
          </Layout>
          
    </>
  )
}

//function MyApp({ Component, pageProps }: AppProps) {
  
  //return (
    //<>
          
          //<Layout>
          //<Navbar/>
            //<Component {...pageProps} />
          //</Layout>
          
    //</>
  //)
//}

export default MyApp
