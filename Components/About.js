import React, { useState } from 'react';
import chef from '../public/img/chef.jpg';
import chefHover from '../public/img/chef-hover.jpg';
import pizzaSlice from '../public/img/cursor.png';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    /* on mouse enter >> change chef photo */
    const [chefSrc, setChefSrc] = useState(chef);
    return (
        <section className="about">
            <Container >
                <Row >
                    <Col lg={6}>
                        <div className="img">
                            <Image layout='fixed' src={chefSrc}
                                onMouseEnter={() => {
                                    setChefSrc(chefHover)
                                }}
                                onMouseLeave={() => {
                                    setChefSrc(chef)
                                }}
                                width={500}
                                height={500}
                                alt="image-chef"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="content">
                            <h2>We have team of</h2>
                            <h4>Worlds best chefs</h4>
                            <p>Award winning restaurant</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Learn more</button>
                            <Image alt="image-pizza" layout='intrinsic' src={pizzaSlice} width={60} height={60} className="pizza-slice" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
