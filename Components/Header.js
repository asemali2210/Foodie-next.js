import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import headerImg from '../public/img/header.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function Header({ navRef }) {
    const headerRef = useRef();

    useEffect(() => {

        //=====> header margin-top >> Nav height 🟠 Forwording Ref 📃📃📃📃📃
        (() => {
            headerRef.current.style.marginTop
                = `${navRef.current.clientHeight}px`;
        })();

    }, [navRef]);
    return (
        <section className="header" ref={headerRef}>
            <Container >
                <Row >
                    <Col md={7}>
                        <div className='header__left'>
                            <div className="content">
                                <h1>Todays Special</h1>
                                <h4>Fresh Food Menu</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="header-btn">
                                <button>Order Now</button>
                            </div>
                            <div className="food_details">
                                <div>
                                    <i className="fa fa-fire icon"></i>
                                    <div className="cal">
                                        <strong>600</strong>
                                        <small>calorise</small>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-cheese icon"></i>
                                    <div className="cheese">
                                        <strong>120G</strong>
                                        <small>Mozarella</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className='header__right'>
                            <Image src={headerImg} layout="responsive" alt="image-header" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
