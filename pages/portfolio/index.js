import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PortfolioCard from '../../components/PortfolioCard';
import { FaBookOpen } from 'react-icons/fa';
import profilePic from '../../assets/images/profile.jpg';

export default function Contact() {
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
				<title>Tanner M. Griffin</title>
			</Head>
			<Nav />

			<div className='container-main flex-column' id='port'>
				{/* <!-- Header --> */}
				<header className='smhead'>
					<section>
						<img className='profile-img profile-img-sm' src={profilePic} alt='Profile Picture' />
						<h3 className='portfolio-head'>Tanner M. Griffin</h3>
						{/* <div className='border-top'></div> */}
					</section>
				</header>

				<PortfolioCard
					left={true}
					tech={['react', 'nodejs', 'sequelize', 'mysql', 'css3']}
					dev='Full Stack'
					title='Autoban'
					img={require('../../assets/images/autoban.png')}
					description={"A project management solution \n for coders"}
				/>
				<PortfolioCard
					right={true}
					tech={['react', 'nodejs', 'firebase', 'css3']}
					dev='Front End'
					title='Party Tracker'
					subtitle='Gloomhaven: Jaws of the Lion'
					img={require('../../assets/images/partytracker.png')}
					description={`Board game companion for \n Gloomhaven: Jaws of the Lion`}
				/>
				<PortfolioCard
					left={true}
					tech={['react', 'nodejs', 'firebase', 'css3']}
					dev='Front End'
					title='PubIO'
					img={require('../../assets/images/pubio.png')}
					description={`React Native app for planning and \n joining pub crawls`}
				/>

				{/* <!-- Main/Portfolio --> */}
				{/* <main className="content-port flex-column boxitem rounded" id="port">
				<h3><FaBookOpen/> Portfolio</h3>
				<div className="port-container">
					<article className="port-item flex-center" id="item1" data-toggle="modal" data-target="#myModal">
						<h2>React Native App</h2>
						<img id="img1"  src={require("../assets/images/pubioHoriB.png")} alt="PubIO logo" />
					</article>
					<article className="port-item flex-center" id="item2">
						<h2>Weather<br />Dashboard</h2>
						<img id="img2" src={require("../assets/images/webSS.png")} alt="Weather Dashboard" />
					</article>
					<article className="port-item flex-center" id="item3">
						<h2>Coding<br />Quiz</h2>
						<img id="img3" src={require("../assets/images/codequiz.png")} alt="Coding quiz" />
					</article>
					<article className="port-item flex-center" id="item4">
						<h2>React Web App</h2>
						<img id="img4" src={require("../assets/images/orgmobfull.png")} alt="Organize Moblize and fist"/>
					</article>
					<article className="port-item flex-center" id="item5">
						<h2>Drum<br />Kit</h2>
						<img id="img5" src={require("../assets/images/drumkit.png")} alt="Web drum kit" />
					</article>
					<article className="port-item flex-center" id="item6">
						<h2>Work Day<br />Scheduler</h2>
						<img id="img6" src={require("../assets/images/scheduler.png")} alt="Day scheduler" />
					</article>
				</div>
			</main> */}
				<div className='modal fade' id='myModal'>
					<div className='modal-dialog'>
						{/* <!-- Modal content--> */}
						<div className='modal-content'>
							<div className='modal-header'>
								<button type='button' className='close' data-dismiss='modal'>
									<i className='fa fa-close'></i>
								</button>
								<h3 className='modal-title'>Modal Header</h3>
							</div>
							<div className='modal-body'>
								<img className='modal-img' src='./assets/images/pubioHoriB.png' />
								<h6 className='modal-text'>Pub Crawl App built in React Native</h6>
							</div>
							<div className='modal-footer'>
								<a type='button' className='btn btn-default' id='repo' href='' target='_blank'>
									<i className='fab fa-github fa-lg'></i> GitHub Repo
								</a>
								<a type='button' className='btn btn-default' id='link' href='' target='_blank'>
									<i className='fa fa-external-link'></i> Link
								</a>
								{/* <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> --> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Footer --> */}
			<Footer />
		</>
	);
}