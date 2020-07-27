// import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

export default function PortfolioCard(props) {
  //   const [navState, setNavState] = useState(false);
  //   const route = useRouter().route;
  //   console.log(route);

  return (
      <Slide left>
      <Card style={{ width: '80vw', height: '100%', margin: '15px', borderRadius: '7px', boxShadow: '2px 4px 20px black'}}>
        <Card.Img style={{objectFit: "contain", height: '50%'}} variant='top' src={props.img} />
        <Card.Body style={{backgroundColor: 'rgba(250, 230, 230, .6)', minHeight: 'fit-content', borderRadius: '5px', color: 'black'}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.tech}
          </Card.Text>
        </Card.Body>
      </Card>
      </Slide>
  );
}
