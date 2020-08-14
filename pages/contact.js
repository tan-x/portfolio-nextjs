import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Modal, Button } from 'react-bootstrap';
import { FaEnvelopeOpen, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import profilePic from '/images/profile.jpg'

export default function Contact() {
	const initialEmail = { name: '', email: '', message: '' };
	const [email, setEmail] = useState(initialEmail);
	const [show, setShow] = useState({ modal: false, success: false });

	const handleEmailSend = () => {
		axios.post('/api/contact', email).then((res) => {
			if (res.data === 'success') {
				setShow({ modal: true, success: true });
			} else {
				setShow({ modal: true, success: false });
			}
		});
	};

	const handleClose = () => {
    setShow({ modal: false, success: false });
    setEmail(initialEmail);
	};

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
				<div className='scrollcontainer'>
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
								<FaEnvelopeOpen style={{ marginBottom: 6 }} /> Contact me
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
													<input
														type='text'
														id='name'
														name='name'
														className='form-control'
                            onChange={(e) => setEmail({ ...email, name: e.target.value })}
                            value={email.name}
													/>
													<label htmlFor='name' className=''>
														Your name
													</label>
												</div>
											</div>
											{/* <!--Grid column--> */}

											{/* <!--Grid column--> */}
											<div className='col-md-6'>
												<div className='md-form mb-0'>
													<input
														type='text'
														id='email'
														name='email'
														className='form-control'
														onChange={(e) => setEmail({ ...email, email: e.target.value })}
                            value={email.email}
													/>
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
														rows='4'
														className='form-control md-textarea'
														onChange={(e) => setEmail({ ...email, message: e.target.value })}
                            value={email.message}
													></textarea>
													<label htmlFor='message'>Your message</label>
												</div>
											</div>
										</div>
										{/* <!--Grid row--> */}
									</form>

									{/* <div className='text-center text-md-left' > */}
										<Button variant='primary' onClick={handleEmailSend}>Send</Button>
									{/* </div> */}
									<div className='status'></div>
								</div>
								{/* <!--Grid column--> */}

								{/* <!--Grid column--> */}
								<div className='col-xl-3 text-center flex-center'>
									<ul className='list-unstyled mb-0 details'>
										<li>
											<FaMapMarkerAlt className='fas fa-map-marker-alt fa-2x' />
											<p>Austin, TX 78745, USA</p>
										</li>

										<li>
											<FaEnvelope className='fas fa-envelope mt-4 fa-2x' />
											<p>tanx&#8203;@tannermgriffin.com</p>
										</li>
									</ul>
								</div>
								{/* <!--Grid column--> */}
							</div>
						</main>
					</div>
					<Modal show={show.modal} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Message Delivered</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Thank you for your message, {email.name.split(' ')[0]}! I will respond to you shortly.
						</Modal.Body>
						<Modal.Footer>
							<Button variant='primary' onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					<Footer />
				</div>
			</div>
		</>
	);
}
