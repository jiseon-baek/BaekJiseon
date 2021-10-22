import React from 'react';
import Head from 'next/head';

import Homeground from '../src/component/Home';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';



function Home({endpoint}: any) {
  
  console.log(endpoint);

  return (
    <>
    <Head>
        		<title>JS | Frontend Portfolio | Home</title>
			
      		</Head>
    
    <Homeground/>
   
      
    
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  //console.log(process.env.VERCEL_URL);
  
  //const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  //const data = await res.json();

  return {
    props: {
      endpoint: process.env.VERCEL_URL
    }
  }
}
