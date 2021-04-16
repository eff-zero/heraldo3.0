import React from 'react';
import { Col } from 'react-bootstrap';
import './Text.css';

export default function Text2 ({tamanio}) {
    return (
        <Col sm={tamanio}>
            <blockquote className="blockquote2">
                <p class="text-justify">
                    El alcalde Jaime Pumarejo también pidió a Banrepública, 
                    en nombre de la ciudad, agilizar el proceso de reconstrucción 
                    del Amira de la Rosa.
                </p>
            </blockquote> 
        </Col>
    )    
}