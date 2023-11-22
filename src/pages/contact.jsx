// src/pages/contact.js (or contact.tsx)

import React from 'react';
import ContactUs from '../components/ContactForm'; // Import the ContactUs component
import HeaderMenu from '../components/Header';

const ContactPage = () => {
  return (
    <div>
    <HeaderMenu links={[{ label: 'Our Services', link: '/services' }, { label: 'About Us', link: '/about' }, { label: 'Contact Us', link: '/contact' }, ]} />
      <ContactUs />
    </div>
  );
};

export default ContactPage;
