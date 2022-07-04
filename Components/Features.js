import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaUtensils, FaTruck, FaPizzaSlice } from 'react-icons/fa';
function Features() {
    return (
        <section className="features">
            <Container className="container">
                <Row className="row">
                    <Col xs={12}>
                        <div className="heading">
                            <h2>Order in Just 30 minutes</h2>
                            <h4>By clicking on 3 steps</h4>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="feature">
                            <FaUtensils className="icon" />
                            <h2>Order your food</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="feature">
                            <FaTruck className="icon" />
                            <h2>Deliver & Pickup</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="feature">
                            <FaPizzaSlice className="icon" />
                            <h2>Delicious Recipe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features;
