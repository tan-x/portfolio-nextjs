import { Card } from 'react-bootstrap';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function AboutCard(props) {
	return (
		<Card className='tech-card'>
			<Card.Body className='port-card-body'>
				<div
					style={{
						height: 'fit-content',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						padding: '20px 10px',
					}}
				>
					<div>
						<h2 style={{ margin: '0 9px 5px' }}>{props.title}</h2>
					</div>

					{/* copy */}
					<section className='flex-column col-xl justify-content-xl-around' id='about'>
						<header>
							<h3>
								<BsFillPersonLinesFill style={{ margin: '0 0 3px' }} /> About
							</h3>
						</header>
						<p>
							I am a <b>Full Stack Web Developer</b> based in <b>Austin, TX</b> with years of experience
							managing a team and delivering financial services to business clients. My background in
							coding, audio engineering, electronics, and management all lend to my ability to conduct
							large projects and provide a quality product to the customer.
						</p>
						<a className='btn btn-primary' href='/TGriffin_resume.pdf' target='_blank'>
							Resume
						</a>
					</section>
				</div>
			</Card.Body>
		</Card>
	);
}
