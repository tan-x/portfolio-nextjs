// import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import firebase from '../assets/images/icons8-firebase.svg';
import sequelize from '../assets/images/sequelize.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

// import styles from './PortfolioCard.module.css'

export default function PortfolioCard(props) {
	//   const [navState, setNavState] = useState(false);
	//   const route = useRouter().route;
	//   console.log(route);
	const [hover, setHover] = useState({ right: '-10%', filter: 'opacity(80%)' });

	const techArray = [
		{ type: 'react', icon: <FaReact className='tech-icon' color='#48d8ff' /> },
		{ type: 'nodejs', icon: <FaNodeJs className='tech-icon' color='#659a60' /> },
		{ type: 'mysql', icon: <GrMysql className='tech-icon' color='#1a5c87' /> },
		{ type: 'js', icon: <DiJavascript className='tech-icon' /> },
		{ type: 'css3', icon: <DiCss3 className='tech-icon' color='#3299f8' id='css' /> },
		{ type: 'firebase', icon: <img src={firebase} className='tech-icon' id='firebase' /> },
		{ type: 'sequelize', icon: <img src={sequelize} className='tech-icon' id='firebase' /> },
	];

	return (
		<Fade left={props.left} right={props.right} duration={props.right ? 900 : 500} cascade>
      <Link href="/">
			<Card
				style={{
					width: '80vw',
					maxWidth: '850px',
					height: '100%',
					margin: '15px',
					borderRadius: '7px',
					boxShadow: '2px 4px 20px rgba(0, 0, 0, 0.3)',
					border: 0,
				}}
			>
				<Card.Body
					style={{
						minHeight: 'fit-content',
						borderRadius: '5px',
						color: 'black',
						padding: 0,
					}}
				>
					<div
						style={{
							position: 'relative',
							height: '40vw',
							minHeight: 'fit-content',
							maxHeight: '300px',
							width: '100%',
							overflow: 'hidden',
							display: 'flex',
							alignItems: 'center',
							margin: '5vh 0',
						}}
					>
						<div
							style={{
								height: '100%',
								width: '50%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-around',
								padding: '20px',
							}}
						>
							<div>
								<h2 style={{ margin: '0 9px 5px' }}>{props.title}</h2>
								{props.description.split('\n').map((i, index) => {
									return (
										<p key={index} className='port-description'>
											{i}
										</p>
									);
								})}
							</div>

							<div>
								<p className='port-role'>{props.dev} Development</p>
								<p className='port-role'>UI/UX Design</p>
							</div>
							<div
								style={{
									padding: '5px',
									display: 'flex',
									minWidth: 'fit-content',
									minHeight: 'fit-content',
								}}
							>
								{props.tech &&
									props.tech.map((item, index) => {
										const foundIndex = techArray.findIndex((el) => el.type === item);
										if (foundIndex >= 0) {
											return (
                        <div key={index}>
                          {techArray[foundIndex].icon}
                        </div>
                      );
										}
									})}
							</div>
						</div>
						{/* <Slide right when={hover}> */}
						<img
							onMouseEnter={() => setHover({ right: '-7%', filter: 'opacity(100%)' })}
							onMouseLeave={() => setHover({ right: '-10%', filter: 'opacity(80%)' })}
							style={{
								width: '60%',
								position: 'absolute',
								right: hover.right,
								borderRadius: '10px',
								boxShadow: '-2px 5px 5px lightgray',
								transition: 'all .3s',
								filter: hover.filter,
							}}
							src={props.img}
						/>
						{/* </Slide> */}
					</div>
				</Card.Body>
			</Card>
      </Link>
		</Fade>
	);
}
