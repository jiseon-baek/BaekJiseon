import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const scrollData = [
	{ id: 'scroll1', name: 'Home', path: '/' },
	{ id: 'scroll2', name: 'Aboutme', path: '/about' },
	{ id: 'scroll3', name: 'Projects', path: '/project' },
	{ id: 'scroll4', name: 'Contact', path: '/contact' },
]


const Navbar = () => {
	const router = useRouter();

	

	return (
		
			<div>
			
			<NavScroll>
				<NavbarContainer>
				<Link href="/"><Navlogo>JS</Navlogo></Link>
				<Navgit>
				<Navgit href="https://github.com/jiseon-baek"><FontAwesomeIcon icon={faGithub}/></Navgit>
				</Navgit>
				
				</NavbarContainer> 
				<ul style={{display: 'flex',
							flexDirection: 'column',
							position: 'fixed',
							right: '20px',
							top:'40%',color:'white'}}>
				{scrollData.map((scroll) => {
					return (
						<li key={scroll.id} style={{
							width: '15px',
						height: '15px',
						margin: '20px 0',
						transition: 'all 200ms ease',
						backgroundColor: scroll.path == router.pathname ? 'rgb(203, 51, 76)' : 'white',
						listStyle: 'none',
						cursor: 'pointer'
						
						}}
						>
								
									<Link href={scroll.path}><div style={{width:'20px', height:'20px'}}></div></Link>
								

						</li>
						)
				})}
				</ul>
			</NavScroll>

			

			</div>
		
	)
}

const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  color:white;
  
`;
const Navgit = styled.a`
  	position: fixed;
	top: 30px;
	right: 30px;
	font-size: 30px;
	transition: all 200ms ease;
	&:hover {
		color: pink;
	}
`;
const Navlogo = styled.a`
  	position: fixed;
	top: 30px;
	left: 30px;
	font-size: 30px;
	margin:0;
	border-bottom: 2px solid white;
	transition: all 200ms ease;
	cursor: pointer;
	&:hover {
		color: pink;
		border-bottom-color: pink;
	}
`;

const NavScroll = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 20px;
	top:40%;
	animation: fade 2s ease;
	z-index:100;
`;

const Dot = styled.div`
	width: 11px;
	height: 11px;
	margin: 20px 0;
	background-color: white;
	transition: all 200ms ease;
	
`;

export default Navbar;