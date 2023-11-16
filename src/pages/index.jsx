// src/pages/index.js

import React from 'react';
import HeaderMenu from '../components/Header';
import HeroImageRight from '../components/HeroHeader';
import HeroBullets from '../components/SpecialityHeader';
import FooterLinks from '../components/Footer';
import FeaturesGrid from '../components/Features';
import FaqSimple from '../components/FAQ';
import ContactUs from '../components/ContactForm';
import Banner from '../components/Banner';
import { Element } from 'react-scroll';
import { Global } from '@mantine/core';


const HomePage = () => {
  return (
    <>
      <Banner />
      <HeaderMenu
        links={[
          { label: 'Our Services', link: '/services' },
          { label: 'About Us', link: '/about' },
          { label: 'Contact Us', link: '/contact' },
        ]}
      />
      <HeroImageRight />
      <Element name="features-grid" style={{backgroundColor:'#f6f6f6'}}>
        <FeaturesGrid />
      </Element>
      <Element name="hero-bullets" style={{backgroundColor:'white'}}>
        <HeroBullets />
      </Element>
      <Element name="contact-us">
        <ContactUs />
      </Element>
      <FooterLinks />
    </>
  );
};

export default HomePage;
