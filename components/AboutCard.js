// import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dropdown, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { DiJavascript, DiCss3, DiMongodb } from 'react-icons/di';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import firebase from '../assets/images/icons8-firebase.svg';
import sequelize from '../assets/images/sequelize.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import useWidth from './hooks/useWidth';

// import styles from './PortfolioHome.module.css'

export default function AboutCard(props) {
  //   const [navState, setNavState] = useState(false);
  //   const route = useRouter().route;
  //   console.log(route);
  const [hover, setHover] = useState({ right: '-10%', filter: 'opacity(80%)' });

  const width = useWidth();

  return (
    <>
      {/* // <Fade left={props.left} right={props.right} duration={props.right ? 900 : 500}></Fade> */}
      {/* <Link href={props.link}> */}
      <Card className='portfolio-card clickable'>
        <Card.Body className='port-card-body'>
          {/* <div className='port-body-hidden'> */}
          {/* <div
									style={{
										height: '100%',
										width: '100%',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-around',
										padding: '20px',
									}}
								> */}
          {/* <div>
										<h2 style={{ margin: '0 9px 5px' }}>{props.title}</h2>
									</div> */}

									{/* copy */}
          {/* <section
            className='flex-column col-xl justify-content-xl-around'
            id='about'
          >
            <header>
              <h3>
                <BsFillPersonLinesFill style={{ margin: '0 0 3px' }} /> About
              </h3>
            </header>
            <p>
              I am a <b>Full Stack Web Developer</b> based in <b>Austin, TX</b>{' '}
              with years of experience managing a team and delivering financial
              services to business clients. My background in coding, audio
              engineering, electronics, and management all lend to my ability to
              conduct large projects and provide a quality product to the
              customer.
            </p>
            <a
              className='btn btn-primary'
              href='/TGriffin_resume.pdf'
              target='_blank'
            >
              Resume
            </a>
          </section> */}
          {/* </div> */}
          {/* <Slide right when={hover}> */}
          {/* </Slide> */}
          {/* </div> */}
        </Card.Body>
      </Card>
      {/* </Link> */}
    </>
  );
}
