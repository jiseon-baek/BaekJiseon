import React from 'react';
import styled from 'styled-components';
import Img from 'next/image';
import { motion } from "framer-motion";
import { fadeInUp, stagger } from '../../animations';

import { services } from '../../data';

import ServiceCard from './ServiceCard';


export default function Aboutme() {
	
	
	
	return (
		
			<About>
				
				<AboutTop>
						<TopAndSkillsSpan><img src="http://niceghostclub.com/web/upload/5d679898f35f8975389c48e1_computer_explorer_cool.svg" style={{ width: '40px'}}/>About Me</TopAndSkillsSpan>
				</AboutTop>
				
				<AboutSkills>
					
					<DescriptionTop>
						<DescriptionTopTextArea defaultValue='☺︎ Here are Skills I can use.' className="font-mono text-black"/>
						
							<Nice><Img src="/img/nice1.svg" width={20} height={20}></Img>
							<Img src="/img/nice2.svg" width={20} height={20}></Img></Nice>
							
					</DescriptionTop>
					
					<AboutDescription>
						<div style={{display:'flex',
	justifyContent: 'center', width:'100%', fontFamily: 'Cafe24SsurroundAir'}}>
							<div className="flex-grow p-4 text-black">
								<h6 className="mt-4 mb-5 font-mono text-xl font-extrabold tracking-wide text-gray-700">Let Me Introduce Myself</h6>
								<motion.div
								 className="grid gap-6 text-black lg:grid-cols-2"
								 variants={stagger} initial="initial" animate="animation" 
								 >
								{services.map((service) => (
									<motion.div
									 className="bg-gray-200 rounded-lg lg:col-span-1"
									 variants={fadeInUp}
						
									 >
										<ServiceCard service={service} />
									</motion.div>
								))}
								</motion.div>
							</div>
						</div>
						
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
	padding-bottom: 1%;
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
	margin: 4px auto;
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
	margin: 2% auto;
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












