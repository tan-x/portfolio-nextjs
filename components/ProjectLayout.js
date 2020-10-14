import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const PortfolioCard = dynamic(() => import('./PortfolioCard'), {
	ssr: false,
});
import Nav from './Nav';
import Footer from './Footer';
import Head from './HeadData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import { isMobile } from 'react-device-detect';
import techArray from './util/techArray';

export default function Portfolio(props) {
	const [containermain, setContainermain] = useState('container-main flex-column');
	const [hover, setHover] = useState({ right: '-10%', filter: 'opacity(100%)' });
	const [image, setImage] = useState({
		src: '/images/autoban.PNG',
		sources: ['/images/autoban.PNG', '/images/autobanhome.PNG', '/images/pubio.png'],
		current: 0,
	});
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		if (isMobile) {
			setContainermain('container-main flex-column ios');
		}
	}, []);

	const handleScroll = () => {
		if (!scroll) {
			setScroll(true);
		}
	};

	return (
		<>
			<Head/>
			<div id='background'>
				<Nav scroll={scroll} setscroll={setScroll} />
				<div className='scrollcontainer' onScroll={handleScroll}>
					<div className={containermain} id='port'>
						{/* <!-- Header --> */}
						<header className='smhead' style={{ height: 'calc(250px + 2vw)' }}>
							<section className='project-head'>
								<div className='project'>
									<h3>
										<FiCode /> {props.title}
									</h3>
								</div>
								{/* <div className="proj-role">
									<p>Full Stack Development</p>
									<p>UI/UX Design</p>
								</div> */}
								<div
									style={{
										// marginTop: '10px',
										padding: '5px',
										display: 'flex',
										minWidth: 'fit-content',
										minHeight: 'fit-content',
										margin: '10px auto 20px auto',
									}}
								>
									<p>
										A kanban board and project managment web app built with React and Express.js, using web
										sockets for real-time communication with the back end.
									</p>
								</div>
								<div
									style={{
										// marginTop: '-50px',
										// marginBottom: '50px',
										padding: '5px',
										display: 'flex',
										minWidth: 'fit-content',
										minHeight: 'fit-content',
										margin: '-20px auto 40px auto',
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
								<div className='projlinks'>
									<a
										href='https://github.com/TheAutobanApp/Autoban'
										target='_blank'
										rel='noopener noreferrer'
									>
										<p>
											GitHub
											<FaGithub style={{ margin: '0 9px 5px' }} />
										</p>
									</a>
									<a href='https://autobanprod.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
										<p>
											Deployment
											<FaExternalLinkAlt style={{ margin: '0 9px 5px' }} />
										</p>
									</a>
								</div>
							</section>
						</header>
						<img
							// onMouseEnter={() => setHover({filter: 'opacity(100%)' })}
							// onMouseLeave={() => setHover({filter: 'opacity(80%)' })}
							style={{
								margin: '40px 0 10px',
								width: '80vw',
								maxWidth: '800px',
								borderRadius: '10px',
								boxShadow: '2px 5px 10px rgba(0, 0, 0, 0.5)',
								transition: 'all .3s',
								filter: hover.filter,
							}}
							src={image.sources[1]}
						/>
						<img
							// onMouseEnter={() => setHover({filter: 'opacity(100%)' })}
							// onMouseLeave={() => setHover({filter: 'opacity(80%)' })}
							style={{
								margin: '10px 0',
								width: '80vw',
								maxWidth: '800px',
								borderRadius: '10px',
								boxShadow: '2px 5px 10px rgba(0, 0, 0, 0.5)',
								transition: 'all .3s',
								filter: hover.filter,
							}}
							src={image.sources[0]}
						/>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
