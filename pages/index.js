import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Head from '../components/HeadData';
import Header from '../components/Header'
import Nav from '../components/Nav';
import AboutCard from '../components/AboutCard';
import TechCard from '../components/TechCard';
import Footer from '../components/Footer';
import { isMobile } from 'react-device-detect';
const PortfolioHome = dynamic(() => import('../components/PortfolioHome'), {
	ssr: false,
});

export default function Home() {
	const [containermain, setContainermain] = useState('container-main flex-column');
	const [scroll, setScroll] = useState(false);
	const [header, setHeader] = useState(-120);

	useEffect(() => {
		if (isMobile) {
			setContainermain('container-main flex-column ios');
		}
		setHeader(30);
	}, []);

	const handleScroll = () => {
		if (!scroll) {
			setScroll(true);
		}
		if (Nav.navState) {
		}
	};

	return (
		<>
			<Head />
			<div id='background'>
				<Nav scroll={scroll} setscroll={setScroll} />
				<div className='scrollcontainer' onScroll={handleScroll}>
					<main className={containermain} id='index'>
						<Header header={header}/>
						<div className='container flex-column'>
							<Fade>
								<div className='row justify-content-xl-center'>
									<AboutCard />
								</div>
								<TechCard />
								<div className='row justify-content-xl-center'>
									<PortfolioHome />
								</div>
							</Fade>
						</div>
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
}
