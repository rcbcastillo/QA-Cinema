import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap'  

const Footer = () => {
    
        return (
            <footer class="bg-pearl-aqua">
                
                <Container>
                    <Row>
                        <Col><h3><u>Useful Information:</u></h3></Col>
                    </Row>  
                    <Row>
                        <Col>
                        <div>
                            <p>Address:</p>
                            <p>Floor 19, 53 Portland Street</p>
                        </div>
                        </Col>  
                        <Col>
                        <div class="w-1/2 bg-pearl-aqua h-12">
                            <a class="text-center block border border-pearl-aqua rounded hover:border-japanese-indigo text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/about">About</a>
                        </div>
                        </Col>  
                    </Row>  
                    <Row>
                        <Col>
                        <p> Manchester M1 3LD</p>
                        </Col>
                        <Col>
                        <div class="w-1/2 bg-pearl-aqua h-12">
                            <a class="text-center block border border-pearl-aqua rounded hover:border-japanese-indigo text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/contact-form">Contact</a>
                        </div>
                        </Col>  
                    </Row>
                    <Row>
                        <Col>
                        <div class="w-1/2 bg-pearl-aqua h-12">
                            <a class="text-center block border border-pearl-aqua rounded hover:border-japanese-indigo text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/opening-hours">Opening Hours</a>
                        </div>
                        </Col>   
                        <Col>
                        <div class="w-1/2 bg-pearl-aqua h-12">
                            <a class="text-center block border border-pearl-aqua rounded hover:border-japanese-indigo text-blue-500 hover:bg-japanese-indigo py-2 px-4 hover:text-white" href="/classifications">Classifications</a>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );

    }
export default Footer