import React from 'react';
import Head from 'next/head';

export default function HeadData() {
	return (
		<Head>
			<meta charSet='UTF-8' />
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
				crossOrigin='anonymous'
			/>
			<link
				href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
				rel='stylesheet'
			/>
			<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
			<script type='text/javascript' src='/static/inobounce.js'></script>
			<title>Tanner M. Griffin</title>
		</Head>
	);
}
