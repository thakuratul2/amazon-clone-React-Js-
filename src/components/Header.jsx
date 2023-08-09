import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Shop from './Shop';
import Footer from './Footer';

const Header = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Shop />
        <Footer />
    </>
  );
}

export default Header;
