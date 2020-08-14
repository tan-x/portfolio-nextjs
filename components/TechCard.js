// import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dropdown, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { DiJavascript1, DiCss3, DiMongodb } from 'react-icons/di';
import { GrMysql, GrStackOverflow } from 'react-icons/gr';
import firebase from '../assets/images/icons8-firebase.svg';
import sequelize from '../assets/images/sequelize.png';
import nextjs from '../assets/images/nextjs.png';
import expressjs from '../assets/images/expressjs.svg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import useWidth from './hooks/useWidth';

// import styles from './PortfolioCard.module.css'

export default function PortfolioCard(props) {
  //   const [navState, setNavState] = useState(false);
  //   const route = useRouter().route;
  //   console.log(route);
  const [hover, setHover] = useState({ right: '-10%', filter: 'opacity(80%)' });

  const width = useWidth();

  const techArray = [
    {
      type: 'js',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='js-icon'>Javascript</Tooltip>}
        >
          <DiJavascript1 className='tech-icon' size={40} color='f7e017' />
        </OverlayTrigger>
      ),
    },
    {
      type: 'css3',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='css-icon'>CSS3</Tooltip>}
        >
          <DiCss3 className='tech-icon' color='#3299f8' id='css' size={40} />
        </OverlayTrigger>
      ),
    },
    {
      type: 'react',
      icon: (
        <>
          <OverlayTrigger
            placement='bottom'
            overlay={<Tooltip id='react-icon'>React</Tooltip>}
          >
            <FaReact className='tech-icon' color='#48d8ff' size={40} />
          </OverlayTrigger>
        </>
      ),
    },
    {
      type: 'nextjs',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='react-icon'>Next.js</Tooltip>}
        >
          <img src={nextjs} className='tech-icon' style={{ height: '40px' }} />
        </OverlayTrigger>
      ),
    },
    {
      type: 'nodejs',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='node-icon'>Node.js</Tooltip>}
        >
          <FaNodeJs className='tech-icon' color='#659a60' size={40} />
        </OverlayTrigger>
      ),
    },
    {
      type: 'expressjs',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='react-icon'>Express.js</Tooltip>}
        >
          <img
            src={expressjs}
            className='tech-icon'
            style={{ height: '25px', marginTop: '5px' }}
          />
        </OverlayTrigger>
      ),
    },
    {
      type: 'firebase',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='firebase-icon'>Firebase</Tooltip>}
        >
          <img
            src={firebase}
            className='tech-icon'
            id='firebase'
            style={{ width: '40px' }}
          />
        </OverlayTrigger>
      ),
    },
    {
      type: 'sequelize',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='sequelize-icon'>Sequelize</Tooltip>}
        >
          <img
            src={sequelize}
            className='tech-icon'
            id='firebase'
            style={{ width: '40px' }}
          />
        </OverlayTrigger>
      ),
    },
    {
      type: 'mysql',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='mysql-icon'>MySQL</Tooltip>}
        >
          <GrMysql className='tech-icon' color='#1a5c87' id='mysql' size={40} />
        </OverlayTrigger>
      ),
    },
    {
      type: 'mongo',
      icon: (
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id='mongo-icon'>Mongo</Tooltip>}
        >
          <DiMongodb
            className='tech-icon'
            color='#6cac48'
            id='mongo'
            size={40}
          />
        </OverlayTrigger>
      ),
    },
  ];

  return (
    // {/* // <Fade left={props.left} right={props.right} duration={props.right ? 900 : 500}></Fade> */}
    // {/* // <Link href='/'> */}
    <Card className='tech-card'>
      <Card.Body className='port-card-body'>
        {/* <div className='port-body-hidden'> */}
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '40px',
          }}
        >
          <h3>
            <GrStackOverflow /> Tech Stack
          </h3>
          <div
            style={{
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              minWidth: 'fit-content',
              minHeight: 'fit-content',
            }}
          >
            {/* <Fade cascade> */}
            {techArray.map((item, index) => {
              return (
                <Fade delay={index * 200}>
                  <div style={{ margin: '10px 0px' }} key={index}>
                    {item.icon}
                  </div>
                </Fade>
              );
            })}
            {/* </Fade> */}
          </div>
        </div>
        {/* <Slide right when={hover}> */}
        {/* </Slide> */}
        {/* </div> */}
      </Card.Body>
    </Card>
  );
}
