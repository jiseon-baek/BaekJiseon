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
            <meta name="keywords" content="프론트엔드, 프론트엔드 포트폴리오, frontend, frontend portfolio"/>
          <meta name="description" content="Author: JiseonBaek, Description: This is the frontend portfolio for seeking jobs."/>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
			
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
