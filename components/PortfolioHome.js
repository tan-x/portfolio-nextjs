import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { FiCode } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
import useWidth from './hooks/useWidth';

export default function PortfolioHome(props) {
	const [hover, setHover] = useState({ right: '-10%', filter: 'opacity(80%)' });
	const [image, setImage] = useState({
		src: '/images/autoban.PNG',
		sources: ['/images/autoban.PNG', '/images/partytracker.PNG', '/images/pubio.png'],
		current: 0,
	});
	const width = useWidth();

	useEffect(() => {
		const interval = setInterval(() => {
			if (image.current < image.sources.length - 1) {
				setImage({ ...image, src: image.sources[image.current + 1], current: image.current + 1 });
			} else {
				setImage({ ...image, src: image.sources[0], current: 0 });
			}
		}, 3000);
		return () => clearInterval(interval);
	}, [image.src]);

	return (
		<>
			{width > 600 ? (
				<Link href={props.link}>
					<Card className='portfolio-card clickable'>
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
										<h2 style={{ margin: '0 9px 5px' }}>
											{props.title} <FiCode style={{ margin: '0 0 3px' }} />
										</h2>
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
										src={image.src}
									/>
								</Fade>
							</div>
						</Card.Body>
					</Card>
				</Link>
			) : (
				<Link href={props.link}>
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
										<h3 style={{ margin: '0 9px 5px' }}>
											{props.title} <FiCode style={{ margin: '0 0 3px' }} />
										</h3>
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
											src={image.src}
										/>
									</Fade>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Link>
			)}
		</>
	);
}
