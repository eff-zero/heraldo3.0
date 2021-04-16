import React from 'react'; 
import { Container, Pagination, Row, Col } from 'react-bootstrap';
import './Pagination.css';

export default function Pager () {
    return (
        <Container className="Pagination">
            <Row>
                <Col>
                <   Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{<a href=""> Anterior </a>}</Pagination.Item>                                              
                    </Pagination>
                </Col>
                <Col>
                    <Pagination>
                        <Pagination.Item className="Siguiente">{<a href=""> Siguiente </a>}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>      
            </Row>           
        </Container>
    )
}