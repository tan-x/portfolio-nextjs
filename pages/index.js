import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Head from '../components/HeadData';
import Nav from '../components/Nav';
import AboutCard from '../components/AboutCard';
import TechCard from '../components/TechCard';
import { isMobile } from 'react-device-detect';
const PortfolioHome = dynamic(() => import('../components/PortfolioHome'), {
	ssr: false,
});
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Footer from '../components/Footer';

export default function Home() {
	const [containermain, setContainermain] = useState('container-main flex-column');
	const [scroll, setScroll] = useState(false);
	const [header, setHeader] = useState(-120);

	useEffect(() => {
		console.log(isMobile);
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
						{/* <!-- Header --> */}
						<header className='masthead'>
							<div className='mastheadback' style={{ top: header }} />
							<Slide top duration={2000}>
								<img className='profile-img' src='/images/profile.jpg' alt='Profile Picture' />
							</Slide>
							<section className='intro-text'>
								<h1>
									<Flip left cascade>
										<span className='boxitem2 rounded' id='name'>
											Tanner M. Griffin
										</span>
									</Flip>
								</h1>
								<h3>
									<Flip left cascade>
										<span className='boxitem2 rounded' id='dev'>
											Full Stack Developer
										</span>
									</Flip>
								</h3>
							</section>
						</header>
						<div className='container flex-column'>
							<Fade>
								<div className='row justify-content-xl-center'>
									<AboutCard />
								</div>
								<TechCard />
								<div className='row justify-content-xl-center'>
									<PortfolioHome
										link='/portfolio'
										left={true}
										tech={[]}
										dev='Full Stack'
										title='Portfolio'
										img={'/images/autoban.PNG'}
										description={
											'Projects demonstrating my experience in JS, HTML5 and CSS3 and modern libraries like React, Next.js, and Express.js'
										}
									/>
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
