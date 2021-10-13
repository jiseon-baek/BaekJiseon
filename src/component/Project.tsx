import React from 'react';
import Img from 'next/image';
import styled from 'styled-components';

export default function Project() {
	

	const projects = {
		project: [
			{ text: 'Personal Portfolio' ,
        description: '현재 보이는 저의 개인 포트폴리오 입니다. 순수 React.JS로 제작해 Hooks, Router, Redux 등에 대해 자세히 학습할 수 있었습니다.', 
        skills: '사용기술: React, NodeJS',
        link: 'https://jiseon-baek.github.io/Js-s-SpacE/',
        className: 'container_img project_one',
        codeUrl: 'https://github.com/jiseon-baek/Personal-Portfolio'
        },
			{ text: '🎵 Music Tag App' ,
        description: '음악을 추천하고 공유하는 React기반 Music 웹사이트입니다. CRUD 기능과 회원가입 및 로그인, 상세페이지 기능 등이 있습니다.', 
        skills: '사용기술: React + Redux, Node, Express, MongoDB',
        link: 'https://music-tag-js100.netlify.app/posts',
        className: 'container_img project_two',
        codeUrl: 'https://github.com/jiseon-baek/Music-Tag-App'
        },	
	{ text: '프랜차이즈 홈페이지' , 
        description: '지인의 프랜차이즈 홈페이지를 그누보드를 이용해 만들어주었습니다. 실제 서비스가 이뤄지는 홈페이지를 만드는 게 처음이었지만, php와 jquery의 기본에 대해 학습할 수 있었고 생소한 그누보드를 접해보았던 좋은 기회였습니다.', 
        skills: '사용기술: PHP, Jquery, 그누보드(tool)',
        link: 'http://www.makridan.co.kr',
        className: 'container_img project_four',
        }
		]
	}
	return (
    <>
		<Projects>
				<ProjectTop data-aos="fade-down">
					<Span><img src="http://niceghostclub.com/web/upload/5d679898f35f8975389c48e1_computer_explorer_cool.svg" style={{ width: '40px'}}></img>Projects</Span>
				</ProjectTop>

				<div data-aos="fade-up">
				<ContainerTop>
					<ContainerTopTextArea defaultValue='☺︎ Let Me Show You My Projects'/>
					<Nice><Img src="/img/nice1.svg" width={20} height={20}></Img>
						<Img src="/img/nice2.svg" width={20} height={20}></Img></Nice>
				</ContainerTop>
				<Container>

					{projects.project.map((project)=> (
					<ContainerDiv>
						<h4>{project.text}</h4>
						<DivDescription>{project.description}</DivDescription>
						<p>{project.skills}</p>
						<p><ProjectLink href={project.codeUrl}>Github</ProjectLink></p>
						<a href={project.link}><ContainerImg className={project.className}></ContainerImg></a>
						
					</ContainerDiv>
					))}
				</Container>
				</div>
				
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
	padding-top: 10%;
	padding-bottom: 2%;
`;

const ProjectTop = styled.div`
	display:flex;
	width: 70%;
	text-align: center;
	margin: 5% auto;
	background-color: rgb(206, 206, 206);
	border-bottom: 1px solid #707070;
	padding:3px;
`;

const Span = styled.span`
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
	width: 42%;
	margin: 20px;
	padding:10px;
	background-color:white;
	color: rgb(28, 28, 28);
	border-style: solid;
    border-width: 1px;
    border-color: #b4b4b4 #000 #000 #fff;
    background-color: #c9c9c9;
    box-shadow: inset 0 1px 1px 0 #fff, inset -1px 0 1px 0 #656565;
    transition: all 200ms ease;
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
`;

const ContainerImg = styled.div`
	cursor: pointer;
	padding: 3px 4.6px 4.1px 4.1px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	height: 250px;
    border-top: 1px solid #707070;
    border-right: 1px solid #fff;
    border-left: 1px solid #707070;
    background-color: #6f6f6f;
    box-shadow: inset -1px 0 1px 0 #b4b4b4, inset 0 -1px 1px 0 #000, inset 1px 1px 1px 0 #000;
`;