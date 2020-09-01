import { Card } from 'react-bootstrap';
import { GrStackOverflow } from 'react-icons/gr';
import Fade from 'react-reveal/Fade';
import techArray from './util/techArray';

export default function TechCard() {
	return (
		<Card className='tech-card'>
			<Card.Body className='port-card-body'>
				<div className='tech-card-cont'>
					<h3>
						<GrStackOverflow /> Tech Stack
					</h3>
					<div className='tech-card-icons'>
						{techArray.map((item, index) => {
							return (
								<Fade delay={index * 200}>
									<div style={{ margin: '10px 0px' }} key={index}>
										{item.icon}
									</div>
								</Fade>
							);
						})}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
