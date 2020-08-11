// import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import firebase from '../assets/images/icons8-firebase.svg';
import Slide from 'react-reveal/Slide';

// import styles from './PortfolioCard.module.css'

export default function PortfolioCard(props) {
	//   const [navState, setNavState] = useState(false);
	//   const route = useRouter().route;
	//   console.log(route);

	const techArray = [
		{ type: 'react', icon: <FaReact className='tech-icon' color='#48d8ff' /> },
		{ type: 'nodejs', icon: <FaNodeJs className='tech-icon' color='#659a60' /> },
		{ type: 'mysql', icon: <GrMysql className='tech-icon' color='#1a5c87' /> },
		{ type: 'js', icon: <DiJavascript className='tech-icon' /> },
		{ type: 'css3', icon: <DiCss3 className='tech-icon' color='#3299f8' /> },
		{ type: 'firebase', icon: <img src={firebase} className='tech-icon' id='firebase' /> },
	];

	return (
		<Slide left={props.left} right={props.right} duration={props.right ? 900 : 500} cascade>
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
						// backgroundColor: 'rgba(250, 230, 230, .6)',
						minHeight: 'fit-content',
						borderRadius: '5px',
						color: 'black',
						padding: 0,
					}}
				>
					{/* <Card.Title>{props.title}</Card.Title> */}
					{/* <Card.Text>
            {props.title}
            
          </Card.Text> */}
					{/* <Card.Text style={{fontSize: '2.2vw'}}>
          {props.subtitle}
          </Card.Text> */}
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
									{props.description.split('\n').map((i) => {
										return <p className='port-description'>{i}</p>;
									})}
							</div>

							<div>
								<p className='port-role'>{props.dev} Development</p>
								<p className='port-role'>UI/UX Design</p>
							</div>
							<div
								style={{
									// background: 'linear-gradient(45deg, rgba(0, 146, 204, 0.1), rgba(229, 57, 53, 0.1))',
									padding: '5px',
									// width: '50%',
									display: 'flex',
									// justifyContent: 'center',
									minWidth: 'fit-content',
									minHeight: 'fit-content',
									// position: 'absolute',
									// left: 50,
									// top: 35,
								}}
							>
								{props.tech &&
									props.tech.map((item) => {
										const foundIndex = techArray.findIndex((el) => el.type === item);
										if (foundIndex >= 0) {
											return techArray[foundIndex].icon;
										}
									})}
							</div>
						</div>
						<img
							style={{
								width: '60%',
								position: 'absolute',
								right: '-10%',
								borderRadius: '10px',
								boxShadow: '-2px 5px 5px lightgray',
							}}
							src={props.img}
						/>
					</div>

					<Card.Text
						style={{ fontSize: 'calc(12px + .5vw)', display: 'flex', alignItems: 'center' }}
					>
						{/* <FaGithub className='tech-icon'/> Github
          - Link */}
					</Card.Text>
				</Card.Body>
			</Card>
		</Slide>
	);
}
