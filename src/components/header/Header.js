import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import logo from './logo.png'
import './Header.css'
import { BsFillChatSquareDotsFill, BsPersonFill } from 'react-icons/bs';



export default function Header () {
    return (
        <Container className='Header'>
            <Row>
                <Col className="Notify">                   
                    <a href=""> <span class="badge badge-pill"> <BsFillChatSquareDotsFill className="Icon" /> <label className="Icon"> 5 </label> </span> </a>  
                </Col>

                <Col>
                    <img src={logo}></img>
                </Col>

                <Col className="Login">
                    <a href=""> <span> <BsPersonFill className="Icon" /> Ingresar </span>  </a> 
                </Col>
            </Row>
        </Container>
    )
}