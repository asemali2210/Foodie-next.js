import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Container, Row, Col } from 'react-bootstrap';


function Nav({ navRef }) {
    const [navActive, setNavActive] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [scroll, setScroll] = useState(0);
    const toggleRef = useRef();
    const navScrolling = {
        width: `${scroll}%`
    };

    //=====> toggle nav 📃📃📃📃📃
    const toggleNav = () => {
        navActive ? setNavActive(false) : setNavActive(true);
        navOpen ? setNavOpen(false) : setNavOpen(true);
    };

    useEffect(() => {
        const navColor = () => {
            //=====> nav change bg color when scroll 📃📃📃📃📃
            window.scrollY > 70 ? setNavActive(true) : setNavActive(false);
            //=====> nav scroll bar width % 📃📃📃📃📃
            setScroll(
                (window.pageYOffset / (document.body.offsetHeight - window.innerHeight) * 100) * 100 / 100
            )
        }
        window.addEventListener('scroll', navColor);
        return () => {
            window.removeEventListener('scroll', navColor)
        }
    }, [scroll]);

    return (
        <div ref={navRef} className={`nav__bar ${navActive ? `nav-active` : ''} ${navOpen ? 'nav-open' : ``}`}>
            <div className="nav__scrolling" style={navScrolling}></div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="logo">
                            <Link href="/">Foodie</Link>
                        </div>
                    </Col>
                    <Col xs={12} className="d-lg-none">

                        <div onClick={toggleNav} className='icon__toggle' ref={toggleRef}>
                            {!navOpen ? <HiMenuAlt2 /> : <FaTimes />}
                        </div>
                    </Col>
                    <Col lg={8}>
                        <nav>
                            <ul className="row">
                                <li className="col">
                                    <Link href="/">
                                        <a>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="col">
                                    <Link href="/about">
                                        <a>
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li className="col">
                                    <Link href="/">
                                        <a>
                                            Services
                                        </a>
                                    </Link>
                                </li>
                                <li className="col">
                                    <Link href="/">
                                        <a>
                                            Blog
                                        </a>
                                    </Link>
                                </li>
                                <li className="col">
                                    <Link href="/">
                                        <a>
                                            Markting
                                        </a>
                                    </Link>
                                </li>
                                <li className="col">
                                    <Link href="/">
                                        <a>
                                            Contact Us
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nav;
