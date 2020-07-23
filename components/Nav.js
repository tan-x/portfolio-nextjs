// import React from 'react';
import { useRouter } from 'next/router'

export default function Nav() {
    const route = useRouter().route;
    console.log(route)

	return (
		<nav className='navbar navbar-expand-lg navbar-dark sticky'>
			<a className='navbar-brand' href='/index'>
				<span>t</span>
				<svg
					className='bi bi-triangle'
					width='.9em'
					height='.9em'
					viewBox='0 0 16 16'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'
						clipRule='evenodd'
					/>
				</svg>
				<span>n-x</span>
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className={route === '/' ? 'nav-item active' : 'nav-item'}>
						<a className='nav-link navbar-name' href='/'>
							Home<span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className={route === '/portfolio' ? 'nav-item active' : 'nav-item'}>
						<a className='nav-link' href='/portfolio'>
							Portfolio
						</a>
					</li>
					<li className={route === '/contact' ? 'nav-item active' : 'nav-item'}>
						<a className='nav-link' href='/contact'>
							Contact
						</a>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropdown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'
						>
							Links
						</a>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<a className='dropdown-item' href='https://github.com/tan-x/' target='_blank'>
								GitHub
							</a>
							<a
								className='dropdown-item'
								href='https://www.linkedin.com/in/tannermgriffin/'
								target='_blank'
							>
								LinkedIn
							</a>
							<div className='dropdown-divider'></div>
							<a className='dropdown-item' href='https://soundcloud.com/tangence/' target='_blank'>
								SoundCloud
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}
