import Link from 'next/link';
import styled from "styled-components";

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
const Navlogo = styled.div`
  	position: fixed;
	top: 30px;
	left: 30px;
	font-size: 30px;
	margin:0;
	border-bottom: 2px solid white;
	transition: all 200ms ease;
`;

export default function Navbar() {

	return (
		
			<>
			<NavbarContainer>
			  <Link href=""><Navlogo>JS</Navlogo></Link>
			  <Navgit>
			  <a href="https://github.com/jiseon-baek" className="nav_git">Github</a>
			  </Navgit>
			  
			</NavbarContainer>

			

			</>
		
	)
}