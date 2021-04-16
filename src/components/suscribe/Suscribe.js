import Collapse from '../collapse/Collapse'
import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Suscribe.css'

export default function Suscribe () {
    return (
            <Container className="Suscribe">
                <Row>
                    <Col>
                        <img 
                        class="img-thumbnail"  
                        src="https://thumbs.dreamstime.com/b/adicional-animaci%C3%B3n-del-t%C3%ADtulo-de-peri%C3%B3dico-revele-y-lazo-hd-58849269.jpg" 
                        >    
                        </img>
                    </Col>
                    <Col>
                        <Jumbotron className="Jumbotron">
                            <a href=""> <h3> SUSCRIBETE HOY AL HERALDO </h3>  </a>   
                            <Collapse /> 
                        </Jumbotron>               
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
    )
}