import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Link from 'next/link';
import Nav from '../components/Nav';
import TechCard from '../components/TechCard'
import { isMobile } from 'react-device-detect';
const PortfolioHome = dynamic(() => import('../components/PortfolioHome'), {
  ssr: false,
});
import { FaUserCircle, FaBookOpen, FaHandshake } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import profilePic from '../assets/images/profile.jpg';
import Footer from '../components/Footer';

export default function Home() {
  const [containermain, setContainermain] = useState('container-main flex-column');
  const [scroll, setScroll] = useState(false);
  const [header, setHeader] = useState(-120)

  useEffect(() => {
    console.log(isMobile);
    if (isMobile) {
      setContainermain('container-main flex-column ios');
	}
	setHeader(30)
  }, []);

  const handleScroll = () => {
	  if (!scroll) {
		  setScroll(true);
	  }
	  if (Nav.navState) {
	  }
  }

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta property='og:title' content='Tanner Griffin - Web Developer' />
        <meta
          property='og:image'
          content='https://tan-x.github.io/assets/images/screenshot2.PNG'
        />
        <meta
          property='og:description'
          content='Tanner Griffin is a Full Stack Web Developer with years of experience managing a team and delivering financial services to business clients. His background in audio engineering, electronics, financial operations, and management all lend to his ability to manage large projects and provide a quality product to the customer.'
        />
        <meta
          property='og:url'
          content='https://tan-x.github.io/assets/images/screenshot2.PNG'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://tan-x.github.io/'
        />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
          integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
          crossOrigin='anonymous'
        />
        <link
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
        <script type='text/javascript' src='/static/inobounce.js'></script>
        <title>Tanner M. Griffin</title>
      </Head>
      <div id='background'>
        <Nav scroll={scroll} setscroll={setScroll}/>
        <div className='scrollcontainer' onScroll={handleScroll}>
          <main className={containermain} id='index'>
            {/* <!-- Header --> */}
            <header className='masthead'>
				<div className='mastheadback' style={{top: header}}/>
              {/* <Flip top cascade> */}
              <Slide top duration={2000}>
                <img
                  className='profile-img'
                  src='/images/profile.jpg'
                  alt='Profile Picture'
                />
              </Slide>
              <section className='intro-text'>
                <h1>
                  <Flip left cascade>
                    <span className='boxitem2 rounded' id='name'>
                      Tanner M. Griffin
                    </span>
                  </Flip>
                </h1>
                {/* <div className='border-top'></div> */}

                <h3>
                  <Flip left cascade>
                    <span className='boxitem2 rounded' id='dev'>
                      Full Stack Developer
                    </span>
                  </Flip>
                </h3>
              </section>
              {/* </Flip> */}
            </header>
            <div className='container flex-column'>
              <Fade>
                <div className='row justify-content-xl-center'>
                  {/* <!-- Main/About --> */}
                  <Fade>
                    <section
                      className='content-main flex-column boxitem rounded col-xl justify-content-xl-around'
                      id='about'
                    >
                      <header>
                        <h3>
                          <BsFillPersonLinesFill
                            style={{ margin: '0 0 3px' }}
                          />{' '}
                          About
                        </h3>
                      </header>
                      <p>
                        I am a <b>Full Stack Web Developer</b> based in{' '}
                        <b>Austin, TX</b> with years of experience managing a
                        team and delivering financial services to business
                        clients. My background in coding, audio engineering,
                        electronics, and management all lend to my ability to
                        conduct large projects and provide a quality product to
                        the customer.
                      </p>
                      <a
                        className='btn btn-primary'
                        href='/TGriffin_resume.pdf'
                        target='_blank'
                      >
                        Resume
                      </a>
                    </section>



                    {/* <!-- Services  --> */}
                    {/* <section
											className='content-main flex-column boxitem rounded col-xl justify-content-xl-around'
											id='services'
										>
											<header>
												<h3>
													<FaHandshake /> Services
												</h3>
											</header>
											<h4>Front End Development</h4>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis
												varius mauris pharetra euismod. Donec id congue dui.
											</p>
											<h4>UI/UX Design</h4>
											<p>
												Donec pharetra, lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Integer id tempus nisi. In vel metus diam.
											</p>
										</section> */}
                  </Fade>
                </div>

				<TechCard />
                <div className='row justify-content-xl-center'>

                  {/* <!-- Portfolio Intro --> */}
                  {/* <section
									className='content-main flex-column boxitem rounded col-xl justify-content-xl-around'
									id='portfolioBtm'
								>
									<header>
										<h3>
											<FaBookOpen /> Portfolio
										</h3>
									</header>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta
										elementum tempus. Sed non ligula dignissim, sollicitudin orci eget, luctus ex.
									</p>
									<form method='get' action='/portfolio'>
										<button className='btn btn-primary'>Click Here</button>
									</form>
								</section> */}
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
