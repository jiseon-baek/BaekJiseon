import React from 'react';

import styled from 'styled-components'



const Contact = () => {
	const content = {
		inform: [
			{ title: 'Mail', address: 'js.coding.place@gmail.com' },
			{ title: 'Phone', address: '010-8584-7752' }
		]
	}
	const contactIcon = {
		width: '40px',
	margin: 'auto 0'
	}
	return (
		<>
			<Contacts>
				<div className="contact_container">
					<ContactTitle>
						<ContactTitleSpan><img src="http://niceghostclub.com/web/upload/search.png" style={contactIcon}></img>Contact</ContactTitleSpan>
						
					</ContactTitle>
					<ContactDiv>
						{content.inform.map((inform) => (
							<ContactInform>
								<ContactInformH3>{inform.title}</ContactInformH3>
								<ContactInformP>{inform.address}</ContactInformP>
							</ContactInform>
						))}
						<ContactInform>
							<ContactInformH3>Github</ContactInformH3>
							<ContactGit href="https://github.com/jiseon-baek">Github</ContactGit>
						</ContactInform>
						

					</ContactDiv>
				</div>
				
				
			</Contacts>
		</>
	)
}



const Contacts = styled.section`
	background-image: url(/img/home-bg.svg);
	font-family: 'Cafe24SsurroundAir';
	height: 100vh;
	padding-top:9%;
	text-align: center;
`;

const ContactTitle = styled.div`
	width: 70%;
	display: flex;
	margin: 0% auto;
	text-align: center;
	background-color: rgb(206, 206, 206);
	border-bottom: 1px solid #707070;
	padding:3px;
`;

const ContactTitleSpan = styled.span`
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
	padding: 13px;
	border-style: solid;
    border-width: 1px;
    border-color: #000 #fff #000 #000;
`;

const ContactInform = styled.div`
width:50%;
	color: rgb(34, 34, 34);
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
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


