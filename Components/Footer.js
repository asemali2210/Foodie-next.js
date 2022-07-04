import React from 'react'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">
            <Container >
                <Row>
                    <Col md={3}>
                        <div className="footer__list">
                            <h3>Adress</h3>
                            <Link href="/">
                                <a>121 King st,</a>
                            </Link>
                            <Link href="/">
                                <a>VIC3000, US</a>
                            </Link>
                            <Link href="/">
                                <a>888-123-42278</a>
                            </Link>
                            <Link href="/">
                                <a>Info@example.com</a>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer__list">
                            <h3>Out Company </h3>
                            <Link href="/">
                                <a>Reporting</a>
                            </Link>
                            <Link href="/">
                                <a>Get in Touch</a>
                            </Link>
                            <Link href="/">
                                <a>Managemeny</a>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer__list">
                            <h3>Our Service</h3>
                            <Link href="/">
                                <a >Pricing</a>
                            </Link>
                            <Link href="/">
                                <a >Tracking</a>
                            </Link>
                            <Link href="/">
                                <a >Report a Bug</a>
                            </Link>
                            <Link href="/">
                                <a >Terms of service</a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
