import React from 'react';
import Img from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../animations';

import "tailwindcss/tailwind.css";


export default function Project() {

	const projects = {
		project: [
			{
				text: 'Personal Portfolio',
				description: '현재 보이는 저의 개인 포트폴리오 입니다. 순수 React.JS로 제작했었지만, SSR과 SEO를 위해 Next.js와 Typescript를 이용해 만든 뒤 Vercel로 배포하였습니다.',
				skills: '사용기술: React, Typescript, Vercel',
				link: 'https://js100-frontend-portfolio-git-master-jiseon-baek.vercel.app/',
				className: 'container_img project_one',
				codeUrl: 'https://github.com/jiseon-baek/JISUN100_portfolio',
				index: 1,
				src: '/img/pp1.png'
			},
			{
				text: '🎵 Music Tag App',
				description: '음악을 추천하고 공유하는 React기반 Music 웹사이트입니다. 포스팅, 회원가입 및 로그인, 상세페이지 기능이 있습니다.',
				skills: '사용기술: React + Redux, Node, Express, MongoDB',
				link: 'https://music-tag-js100.netlify.app/posts',
				className: 'container_img project_two',
				codeUrl: 'https://github.com/jiseon-baek/Music-Tag-App',
				index: 2,
				src: '/img/pp2.png'
			},
			{
				text: '달고나 게임',
				description: '10초 내에 달고나 5개를 찾아 클릭하면 성공하는 게임입니다. HTML, CSS, Javascript를 처음 배우며 만든 기초 게임입니다. ',
				skills: '사용기술: HTML, CSS, JavaScript',
				link: 'https://jiseon-baek.github.io/DALGONA-game-with-JS/',
				className: 'container_img project_three',
				codeUrl: 'https://github.com/jiseon-baek/DALGONA-game-with-JS',
				index: 3,
				src: '/img/pp4.png'
			},
			{
				text: '프랜차이즈 홈페이지',
				description: '지인의 부탁으로 3개의 프랜차이즈 홈페이지를 그누보드를 이용해 만들었습니다. 실제 서비스가 이뤄지는 홈페이지를 만드는 게 처음이었지만, php와 jquery의 기본에 대해 학습할 수 있었고 생소한 그누보드와 ftp tool을 접해보았던 좋은 기회였습니다. 다음은 3개의 홈페이지 중 대표 1개입니다. ',
				skills: '사용기술: PHP, Jquery, 그누보드(tool)',
				link: 'http://www.makridan.co.kr',
				className: 'container_img project_four',
				codeUrl: '#',
				index: 4,
				src: '/img/pp3.png'
			},
		]
	}
	return (
		<>
			<Projects>
				<ProjectTop>
					<Span><Img src="/img/nice3.svg" width={40} height={40} />Projects</Span>
				</ProjectTop>


				<ContainerTop>
					<ContainerTopTextArea defaultValue='☺︎ Let Me Show You My Projects' className="font-mono" />
					<Nice><Img src="/img/nice1.svg" width={20} height={20}></Img>
						<Img src="/img/nice2.svg" width={20} height={20}></Img></Nice>
				</ContainerTop>
				<Container>
					<motion.div variants={stagger} initial="initial" animate="animation" className="grid justify-center lg:grid-cols-2">
						{projects.project.map((project) => (
							<motion.div variants={fadeInUp} key={project.index} >
								<ContainerDiv >
									<h4>{project.text}</h4>
									<DivDescription>{project.description}</DivDescription>
									<p className="p-2 bg-white rounded-full">{project.skills}</p>
									<p><ProjectLink href={project.codeUrl}>Code: Github</ProjectLink></p>
									<a href={project.link} target="_blank" rel="noopener noreferrer"><Img src={project.src} title="링크로 이동하기" width={500} height={280} className="p-3" ></Img></a>

								</ContainerDiv>
							</motion.div>
						))}


					</motion.div>

				</Container>


			</Projects>
		</>


	)
}

const Nice = styled.div`
	width: 20%;
	position: relative;
	margin-left:87%;
	margin-top:-4%;
`;

const Projects = styled.section`
	background-image: url(/img/home-bg.svg);
	width: 100%;
	color: white;
	text-align: center;
	font-family: 'Lato', sans-serif;
	object-fit: cover;
	margin:0;
	padding-top: 2%;
	padding-bottom: 1%;
`;

const ProjectTop = styled.title`
	display:flex;
	width: 70%;
	text-align: center;
	font-weight: bold;
	margin: 0% auto;
	background-color: rgb(206, 206, 206);
	border-bottom: 1px solid #707070;
	padding:3px;
`;

const Span = styled.span`
	display: flex;
	justify-content: center;
	font-size: 2.4rem;
	font-weight: bold;
	animation: fade 500ms ease-in;
	width: 40%;
	padding: 13px;
	margin: 2px auto;
	background-color: rgb(255, 255, 255);
	color: rgb(41, 41, 41);
	border-top: 1px none #707070;
    	border-right: 1px solid #fff;
    	border-bottom: 1px solid #fff;
	box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
`;

const ContainerTop = styled.div`
	width: 80%;
	height: 60px;
	margin: 3% auto 0 auto;
	background-color: rgb(181, 181, 181);
	border-bottom: 1px solid #707070;
`;

const ContainerTopTextArea = styled.textarea`
	width: 80%;
	height: 40px;
	line-height: 40px;
	padding: 0 10px;
	align-items: center;
	margin-top: 10px;
	font-size: 16px;
	resize: none;
	color: #181818;
    border-top: 1px none #707070;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: #fff;
    box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
`;

const Container = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 auto;
	font-family: 'Cafe24SsurroundAir';
	background-color: white;
	border-top: 1px none #707070;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: #fff;
    box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
`;

const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 89%;
	margin: 30px auto;
	padding:10px;
	background-color:white;
	color: rgb(28, 28, 28);
	border-style: solid;
    border-width: 1px;
    border-color: #b4b4b4 #000 #000 #fff;
    background-color: #c9c9c9;
    box-shadow: inset 0 1px 1px 0 #fff, inset -1px 0 1px 0 #656565;
    transition: all 200ms ease;
    &:hover {
	transform: scale(1.02);
	color: rgb(222, 60, 87);
    }
    h4 {
	    font-size: 1.5rem;
	    padding: 18px;
    }
    p { 
	    margin: 12px;
    }
`;

const DivDescription = styled.p`

background-color: white;
    padding: 10px;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
    border-top: 1px none #707070;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: #fff;
    box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
    `;

const ProjectLink = styled.a`
	text-decoration: none;
	color: rgb(33, 33, 33);
	border-bottom: 1px solid black;
	&:hover {
		color:   rgb(34, 96, 255);
	border-bottom: 1px solid  rgb(34, 96, 255);
	}
`;

