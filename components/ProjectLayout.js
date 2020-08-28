import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const PortfolioCard = dynamic(() => import('./PortfolioCard'), {
	ssr: false,
});
import Nav from './Nav';
import Footer from './Footer';
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
		console.log(isMobile);
		if (isMobile) {
			setContainermain('container-main flex-column ios');
		}
	}, []);

	const handleScroll = () => {
		if (!scroll) {
			setScroll(true);
		}
	};

	// const techArray = [
	// 	{
	// 		type: 'js',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='js-icon'>Javascript</Tooltip>}>
	// 				<DiJavascript1 className='tech-icon' size={35} color='f7e017' />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'css3',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='css-icon'>CSS3</Tooltip>}>
	// 				<DiCss3 className='tech-icon' color='#3299f8' id='css' size={35} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'react',
	// 		icon: (
	// 			<>
	// 				<OverlayTrigger placement='bottom' overlay={<Tooltip id='react-icon'>React</Tooltip>}>
	// 					<FaReact className='tech-icon' color='#48d8ff' size={35} />
	// 				</OverlayTrigger>
	// 			</>
	// 		),
	// 	},
	// 	{
	// 		type: 'nextjs',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='react-icon'>Next.js</Tooltip>}>
	// 				<img src={nextjs} className='tech-icon' style={{ height: '35px' }} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'nodejs',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='node-icon'>Node.js</Tooltip>}>
	// 				<FaNodeJs className='tech-icon' color='#659a60' size={35} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'expressjs',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='react-icon'>Express.js</Tooltip>}>
	// 				<img src={expressjs} className='tech-icon' style={{ height: '25px', marginTop: '5px' }} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'firebase',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='firebase-icon'>Firebase</Tooltip>}>
	// 				<img src={firebase} className='tech-icon' id='firebase' style={{ width: '35px' }} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'sequelize',
	// 		icon: (
	// 			<OverlayTrigger
	// 				placement='bottom'
	// 				overlay={<Tooltip id='sequelize-icon'>Sequelize</Tooltip>}
	// 			>
	// 				<img src={sequelize} className='tech-icon' id='firebase' style={{ width: '35px' }} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'mysql',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='mysql-icon'>MySQL</Tooltip>}>
	// 				<GrMysql className='tech-icon' color='#1a5c87' id='mysql' size={35} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// 	{
	// 		type: 'mongo',
	// 		icon: (
	// 			<OverlayTrigger placement='bottom' overlay={<Tooltip id='mongo-icon'>Mongo</Tooltip>}>
	// 				<DiMongodb className='tech-icon' color='#6cac48' id='mongo' size={35} />
	// 			</OverlayTrigger>
	// 		),
	// 	},
	// ];

	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
					integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
					crossorigin='anonymous'
				/>
				<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
				<script type='text/javascript' src='/static/inobounce.js'></script>
				<title>Tanner M. Griffin</title>
			</Head>

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
