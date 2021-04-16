import React from 'react';
import { Col } from 'react-bootstrap';
import './Text.css';

export default function Text ({span, offset,encabezado, titulo, complemento}) {
    return (        
        <Col sm={{offset: offset,span: span}} className="Text">
                 <h5> <small> {encabezado} </small> <br></br> 
                    <a href=""> {titulo}     </a>
                    <blockquote class="blockquote">
                        <small> {complemento} </small>
                    </blockquote>
                </h5>       
        </Col>                    
    )
}