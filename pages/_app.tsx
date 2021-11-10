import React, { FunctionComponent, useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../src/component/Layout'
import Navbar from '../src/component/Navbar';
import '../tailwind.css';

import AOS from 'aos';
import "aos/dist/aos.css";

const MyApp: FunctionComponent<{ Component: any, pageProps: AppProps }> = ({ Component, pageProps }) => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
