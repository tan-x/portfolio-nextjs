import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
    <meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta property="og:title" content="Tanner Griffin - Web Developer"/>
		<meta property="og:image" content="https://tan-x.github.io/assets/images/screenshot2.PNG"/>
		<meta property="og:description" content="Tanner Griffin is a Full Stack Web Developer with years of experience managing a team and delivering financial services to business clients. His background in audio engineering, electronics, financial operations, and management all lend to his ability to manage large projects and provide a quality product to the customer."/>
		<meta property="og:url" content="https://tan-x.github.io/assets/images/screenshot2.PNG"/>
		<link rel="stylesheet" type="text/css" href="https://tan-x.github.io/" />
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
			integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
			crossorigin="anonymous"
		/>
		<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
		<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
		<title>Tanner M. Griffin</title>
    </Head>
    <nav class="navbar navbar-expand-lg navbar-dark sticky">
			<a class="navbar-brand" href="index.html">
				<span>t</span><svg
					class="bi bi-triangle"
					width=".9em"
					height=".9em"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						d="M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
						clip-rule="evenodd"
					/></svg><span>n-x</span>
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link navbar-name" href="#page-top">Home<span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/portfolio">Portfolio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/contact">Contact</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Links
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="https://github.com/tan-x/" target="_blank">GitHub</a>
							<a class="dropdown-item" href="https://www.linkedin.com/in/tannermgriffin/" target="_blank">LinkedIn</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="https://soundcloud.com/tangence/" target="_blank">SoundCloud</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>

		<main class="container-main flex-column" id="index">
			{/* <!-- Header --> */}
			<header class="masthead">
				<img class="profile-img fade-in" src="assets/images/0.jfif" alt="Profile Picture" />
				<section class="intro-text">
					<h1><span class="boxitem2 rounded fade-in" id="name">Tanner M. Griffin</span></h1>
					<div class="border-top"></div>
					<h3><span class="boxitem2 rounded fade-in" id="dev">Full Stack Developer</span></h3>
				</section>
			</header>

			<div class="container flex-column">
				<div class="row justify-content-xl-center">
					{/* <!-- Main/About --> */}
					<section class="content-main flex-column boxitem rounded col-xl justify-content-xl-around fade-in" id="about">
						<header>
							<h3><i class="far fa-user-circle"></i> About</h3>
						</header>
						<p>
						Tanner Griffin is a Full Stack Web Developer with years of experience managing a team and delivering
						financial services to business clients. His background in audio engineering, electronics, financial
						operations, and management all lend to his ability to manage large projects and provide a quality
						product to the customer.
						</p>
						<a class="btn btn-primary" href="assets/TGriffin_resume.pdf" target="_blank">Resume</a>
					</section>

						{/* <!-- Services  --> */}
					<section class="content-main flex-column boxitem rounded col-xl justify-content-xl-around fade-in" id="services">
						<header>
							<h3><i class="far fa-handshake"></i> Services</h3>
						</header>
						<h4>Front End Development</h4>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis varius mauris pharetra
						euismod. Donec id congue dui.
						</p>
						<h4>UI/UX Design</h4>
						<p>
						Donec pharetra, lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tempus nisi.
						In vel metus diam.
						</p>
					</section>
        		</div>
        
				<div class="row justify-content-xl-center">
					{/* <!-- Portfolio Intro --> */}
					<section class="content-main  flex-column boxitem rounded col-xl justify-content-xl-around fade-in" id="portfolioBtm">
						<header>
							<h3><i class="fas fa-book-open"></i> Portfolio</h3>
						</header>
            			<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta elementum tempus. Sed non ligula
						dignissim, sollicitudin orci eget, luctus ex.
           				</p>
						<form method="get" action="portfolio.html">
							<button class="btn btn-primary">Click Here</button>
						</form>
					</section>
				</div>
			</div>
    	</main>
    
		{/* <!-- Footer --> */}
		<footer class="footer flex-center mt-auto py-3">
			<a href="https://github.com/tan-x/" target="_blank"><i class="fab fa-github fa-lg"></i></a>
			<a href="https://www.linkedin.com/in/tannermgriffin/" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
			<a href="https://soundcloud.com/tangence" target="_blank"><i class="fab fa-soundcloud fa-lg"></i></a>
    	</footer>
      </>
  )
}
