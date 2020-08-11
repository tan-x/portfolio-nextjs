// import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import firebase from '../assets/images/icons8-firebase.svg'
import Slide from 'react-reveal/Slide';

// import styles from './PortfolioCard.module.css'

export default function PortfolioCard(props) {
  //   const [navState, setNavState] = useState(false);
  //   const route = useRouter().route;
  //   console.log(route);

  const techArray = [
    { type: 'react', icon: <FaReact className='tech-icon' color='#48d8ff'/> },
    { type: 'nodejs', icon: <FaNodeJs className='tech-icon' color='#659a60'/> },
    { type: 'mysql', icon: <GrMysql className='tech-icon' color='#1a5c87'/> },
    { type: 'js', icon: <DiJavascript className='tech-icon' /> },
    { type: 'css3', icon: <DiCss3 className='tech-icon' color='#3299f8'/> },
    { type: 'firebase', icon: <img src={firebase} className='tech-icon' id="firebase"/>}
  ];

  return (
    <Slide left>
      <Card
        style={{
          width: '80vw',
          height: '100%',
          margin: '15px',
          borderRadius: '7px',
          boxShadow: '2px 4px 20px black',
        }}
      >
        
        <Card.Body
          style={{
            backgroundColor: 'rgba(250, 230, 230, .6)',
            minHeight: 'fit-content',
            borderRadius: '5px',
            color: 'black',
          }}
        >
          {/* <Card.Title>{props.title}</Card.Title> */}
          <Card.Text>
            {props.title}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                minWidth: 'fit-content',
                position: 'absolute',
                right: 20,
                top: 35,
              }}
            >
              
              {props.tech && props.tech.map((item) => {
                const foundIndex = techArray.findIndex(
                  (el) => el.type === item
                );
                if (foundIndex >= 0) {
                  return techArray[foundIndex].icon;
                }
              })}
            </div>
          </Card.Text>
          <Card.Text style={{fontSize: '2.2vw'}}>

          {props.subtitle}
          </Card.Text>
          <Card.Img
          style={{ objectFit: 'contain', height: '50%' }}
          variant='top'
          src={props.img}
        />
        <Card.Text style={{fontSize: '2.3vw', display: 'flex', alignItems: 'center'}}>
          <FaGithub className='tech-icon'/> Github
          - Link
        </Card.Text>
        </Card.Body>
        
      </Card>
    </Slide>
  );
}
