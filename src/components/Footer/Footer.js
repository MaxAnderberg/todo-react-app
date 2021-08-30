import React from 'react';
import './Footer.scss';
import logo from '../../assets/check-mark.png';

const Footer = () => (
  <footer className="footer">
    <a className="link" target="_blank" href="https://www.linkedin.com/in/max-anderberg" rel="noreferrer">
      <p className="link__author">By Max Anderberg</p>
      <img className="link__logo" src={logo} alt="A check mark" />
    </a>
  </footer>
);

export default Footer;
