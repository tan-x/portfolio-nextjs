// import React from 'react';
import { FaGithub, FaLinkedin, FaSoundcloud } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='footer flex-center mt-auto'>
			<a href='https://github.com/tan-x/' target='_blank'>
				<FaGithub/>
			</a>
			<a href='https://www.linkedin.com/in/tannermgriffin/' target='_blank'>
				<FaLinkedin/>
			</a>
			<a href='https://soundcloud.com/tangence' target='_blank'>
				<FaSoundcloud/>
			</a>
		</footer>
	);
}
