import FavoriteItem from './FavoriteItem';
import Pizza1 from '../public/img/pizza (3).png';
import Pizza2 from '../public/img/pizza (4).png';
import Pizza3 from '../public/img/pizza (5).png';
import { Container, Row, Col } from 'react-bootstrap';

function Favorite() {
    return (
        <section className="favorite">
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <div className='heading text-center'>
                            <h2>Choose your</h2>
                            <h4>Favorite flavour</h4>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className='items'>
                            <div className="row">
                                <Col md={4} className="fr_item">
                                    <FavoriteItem
                                        name="Shrimp Pizza"
                                        cheeseName="cheese with shrimp"
                                        price="18$.00"
                                        src={Pizza1}
                                    />
                                </Col>
                                <Col md={4} className="sec_item">
                                    <FavoriteItem
                                        name="Seafood Pizza"
                                        cheeseName="Olive with cheese"
                                        price="22$.00"
                                        src={Pizza2}
                                    />
                                </Col>
                                <Col md={4} className="thr_item">
                                    <FavoriteItem
                                        name="Cheese Pizza"
                                        cheeseName="cheese wit"
                                        price="19$.00"
                                        src={Pizza3}
                                    />
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Favorite;
