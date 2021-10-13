import Link from 'next/link';
import styled from 'styled-components';



export default function ScrollBar() {
	
	
	return (
		<>
		<Scroll>
			<Link href="/"><Dot></Dot></Link>
			<Link href="/about"><Dot></Dot></Link>
			<Link href="/project"><Dot></Dot></Link>
			<Link href="/contact"><Dot></Dot></Link>
		</Scroll>
		</>
	)
}

const Scroll = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
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
