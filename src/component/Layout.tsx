import Navbar from './Navbar'
import Home from './Home'
import Aboutme from './Aboutme'
import Scroll from './ScrollBar'
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
		<Scroll/>
		<div>
			{children}
		</div>
		</>
	)
}

export default Layout
