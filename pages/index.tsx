import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homeground from '../src/component/Home'
import Aboutme from '../src/component/Aboutme'

export default function Home() {
  return (
    <>
      <Head>
        <title>JS | Portfolio</title>
      </Head>
      <Homeground/>
      <Aboutme/>
      
    

    </>
  )
}
