import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap'  

const Footer = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const title = "Lorem Ipsum";

    const columns = [{
        },{
        link: <Link to="/about">About</Link>
        },{
            link: <Link to="/">Opening times</Link>
        },{
            link: <Link to="/">Classifications</Link>
        }];

        return (
            <div className='footer'>
                <Container>
                    <Row>
                        <Col><h3>Footer</h3></Col>
                    </Row>  
                    <Row>
                        <Col>Address:</Col>  
                        <Col><Link to="/about">About</Link></Col>  
                    </Row>  
                    <Row>
                        <Col>Floor 19, 53 Portland Street, Manchester M1 3LD</Col>
                        <Col><Link to="/contact">Contact</Link></Col>  
                    </Row>
                    <Row>
                        <Col><Link to="/opening-hours">Opening Hours</Link></Col>   
                        <Col><Link to="/classifications">Classifications</Link></Col>
                    </Row>
                </Container> 
            </div>
        );

    }
export default Footer