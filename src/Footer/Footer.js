import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling animation
    });
  };

  return (
    <footer className='footer'>
      <h3>Building trust through innovative algorithms since 2011.</h3>
      <button onClick={scrollToTop}>⬆️</button>
    </footer>
  );
};

export default Footer;
