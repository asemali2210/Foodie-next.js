import React from 'react'
import partnerImg1 from '../public/img/partner (1).jpg';
import partnerImg2 from '../public/img/partner (2).jpg';
import partnerImg3 from '../public/img/partner (3).jpg';
import partnerImg4 from '../public/img/partner (4).jpg';
import partnerImg5 from '../public/img/partner (1).png';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

function Partners() {
    return (
        <section className="partners">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="heading">
                            <h2>Our Partners</h2>
                            <h4>We are working with top Restaurnts</h4>
                        </div>
                    </Col>
                    <Col>
                        <Image alt="image-partenr-1" layout='responsive' src={partnerImg1} className="img-fluid" />
                    </Col>
                    <Col>
                        <Image alt="image-partenr-5" layout='responsive' src={partnerImg2} className="img-fluid" />
                    </Col>
                    <Col>
                        <Image alt="image-partenr-2" layout='responsive' src={partnerImg3} className="img-fluid" />
                    </Col>
                    <Col>
                        <Image alt="image-partenr-3" layout='responsive' src={partnerImg4} className="img-fluid" />
                    </Col>
                    <Col>
                        <Image alt="image-partenr-4" layout='responsive' src={partnerImg5} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Partners
