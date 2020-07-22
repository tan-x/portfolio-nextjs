import Head from 'next/head';

export default function Contact() {
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
			<link rel='stylesheet' type='text/css' href='https://tan-x.github.io/' />
			<link
				rel='stylesheet'
				href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
				integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
				crossorigin='anonymous'
			/>
			<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
			<link rel='stylesheet' type='text/css' href='assets/css/style.css' />
			<title>Tanner M. Griffin</title>
		</Head>
        {/* <!-- Navigation --> */}
		<nav class="navbar navbar-expand-lg navbar-dark sticky">
			{/* <!-- Brand logo --> */}
			<a class="navbar-brand" href="index.html">
				<span>t</span
				><svg
					class="bi bi-triangle"
					width=".9em"
					height=".9em"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
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
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link navbar-name" href="index.html">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="portfolio.html">Portfolio</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="#page-top">Contact<span class="sr-only">(current)</span></a>
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
		
		<div class="container-main flex-column" id="port">
      {/* <!-- Header --> */}
			<header class="smhead">
				<section>
					<img class="profile-img profile-img-sm" src="assets/images/0.jfif" alt="Profile Picture" />
						<h3 class="portfolio-head">Tanner M. Griffin</h3>
						<div class="border-top"></div>
        		</section>
			</header>

			{/* <!-- Contact form --> */}
			<main class="content-contact boxitem rounded fade-in">
				{/* <!--Section heading--> */}
				<h3 class="text-center my-4"><i class="fas fa-envelope-open"></i> Contact me</h3>
				{/* <!--Section description--> */}
				<p class="text-center mx-auto mb-5">
					Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within a
					matter of hours to help you.
				</p>

				<div class="row">
					{/* <!--Grid column--> */}
					<div class="col-xl-9 mb-md-0 mb-5">
						<form id="contact-form" name="contact-form" action="#" method="POST">
							{/* <!--Grid row--> */}
							<div class="row">
								{/* <!--Grid column--> */}
								<div class="col-md-6">
									<div class="md-form mb-0">
										<input type="text" id="name" name="name" class="form-control" />
										<label for="name" class="">Your name</label>
									</div>
								</div>
								{/* <!--Grid column--> */}

								{/* <!--Grid column--> */}
								<div class="col-md-6">
									<div class="md-form mb-0">
										<input type="text" id="email" name="email" class="form-control" />
										<label for="email" class="">Your email</label>
									</div>
								</div>
								{/* <!--Grid column--> */}
							</div>
							{/* <!--Grid row--> */}

							{/* <!--Grid row--> */}
							<div class="row">
								<div class="col-md-12">
									<div class="md-form mb-0">
										<input type="text" id="subject" name="subject" class="form-control" />
										<label for="subject" class="">Subject</label>
									</div>
								</div>
							</div>
							{/* <!--Grid row--> */}

							{/* <!--Grid row--> */}
							<div class="row">
								{/* <!--Grid column--> */}
								<div class="col-md-12">
									<div class="md-form">
										<textarea
											id="message"
											name="message"
											rows="2"
                      						class="form-control md-textarea">
                   						 </textarea>
										<label for="message">Your message</label>
									</div>
								</div>
							</div>
							{/* <!--Grid row--> */}
						</form>

						<div class="text-center text-md-left">
							<a class="btn btn-primary">Send</a>
						</div>
						<div class="status"></div>
					</div>
					{/* <!--Grid column--> */}

					{/* <!--Grid column--> */}
					<div class="col-xl-3 text-center">
						<ul class="list-unstyled mb-0">
							<li>
								<i class="fas fa-map-marker-alt fa-2x"></i>
								<p>Austin, TX 78745, USA</p>
							</li>

							<li>
								<i class="fas fa-envelope mt-4 fa-2x"></i>
								<p>tannerm&#8203;griffin&#8203;@gmail.com</p>
							</li>
						</ul>
					</div>
					{/* <!--Grid column--> */}
				</div>
			</main>
		</div>

		{/* <!-- Footer --> */}
		<footer class="footer flex-center mt-auto py-3">
			<a href="https://github.com/tan-x/" target="_blank"><i class="fab fa-github fa-lg"></i></a>
			<a href="https://www.linkedin.com/in/tannermgriffin/" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
			<a href="https://soundcloud.com/tangence" target="_blank"><i class="fab fa-soundcloud fa-lg"></i></a>
		</footer>
        </>
	);
}
