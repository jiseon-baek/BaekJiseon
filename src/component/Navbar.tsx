import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
import { useRouter } from "next/router"

const scrollData = [
	{ id: 'scroll1', name: 'Home', path: '/' },
	{ id: 'scroll2', name: 'Aboutme', path: '/about' },
	{ id: 'scroll3', name: 'Projects', path: '/project' },
	{ id: 'scroll4', name: 'Contact', path: '/contact' },
]


const Navbar = () => {
	const router = useRouter();

	

	return (
		
			<>
			<NavbarContainer>
			  <Link href="/"><Navlogo>JS</Navlogo></Link>
			  <Navgit>
			  <a href="https://github.com/jiseon-baek" className="nav_git">Github</a>
			  </Navgit>
			  
			</NavbarContainer>
			<NavScroll> 
				<ul style={{display: 'flex',
							flexDirection: 'column',
							position: 'fixed',
							right: '20px',
							top:'40%',color:'white'}}>
				{scrollData.map((scroll) => {
					return (
						<li key={scroll.id} style={{}}>
								<Link href={scroll.path}>
									<a style={{width: '15px',
										height: '15px',
										margin: '20px 0',
										transition: 'all 200ms ease',
										backgroundColor: scroll.path == router.pathname ? 'hotpink' : 'white',
										}}>
								
									</a>
								</Link>

						</li>
						)
				})}
				</ul>
			</NavScroll>

			

			</>
		
	)
}

const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  padding:16px;
  color:white;
`;
const Navgit = styled.div`
  	position: fixed;
	top: 30px;
	right: 30px;
	font-size: 30px;
`;
const Navlogo = styled.a`
  	position: fixed;
	top: 30px;
	left: 30px;
	font-size: 30px;
	margin:0;
	border-bottom: 2px solid white;
	transition: all 200ms ease;
`;

const NavScroll = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 20px;
	top:40%;
	animation: fade 2s ease;
`;

const Dot = styled.div`
	width: 11px;
	height: 11px;
	margin: 20px 0;
	background-color: white;
	transition: all 200ms ease;
	
`;

export default Navbar;