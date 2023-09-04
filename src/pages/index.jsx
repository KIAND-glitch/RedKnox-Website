// src/pages/index.js

import React from 'react';
import HeaderMenu from '../components/Header';
import HeroImageRight from '../components/HeroHeader';
import HeroBullets from '../components/SpecialityHeader';
import FooterLinks from '../components/Footer';
import FeaturesGrid from '../components/Features';
import FaqSimple from '../components/FAQ';
import ContactUs from '../components/ContactForm';


const HomePage = () => {
  return (
    <div>
      <HeaderMenu links={[{ label: 'Our Services', link: '/services' }, { label: 'About Us', link: '/about' }, { label: 'Contact Us', link: '/contact' }, ]} />
      <HeroImageRight/>
      <HeroBullets/>
      <FeaturesGrid/>
      {/* <FaqSimple/> */}
      <ContactUs />
      <FooterLinks/>
    </div>
  );
};

export default HomePage;
