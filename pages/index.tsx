import React from 'react';
import Homeground from '../src/component/Home';

import { GetStaticProps, GetStaticPropsContext } from 'next';



export default function Home() {
  return (
    <>
      
    <Homeground/>
    
      
    
    </>
  )
}

export const getServerSideProps: GetStaticProps = async (context: GetStaticPropsContext) => {

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json();
  console.log(data);

  return {
    props: {
      services: data.services,

    }
  }
}
