import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const PortfolioCard = dynamic(() => import('../../components/PortfolioCard'), {
	ssr: false,
});
import Head from '../../components/HeadData';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { FiCode } from 'react-icons/fi';
import { isMobile } from 'react-device-detect';

const portfolioItems = [
	{
		link: {
			page: '/portfolio/autoban',
			github: 'https://github.com/TheAutobanApp/Autoban',
			deploy: 'https://autobanprod.herokuapp.com/',
		},
		tech: ['react', 'nodejs', 'sequelize', 'mysql', 'css3'],
		dev: 'Full Stack',
		title: 'Autoban',
		img: '/images/autoban.PNG',
		description: 'A project management solution \n for coders',
	},
	{
		link: {
			page: '/portfolio/partytracker',
			github: 'https://github.com/tan-x/gloomhaven-party-tracker',
			deploy: 'https://ghpartytracker.herokuapp.com/',
		},
		tech: ['react', 'nodejs', 'firebase', 'css3'],
		dev: 'Full Stack',
		title: 'Party Tracker',
		img: '/images/partytracker.PNG',
		description: `Board game companion for \n Gloomhaven: Jaws of the Lion`,
	},
	{
		link: {
			page: '/portfolio/pubio',
			github: 'https://github.com/pubIO-2020/pubIO',
			deploy: 'https://expo.io/@pubio/pubIO',
		},
		tech: ['react', 'nodejs', 'firebase', 'css3'],
		dev: 'Full Stack',
		title: 'PubIO',
		img: '/images/pubio.png',
		description: `Social app for joining and \n planning pub crawls`,
	},
];

export default function Portfolio() {
	const [containermain, setContainermain] = useState('container-main flex-column');
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

	return (
		<>
			<Head/>
			<div id='background'>
				<Nav scroll={scroll} setscroll={setScroll} />
				<div className='scrollcontainer' onScroll={handleScroll}>
					<div className={containermain} id='port'>
						{/* <!-- Header --> */}
						<header className='smhead'>
							<section className='portfolio-head'>
								<div className='recentproj'>
									<h3>
										<FiCode /> Recent Projects
									</h3>
								</div>
							</section>
						</header>
						{portfolioItems.map((item, i) => (
							<PortfolioCard
								// link={item.link}
								github={item.link.github}
								deploy={item.link.deploy}
								tech={item.tech}
								dev={item.dev}
								title={item.title}
								img={item.img}
								description={item.description}
								key={i}
							/>
						))}
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
