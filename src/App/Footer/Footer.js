import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AboutUsCol from './AboutUsCol/AboutUsCol'
import MissionCol from './MissionCol/MissionCol'
import ContactCol from './ContactCol/ContactCol'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-section-1">
                <Row>
                    <Col xs={12} md={4}>
                        <AboutUsCol />
                    </Col>
                    <Col xs={12} md={4}>
                        <MissionCol />
                    </Col>
                    <Col xs={12} md={4}>
                        <ContactCol />             
                    </Col>
                </Row>
            </Container>            
            <Container className="footer-section-2">
                <span className="text">© 2021 All Rights Reserved.</span>                                    
            </Container>
        </footer>        
    )
}

export default Footer