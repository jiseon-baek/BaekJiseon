import Navbar from './Navbar'
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
		
		
		
		<div key={children.id}>
			{children}
		</div>
		</>
	)
}

export default Layout
