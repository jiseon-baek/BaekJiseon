import React from 'react';
import Img from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../animations';


export default function Project() {
	
	const IMG = {
		cursor: 'pointer',
	padding: '3px 4.6px 4.1px 4.1px',
	backgroundSize: 'contain',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	
    borderTop: '1px solid #707070',
    borderRight: '1px solid #fff',
    borderLeft: '1px solid #707070',
    backgroundColor: '#6f6f6f',
    boxShadow: 'inset -1px 0 1px 0 #b4b4b4, inset 0 -1px 1px 0 #000, inset 1px 1px 1px 0 #000',
	}

	const projects = {
		project: [
			{ text: 'Personal Portfolio' ,
        description: '현재 보이는 저의 개인 포트폴리오 입니다. 순수 React.JS로 제작해 Hooks, Router, Redux 등에 대해 자세히 학습할 수 있었습니다.', 
        skills: '사용기술: React, NodeJS',
        link: 'https://jiseon-baek.github.io/Js-s-SpacE/',
        className: 'container_img project_one',
        codeUrl: 'https://github.com/jiseon-baek/Personal-Portfolio',
	index: 1,
	src: '/img/pp1.png'
        },
			{ text: '🎵 Music Tag App' ,
        description: '음악을 추천하고 공유하는 React기반 Music 웹사이트입니다. CRUD 기능과 회원가입 및 로그인, 상세페이지 기능 등이 있습니다.', 
        skills: '사용기술: React + Redux, Node, Express, MongoDB',
        link: 'https://music-tag-js100.netlify.app/posts',
        className: 'container_img project_two',
        codeUrl: 'https://github.com/jiseon-baek/Music-Tag-App',
	index: 2,
	src: '/img/pp2.png'
        }
		]
	}
	return (
    <>
		<Projects>
				<ProjectTop>
					<Span><Img src="/img/nice3.svg" width={40} height={40}/>Projects</Span>
				</ProjectTop>

				
				<ContainerTop>
					<ContainerTopTextArea defaultValue='☺︎ Let Me Show You My Projects' className="font-mono"/>
					<Nice><Img src="/img/nice1.svg" width={20} height={20}></Img>
						<Img src="/img/nice2.svg" width={20} height={20}></Img></Nice>
				</ContainerTop>
				<Container>
					<motion.div variants={stagger} initial="initial" animate="animation" className="grid justify-center lg:grid-cols-2">
					{projects.project.map((project)=> (
						<motion.div variants={fadeInUp} key={project.index} >
							<ContainerDiv >
								<h4>{project.text}</h4>
								<DivDescription>{project.description}</DivDescription>
								<p>{project.skills}</p>
								<p><ProjectLink href={project.codeUrl}>Code: Github</ProjectLink></p>
								<a href={project.link}><Img src={project.src} title="링크로 이동하기" width={500} height={300} className="p-3"></Img></a>
								
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

const ProjectTop = styled.div`
	display:flex;
	width: 70%;
	text-align: center;
	margin: 0% auto;
	background-color: rgb(206, 206, 206);
	border-bottom: 1px solid #707070;
	padding:3px;
`;

const Span = styled.span`
display: flex;
	justify-content: center;
	font-size: 38px;
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
	    font-size: 20px;
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

