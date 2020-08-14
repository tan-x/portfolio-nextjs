import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaEnvelopeOpen, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import profilePic from '/images/profile.jpg'

export default function Contact() {
  const [email, setEmail] = useState({name: '', email: '', message: ''});
  
  const handleEmailSend = () => {
    axios.post('/api/contact', email).then(res => console.log(res))
  }
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<meta property='og:title' content='Tanner Griffin - Web Developer' />
				<meta property='og:image' content='https://tan-x.github.io/assets/images/screenshot2.PNG' />
				<meta
					property='og:description'
					content='Tanner Griffin is a Full Stack Web Developer with years of experience managing a team and delivering financial services to business clients. His background in audio engineering, electronics, financial operations, and management all lend to his ability to manage large projects and provide a quality product to the customer.'
				/>
				<meta property='og:url' content='https://tan-x.github.io/assets/images/screenshot2.PNG' />
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
					integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
					crossorigin='anonymous'
				/>
				<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
				<title>Tanner M. Griffin</title>
			</Head>

			<div id='background'>
				<Nav />
				<div
					style={{
						width: '100%',
						minHeight: 'fit-content',
						height: 'calc(100vh - 61px)',
						position: 'relative',
						top: 0,
						overflow: 'auto',
						paddingTop: 30,
					}}
				>
					<div className='container-main flex-column' id='port'>
						{/* <!-- Header --> */}
						{/* <header className='smhead3'>
              <section>
                <img
                  className='profile-img profile-img-sm'
                  src='/images/profile.jpg'
                  alt='Profile Picture'
                />
                <h3 className='contact-head'>Tanner M. Griffin</h3>
              </section>
            </header> */}

						{/* <!-- Contact form --> */}
						<main className='content-contact boxitem rounded'>
							{/* <!--Section heading--> */}
							<h3 className='text-center my-4'>
								<FaEnvelopeOpen style={{ marginBottom: 10 }} /> Contact me
							</h3>
							{/* <!--Section description--> */}
							{/* <p className='text-center mx-auto mb-5'>
						Do you have any questions? Please do not hesitate to contact me directly. I will come
						back to you within a matter of hours to help you.
					</p> */}

							<div className='row'>
								{/* <!--Grid column--> */}
								<div className='col-xl-9 mb-md-0 mb-5'>
									<form id='contact-form' name='contact-form' action='#' method='POST'>
										{/* <!--Grid row--> */}
										<div className='row'>
											{/* <!--Grid column--> */}
											<div className='col-md-6'>
												<div className='md-form mb-0'>
													<input type='text' id='name' name='name' className='form-control' onChange={(e) => setEmail({...email, name: e.target.value})}/>
													<label htmlFor='name' className=''>
														Your name
													</label>
												</div>
											</div>
											{/* <!--Grid column--> */}

											{/* <!--Grid column--> */}
											<div className='col-md-6'>
												<div className='md-form mb-0'>
													<input type='text' id='email' name='email' className='form-control' onChange={(e) => setEmail({...email, email: e.target.value})}/>
													<label htmlFor='email' className=''>
														Your email
													</label>
												</div>
											</div>
											{/* <!--Grid column--> */}
										</div>
										{/* <!--Grid row--> */}

										{/* <!--Grid row--> */}
										{/* <div className='row'>
											<div className='col-md-12'>
												<div className='md-form mb-0'>
													<input type='text' id='subject' name='subject' className='form-control' onChange={(e) => setEmail({...email, subject: e.target.value})}/>
													<label htmlFor='subject' className=''>
														Subject
													</label>
												</div>
											</div>
										</div> */}
										{/* <!--Grid row--> */}

										{/* <!--Grid row--> */}
										<div className='row'>
											{/* <!--Grid column--> */}
											<div className='col-md-12'>
												<div className='md-form'>
													<textarea
														id='message'
														name='message'
														rows='2'
                            className='form-control md-textarea'
                            onChange={(e) => setEmail({...email, message: e.target.value})}
													></textarea>
													<label htmlFor='message'>Your message</label>
												</div>
											</div>
										</div>
										{/* <!--Grid row--> */}
									</form>

									<div className='text-center text-md-left' onClick={handleEmailSend}>
										<a className='btn btn-primary'>Send</a>
									</div>
									<div className='status'></div>
								</div>
								{/* <!--Grid column--> */}

								{/* <!--Grid column--> */}
								<div className='col-xl-3 text-center'>
									<ul className='list-unstyled mb-0'>
										<li>
											<FaMapMarkerAlt className='fas fa-map-marker-alt fa-2x' />
											<p>Austin, TX 78745, USA</p>
										</li>

										<li>
											<FaEnvelope className='fas fa-envelope mt-4 fa-2x' />
											<p>tannerm&#8203;griffin&#8203;@gmail.com</p>
										</li>
									</ul>
								</div>
								{/* <!--Grid column--> */}
							</div>
						</main>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
