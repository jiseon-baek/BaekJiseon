import React from 'react';
import styled from 'styled-components';
import Img from 'next/image';
import { motion } from "framer-motion";
import { fadeInUp } from '../../animations'


export default function Aboutme() {
	
	
	
	return (
		
			<About>
				
				<AboutTop>
						<TopAndSkillsSpan><img src="http://niceghostclub.com/web/upload/5d679898f35f8975389c48e1_computer_explorer_cool.svg" style={{ width: '40px'}}/>About Me: Characters</TopAndSkillsSpan>
				</AboutTop>
				
				<AboutSkills>
					
					<DescriptionTop>
						<DescriptionTopTextArea defaultValue='☺︎ Here are Skills I can use.' className="font-mono text-black"/>
						
							<Nice><Img src="/img/nice1.svg" width={20} height={20}></Img>
							<Img src="/img/nice2.svg" width={20} height={20}></Img></Nice>
							
					</DescriptionTop>
					
					<AboutDescription>
						<motion.div variants={fadeInUp} initial="initial" animate="animation" style={{display:'flex',
	justifyContent: 'center', width:'100%'}}>
							Hello
						</motion.div>
						
					</AboutDescription>
					


				
					<DescriptionTop>
						<DescriptionTopTextArea defaultValue='☺︎ And other informations about me!' className="font-mono text-black"/>
							<Nice><Img src="/img/nice1.svg" width={20} height={20}></Img>
							<Img src="/img/nice2.svg" width={20} height={20}></Img></Nice>
					</DescriptionTop>
					<AboutDescription>
						<motion.div variants={fadeInUp} initial="initial" animate="animation" style={{display:'flex',
		justifyContent: 'center', width:'100%'}}>
							<Description>
								<DescriptionH3 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">Education</DescriptionH3>
								
									
									<DescriptionP style={{ fontSize: '20px' }}>
										<DescriptionSchool>
											<img src="/img/school.png" style={{width: '60px', marginRight: '5px'}}/>
											<div style={{ lineHeight: '30px'}} >
											광운대학교 국제학부<br/>2016.03~2021.02
											</div>
										</DescriptionSchool>
									</DescriptionP>
								
							</Description>
							<Description>
								<DescriptionH3 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">Certificate</DescriptionH3>
								<DescriptionP style={{ fontSize: '20px' }}>컴퓨터활용능력 1급<br/></DescriptionP>
							</Description>
						</motion.div>
					</AboutDescription>
					
				</AboutSkills>
				<AboutMe>
					<AboutMeContent>
						<h2>저는</h2>
						<div className="content_top" >
							<p><AboutMeContentSpan>도전</AboutMeContentSpan>을 즐기는 개발자</p>
							<p>끊임없이 <AboutMeContentSpan>공부</AboutMeContentSpan>하고 <AboutMeContentSpan>성장</AboutMeContentSpan>하는 개발자</p>
							<p><AboutMeContentSpan>팀워크</AboutMeContentSpan>를 중시하는 개발자</p>
						</div>
						<h2>입니다</h2>
					</AboutMeContent>
				</AboutMe>
				
				
			</About>
	)
}

const Nice = styled.div`
	width: 20%;
	position: relative;
	margin-left:87%;
	margin-top:-4%;
	
`;

const About = styled.section`
	background-image: url(/img/home-bg.svg);
	width: 100%;
	color: white;
	text-align: center;
	padding-top: 2%;
	padding-bottom: 12%;
`;
const AboutTop = styled.div`
	display:flex;
	width: 70%;
	text-align: center;
	margin: 0 auto;
	background-color: rgb(206, 206, 206);
	border-bottom: 1px solid #707070;
	padding:3px;
`;

const AboutMe = styled.div`
	font-family: 'Cafe24SsurroundAir';
	width: 80%;
	margin: 10px auto;
	background-color: rgb(194, 194, 194);
	color: rgb(34, 34, 34);
	border-bottom: 1px solid #707070;
    	padding: 10px 40px;
	border-radius:30px;
`;

const AboutMeContent = styled.div`
	background-color:white;
	display: flex;
	justify-content: space-around;
	padding: 20px 10px;
    align-items: center;
    font-size: 18px;
    border-top: 1px none #707070;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: #fff;
    box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
    h2 {
	    font-size:24px;
    }
    p { 
	    padding: 4px 0 ;
    }
`;

const AboutMeContentSpan = styled.span`
	font-size:20px;
	color: rgb(255, 124, 9);
	font-weight: bold;
`;

const TopAndSkillsSpan = styled.span`
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

const AboutSkills = styled.div`
	margin: 3% auto;
`;

const DescriptionTop = styled.div`
	width: 80%;
	height: 60px;
	margin: 2% auto 0 auto;
	background-color: rgb(181, 181, 181);
	border-bottom: 1px solid #707070;
`;

const DescriptionTopTextArea = styled.textarea`
	width: 80%;
	height: 40px;
	line-height: 40px;
	padding: 0 10px;
	align-items: center;
	margin-top: 10px;
	font-size: 16px;
    border-top: 1px none #707070;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: #fff;
    box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
    resize: none;
`;

const AboutDescription = styled.div`
	width: 80%;
	display:flex;
	justify-content: center;
	margin: 0 auto;
	flex-wrap: wrap;
	border-right: 1px solid #000;
	border-bottom: 1px solid #000;
	border-left: 1px solid #fff;
	background-color: #ffffff;
	box-shadow: inset 1px -1px 1px 0 #656565, inset -1px -1px 1px 0 #656565;
`;

const Description = styled.div`
	width: 40%;
	color: rgb(31, 31, 31);
	margin: 20px;
	font-size: 30px;
	padding: 3px;
`;

const DescriptionH3 = styled.h3`
	margin: 0 auto;
	padding: 4px 0;
	font-size: 30px;
	color:rgb(43, 43, 43);
	border-style: solid;
    	border-width: 1px;
	border-color: #fff #000 #000 #fff;
    	background-color: #d7d7d7;
    	box-shadow: inset -1px -1px 1px 0 #707070;
`;

const DescriptionP = styled.p`
	font-family: 'Cafe24SsurroundAir';
	padding:20px;
	margin-bottom: 0;
	margin-top: 12px;
	background-color: #e9e9e9;
	font-size: 24px;
	border-style: solid;
    border-width: 1px;
	border-color: #fff #000 #000 #fff;
    box-shadow: inset -1px -1px 1px 0 #707070;
    &:hover span {
	    color: rgb(203, 51, 76);
    }
`;

const DescriptionSpan = styled.span`
	font-size: 18px;
	background-color: transparent;
	border: none;
	box-shadow: none;

`;

const DescriptionSchool = styled.div`
	display: flex;
	justify-content: center;
`;

const FadeDiv = styled.div`
	margin-top: 60px;

`;







