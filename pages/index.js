import Head from 'next/head';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Link from 'next/link'
import Nav from '../components/Nav';
import { FaUserCircle, FaBookOpen, FaHandshake } from 'react-icons/fa';
// import profilePic from '../assets/images/profile.jpg';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
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
          crossorigin='anonymous'
        />
        <link
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
        <title>Tanner M. Griffin</title>
      </Head>
      <Nav />

      <main className='container-main flex-column' id='index'>
        {/* <!-- Header --> */}
        <header className='masthead'>
          <Flip top cascade>
            <img
              className='profile-img'
              src='/images/profile.jpg'
              alt='Profile Picture'
            />

            <section className='intro-text'>
              <h1>
                <span className='boxitem2 rounded' id='name'>
                  Tanner M. Griffin
                </span>
              </h1>
              <div className='border-top'></div>

              <h3>
                <span className='boxitem2 rounded' id='dev'>
                  Full Stack Developer
                </span>
              </h3>
            </section>
          </Flip>
        </header>
        <div className='container flex-column'>
          <Slide bottom>
            <div className='row justify-content-xl-center'>
              {/* <!-- Main/About --> */}
              <Slide bottom>
                <section
                  className='content-main flex-column boxitem rounded col-xl justify-content-xl-around'
                  id='about'
                >
                  <header>
                    <h3>
                      <FaUserCircle /> About
                    </h3>
                  </header>
                  <p>
                    Tanner Griffin is a Full Stack Web Developer with years of
                    experience managing a team and delivering financial services
                    to business clients. His background in audio engineering,
                    electronics, financial operations, and management all lend
                    to his ability to manage large projects and provide a
                    quality product to the customer.
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
                <section
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque mollis varius mauris pharetra euismod. Donec id
                    congue dui.
                  </p>
                  <h4>UI/UX Design</h4>
                  <p>
                    Donec pharetra, lorem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer id tempus nisi. In vel
                    metus diam.
                  </p>
                </section>
              </Slide>
            </div>

            <div className='row justify-content-xl-center'>
              {/* <!-- Portfolio Intro --> */}
              <section
                className='content-main flex-column boxitem rounded col-xl justify-content-xl-around'
                id='portfolioBtm'
              >
                <header>
                  <h3>
                    <FaBookOpen /> Portfolio
                  </h3>
                </header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas porta elementum tempus. Sed non ligula dignissim,
                  sollicitudin orci eget, luctus ex.
                </p>
                <form method='get' action='/portfolio'>
                  <button className='btn btn-primary'>Click Here</button>
                </form>
              </section>
            </div>
          </Slide>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
