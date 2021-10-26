import React from 'react';
import Img from 'next/image';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from '../../animations';
import "tailwindcss/tailwind.css"



const Contact = () => {
	const content = {
		inform: [
			{ title: 'Mail', address: 'js.coding.place@gmail.com', index:1 },
			{ title: 'Phone', address: '010-8584-7752', index:2 }
		]
	}
	const contactIcon = {
		width: '50px',
	margin: 'auto 0'
	}
	return (
		<>
			<Contacts >
				<ContactContainer >
					<ContactTitle>
						<ContactTitleSpan><Img src="/img/nice3.svg" width={40} height={40}/>Contact</ContactTitleSpan>
						
					</ContactTitle>
					<ContactDiv className="p-10">
						
							<motion.div variants={fadeInUp} initial="initial" animate="animation">
								{content.inform.map((inform) => (
									<ContactInform key={inform.index}>
										<ContactInformH3>{inform.title}</ContactInformH3>
										<ContactInformP>{inform.address}</ContactInformP>
									</ContactInform>
								))}
								<ContactInform>
									<ContactInformH3>Github</ContactInformH3>
									<ContactGit href="https://github.com/jiseon-baek"><FontAwesomeIcon icon={faGithub}/></ContactGit>
								</ContactInform>
								<EmailButton onClick={() => window.open('mailto:js.coding.place@gmail.com')}>
									Sending Mail
								</EmailButton>
							</motion.div>
						

					</ContactDiv>
				</ContactContainer>
				
				
			</Contacts>
		</>
	)
}

const EmailButton = styled.button`
	font-family: 'Cafe24SsurroundAir';
	font-weight: bold;
	font-size:16px;
	cursor: pointer;
	border: none;
	padding: 18px;
	border-radius:20px;
	transition: all 200ms ease;
	background-color:#f0f0f0;
	&:hover {
		background: rgb(248,113,113);
background: linear-gradient(90deg, rgba(248,113,113,1) 0%, rgba(251,191,36,1) 100%);
		color:white;
		
	}
`;



const Contacts = styled.section`
	background-image: url(/img/home-bg.svg);
	
	height: 100vh;
	padding-top:9%;
	text-align: center;
	
`;

const ContactContainer = styled.div`

`;

const ContactTitle = styled.title`
	width: 70%;
	display: flex;
	margin: 0% auto;
	text-align: center;
	background-color: rgb(206, 206, 206);
	border-bottom: 1px solid #707070;
	padding:3px;
`;

const ContactTitleSpan = styled.span`
display: flex;
	justify-content: center;
	font-size: 40px;
	font-weight: bold;
	text-align: center;
	animation: fade 500ms ease-in;
	width: 40%;
	padding: 10px;
	margin: 2px auto;
	background-color: rgb(255, 255, 255);
	color: rgb(41, 41, 41);
	border-top: 1px none #707070;
    	border-right: 1px solid #fff;
    	border-bottom: 1px solid #fff;
	box-shadow: inset 0 -1px 1px 0 #707070, inset -1px 0 1px 0 #707070, inset 1px 1px 1px 0 #707070;
	`;

const ContactDiv = styled.div`
	background-color: white;
	width: 70%;
	margin: 0 auto;
	font-family: 'Cafe24SsurroundAir';
	border-style: solid;
    border-width: 1px;
    border-color: #000 #fff #000 #000;
`;

const ContactInform = styled.div`
	width:50%;
	color: rgb(34, 34, 34);
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
`;

const ContactGit = styled.a`
	color:black;
	font-size: 30px;
	transition: all 200ms ease;
	&:hover  {
		
    color:purple;
  }
`;

const ContactInformH3 = styled.h3`
font-size: 20px;
`;

const ContactInformP = styled.p`
font-size: 18px;
  &:hover {
	  color: rgb(203, 51, 76);
  }
`;

export default Contact


