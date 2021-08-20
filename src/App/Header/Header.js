import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Logo />
                    </Col>
                    <Col xs={6} md={8}>
                        <Menu />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header