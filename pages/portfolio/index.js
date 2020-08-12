import Head from 'next/head';
import dynamic from 'next/dynamic'
const PortfolioCard = dynamic(
  () => import('../../components/PortfolioCard'),
  { ssr: false },
)
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
// import PortfolioCard from '../../components/PortfolioCard';
import { FaBookOpen } from 'react-icons/fa';
// import profilePic from '../../assets/images/profile.jpg';
// import autoban from '../../assets/images/autoban.png'
// import partytracker from '../../assets/images/partytracker.png'
// import pubio from '../../assets/images/pubio.png'

export default function Portfolio() {
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
						<img className='profile-img profile-img-sm' src='/images/profile.jpg' alt='Profile Picture' />
						<h3 className='portfolio-head'>Recent Work</h3>
						{/* <div className='border-top'></div> */}
					</section>
				</header>

				<PortfolioCard
					left={true}
					tech={['react', 'nodejs', 'sequelize', 'mysql', 'mongo', 'css3']}
					dev='Full Stack'
					title='Autoban'
					img={'/images/autoban.PNG'}
					description={"A project management solution \n for coders"}
				/>
				<PortfolioCard
					right={true}
					tech={['react', 'nodejs', 'firebase', 'css3']}
					dev='Full Stack'
					title='Party Tracker'
					subtitle='Gloomhaven: Jaws of the Lion'
					img={'/images/partytracker.PNG'}
					description={`Board game companion for \n Gloomhaven: Jaws of the Lion`}
				/>
				<PortfolioCard
					left={true}
					tech={['react', 'nodejs', 'firebase', 'css3']}
					dev='Full Stack'
					title='PubIO'
					img={'/images/pubio.png'}
					description={`React Native app for planning and \n joining pub crawls`}
				/>
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
