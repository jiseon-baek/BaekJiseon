import React from 'react';
import Homeground from '../src/component/Home';

import { GetStaticPropsContext } from 'next';



export default function Home() {
  return (
    <>
      
    <Homeground/>
    
      
    
    </>
  )
}

//export const getStaticProps = async (context: GetStaticPropsContext) => {

  //const res = await fetch('http://localhost:3000/api/services')
  //const data = await res.json();

  //console.log('Server', services);

  //return {
    //props: {
      //services: data.services,

    //}
  //}
//}
