import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './Collapse.css';

export default function Collapse () {
    return (
            <Accordion className="Accordion">
                <Card>               
                    <Accordion.Toggle eventKey="0" variant="link" as={Card.Header}>
                        <Button variant="light" active>
                            <p> Ver estado de suscripcion </p>  
                        </Button>                         
                    </Accordion.Toggle>                             
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Usted se encuentra suscrito.</p>
                        </Card.Body>
                    </Accordion.Collapse> 
                </Card>                    
            </Accordion>     
    )
}