import React from 'react';
import './Contact.css';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

export default function Contact () {
    return (
        <Container className="Contact">
            <Card>
                <Card.Header className="CardHeader">
                    <h4>CONTACTENOS</h4>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su nombre" />
                        </Form.Group>
                        <Form.Group> 
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Dejenos su mensaje" />
                        </Form.Group>
                        <Button type="submit" variant="outline-secondary">                               
                            Enviar
                        </Button>
                    </Form>                    
                </Card.Body>
            </Card>
        </Container>       
    )
}