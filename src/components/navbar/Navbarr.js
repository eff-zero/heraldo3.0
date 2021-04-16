import React from 'react';
import { Container, Form, FormControl, Nav, NavDropdown, Button, Navbar } from 'react-bootstrap';
import './Navbarr.css'


export default function Navbarr () {
    return (          
            <Navbar sticky="top">    
                <Container className="Navbar">                 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#">NOTICIAS</Nav.Link>
                                <Nav.Link href="#">JUDICIALES</Nav.Link>
                                <Nav.Link href="#">DEPORTES</Nav.Link>
                                <Nav.Link href="#">CLASIFICACION</Nav.Link>
                                <Nav.Link href="#">POLITICA</Nav.Link>
                                <NavDropdown title="REGION">
                                    <NavDropdown.Item >Bolivar</NavDropdown.Item> <NavDropdown.Divider />
                                    <NavDropdown.Item >Cesar</NavDropdown.Item> <NavDropdown.Divider />
                                    <NavDropdown.Item >Cordoba</NavDropdown.Item> <NavDropdown.Divider />
                                    <NavDropdown.Item >Magdalena</NavDropdown.Item> <NavDropdown.Divider />
                                    <NavDropdown.Item >Sucre</NavDropdown.Item> <NavDropdown.Divider />
                                    <NavDropdown.Item >San Andres</NavDropdown.Item> 
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Ingrese su busqueda" className="mr-sm-3" />
                                <Button variant="outline-dark" >Buscar</Button>
                            </Form>
                        </Navbar.Collapse>   
                    </Container>   
                </Navbar>   
    )
}