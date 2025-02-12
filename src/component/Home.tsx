import React from 'react';
import Img from 'next/image';
import styled, { keyframes } from 'styled-components';
import "tailwindcss/tailwind.css"

export default function Home() {
	return (
		<>
			<Homeground>
				<Homesvg data-aos="fade-up"
					data-aos-duration="3000" aria-label="home_svg"><Img src="/img/space.svg" width={400} height={400} alt="home-svg" /></Homesvg>
				<Homegreeting data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="2000">Welcome To JS's Space <Homehand>👋🏻</Homehand><br /><Homespan>항상 도전하고 성장하는 Front-end 개발자 '백지선'입니다</Homespan></Homegreeting>
			</Homeground>

		</>
	)
}


const float4 = keyframes`
	0% {
		
		transform: translatey(0px);
	}
	100% {
		
		transform: translatey(-140px);
	}
`;

const shake = keyframes`

	0% {
		transform: rotate(0deg);
	}

	10% {
		transform: rotate(14deg);
	}
	20% {
		transform: rotate(-8deg);
	}
	30% {
		transform: rotate(14deg);
	}
	40% {
		transform: rotate(-4deg);
	}
	50% {
		transform: rotate(10deg);
	}
	60% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(0);
	}
`;

const Homeground = styled.section`
	background-image: url(/img/home-bg.svg);
	display: flex;
	color: white;
	font-size: 2rem;
	font-family: 'Cafe24SsurroundAir';
	flex-direction: column;
	text-align:center;
	margin: 2em;
	justify-content: center;
	height: 100vh;
	margin:0;

`;

const Homesvg = styled.div`
	margin: 0 auto;
	width: 36rem;
	z-index: 100;
	object-fit: cover;
	
	
`;

const Homegreeting = styled.h5`
	font-size: 1.8rem;
	margin:0;
	//animation: ${float4} 2s ease;
	//animation-fill-mode: forwards;
`;

const Homespan = styled.span`
	font-size: 1.4rem;
	font-family: 'Cafe24SsurroundAir';
`;

const Homehand = styled.span`
	font-size: 1.4rem;
	animation: ${shake} 3s ease infinite;
	transform-origin: 70% 70%;
    	display: inline-block;
`;



