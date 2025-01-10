import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a  className="language">Site Designed and Developed </a>
        <span className="divider">|</span>
        <a href="https://www.linkedin.com/in/anirudha-kapileshwari-293826202/" className="language">Anirudha Kapileshwari</a>
      </div>
      <div className="footer-center">
        <span className="copyright">ANDON</span>
      </div>
     
    </footer>
  );
};

export default Footer;