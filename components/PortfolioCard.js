import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import useWidth from './hooks/useWidth';
import techArray from './util/techArray';

export default function PortfolioCard(props) {
	const [hover, setHover] = useState({ right: '-10%', filter: 'opacity(80%)' });
	const width = useWidth();

	return (
		<>
			{width > 650 ? (
				// <Link href={props.link}>
				<Card className='portfolio-card'>
					<Card.Body className='port-card-body'>
						<div className='port-body-hidden'>
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
												return <div key={index}>{techArray[foundIndex].icon}</div>;
											}
										})}
								</div>
								<div style={{ margin: '10px 9px 0', display: 'flex', justifyContent: 'space-around' }}>
									<a href={props.github} target='_blank' rel='noopener noreferrer'>
										<p>
											<FaGithub size={28} style={{ margin: '0 4px 4px' }} /> GitHub
										</p>
									</a>
									<a href={props.deploy} target='_blank' rel='noopener noreferrer'>
										<p>
											<FaExternalLinkAlt size={24} style={{ margin: '0 4px 4px' }} /> Deployment
										</p>
									</a>
								</div>
							</div>
							<Fade right>
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
							</Fade>
						</div>
					</Card.Body>
				</Card>
			) : (
				// </Link>
				// <Link href={props.link}>
				<Card className='portfolio-card'>
					<Card.Body className='port-card-body'>
						<div className='port-body-mobile'>
							<div
								style={{
									height: '50%',
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-around',
									padding: '20px',
								}}
							>
								<div>
									<h3 style={{ margin: '0 9px 5px' }}>{props.title}</h3>
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
												return <div key={index}>{techArray[foundIndex].icon}</div>;
											}
										})}
								</div>
							</div>
							<div
								style={{
									height: 'calc(60px + 36vw)',
									width: '100%',
									overflow: 'hidden',
									position: 'relative',
								}}
							>
								<Fade right>
									<img
										style={{
											width: '100%',
											position: 'absolute',
											right: hover.right,
											borderRadius: '10px',
											boxShadow: '-2px 5px 5px lightgray',
										}}
										src={props.img}
									/>
								</Fade>
							</div>
							<div style={{ margin: '0 0 5px', display: 'flex', justifyContent: 'space-around' }}>
								<a href={props.github} target='_blank' rel='noopener noreferrer'>
									<p>
										<FaGithub size={28} style={{ margin: '0 4px 4px' }} />
										GitHub
									</p>
								</a>
								<a href={props.deploy} target='_blank' rel='noopener noreferrer'>
									<p>
										<FaExternalLinkAlt size={24} style={{ margin: '0 4px 4px' }} />
										Deployment
									</p>
								</a>
							</div>
						</div>
					</Card.Body>
				</Card>
				// </Link>
			)}
		</>
	);
}
