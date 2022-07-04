import Head from 'next/head';
import Header from 'Components/Header';
import Nav from 'Components/Nav';
import Favorite from 'Components/Favorite';
import About from 'Components/About';
import Features from 'Components/Features';
import Partners from 'Components/Partners';
import Footer from 'Components/Footer';
import { useRef } from 'react';

export default function Home() {
  const navRef = useRef();
  return (
    <div>
      <Head>
        <title>Foodie</title>
        <meta name="description" content="Foodie Best-Tasting Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <Nav navRef={navRef} />
        <Header navRef={navRef} />
        <Favorite />
        <About />
        <Features />
        <Partners />
        <Footer />
      </div>
    </div>
  )
}
