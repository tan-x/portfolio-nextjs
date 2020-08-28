import { DiJavascript1, DiCss3, DiMongodb } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import firebase from '../../assets/images/icons8-firebase.svg';
import sequelize from '../../assets/images/sequelize.png';
import nextjs from '../../assets/images/nextjs.png';
import expressjs from '../../assets/images/expressjs.svg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default [
    {
        type: 'js',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='js-icon'>Javascript</Tooltip>}>
                <DiJavascript1 className='tech-icon' size={35} color='f7e017' />
            </OverlayTrigger>
        ),
    },
    {
        type: 'css3',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='css-icon'>CSS3</Tooltip>}>
                <DiCss3 className='tech-icon' color='#3299f8' id='css' size={35} />
            </OverlayTrigger>
        ),
    },
    {
        type: 'react',
        icon: (
            <>
                <OverlayTrigger placement='bottom' overlay={<Tooltip id='react-icon'>React</Tooltip>}>
                    <FaReact className='tech-icon' color='#48d8ff' size={35} />
                </OverlayTrigger>
            </>
        ),
    },
    {
        type: 'nextjs',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='react-icon'>Next.js</Tooltip>}>
                <img src={nextjs} className='tech-icon' style={{ height: '35px' }} />
            </OverlayTrigger>
        ),
    },
    {
        type: 'nodejs',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='node-icon'>Node.js</Tooltip>}>
                <FaNodeJs className='tech-icon' color='#659a60' size={35} />
            </OverlayTrigger>
        ),
    },
    {
        type: 'expressjs',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='react-icon'>Express.js</Tooltip>}>
                <img src={expressjs} className='tech-icon' style={{ height: '25px', marginTop: '5px' }} />
            </OverlayTrigger>
        ),
    },
    {
        type: 'firebase',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='firebase-icon'>Firebase</Tooltip>}>
                <img src={firebase} className='tech-icon' id='firebase' style={{ width: '35px' }} />
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
                <img src={sequelize} className='tech-icon' id='firebase' style={{ width: '35px' }} />
            </OverlayTrigger>
        ),
    },
    {
        type: 'mysql',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='mysql-icon'>MySQL</Tooltip>}>
                <GrMysql className='tech-icon' color='#1a5c87' id='mysql' size={35} />
            </OverlayTrigger>
        ),
    },
    {
        type: 'mongo',
        icon: (
            <OverlayTrigger placement='bottom' overlay={<Tooltip id='mongo-icon'>Mongo</Tooltip>}>
                <DiMongodb className='tech-icon' color='#6cac48' id='mongo' size={35} />
            </OverlayTrigger>
        ),
    },
];