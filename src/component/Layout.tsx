import Navbar from './Navbar'
import Home from './Home'
import Aboutme from './Aboutme'
import Projects from './Project'
import Head from 'next/head'
import React, { ReactChild, FC } from 'react'

type Props = {
	children: ReactChild
}

const Layout: FC<Props> = ({children}) => {
	return (
		<>
		<Head>
        		<title>JS | Portfolio</title>
      		</Head>
		<Navbar/>
		<Home/>
		<Aboutme/>
		<Projects/>
		
		<div key={children.id}>
			{children}
		</div>
		</>
	)
}

export default Layout
