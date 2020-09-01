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
import portfolioItems from '../../components/util/portfolioItems';

export default function Portfolio() {
	const [containermain, setContainermain] = useState('container-main flex-column');
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
			<Head />
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
