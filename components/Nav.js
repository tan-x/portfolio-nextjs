// import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, Collapse } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import useWidth from './hooks/useWidth';

export default function Nav() {
  const [navState, setNavState] = useState(false);
  const route = useRouter().route;
  const width = useWidth();
  console.log(route);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark sticky'>
      <Link href='/'>
        <div className='navbar-brand clickable'>
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
        </div>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        // dataToggle='collapse'
        // dataTarget='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => {
          setNavState(!navState);
        }}
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      
      <Collapse in={navState}>
      {/* <div
        className={width > 992 ? 'navbar-collapse' : 'collapse navbar-collapse'}
      > */}
        <ul className='navbar-nav'>
          <li className={route === '/' ? 'nav-item active' : 'nav-item'}>
            <a className='nav-link navbar-name' href='/'>
              Home<span className='sr-only'>(current)</span>
            </a>
          </li>
          <li
            className={route === '/portfolio' ? 'nav-item active' : 'nav-item'}
          >
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
            <Dropdown>
              <Dropdown.Toggle className='nav-link dropdown-toggle'>
                Links
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className='dropdown-item'
                  href='https://github.com/tan-x/'
                  target='_blank'
                >
                  GitHub
                </Dropdown.Item>
                <Dropdown.Item
                  className='dropdown-item'
                  href='https://www.linkedin.com/in/tannermgriffin/'
                  target='_blank'
                >
                  LinkedIn
                </Dropdown.Item>
                <Dropdown.Item
                  className='dropdown-item'
                  href='https://soundcloud.com/tangence/'
                  target='_blank'
                >
                  Soundcloud
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      {/* </div> */}
      </Collapse>
    </nav>
  );
}
