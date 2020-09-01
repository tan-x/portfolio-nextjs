import React from 'react';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

export default function renderHeader(props) {
	return (
		<header className='masthead'>
			<div className='mastheadback' style={{ top: props.header }} />
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
	);
}