import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="colored-section" id="footer">
      <div className="container-fluid">
        <a href="mailto:mohammedbilal.786.mb76@gmail.com" target="_blank">
          <i className="social_icon fas fa-envelope fa-2x" style={{ color: '#fff' }}></i>
        </a>
        <a href="https://wa.me/919618607570" target="_blank">
          <i className="fab fa-whatsapp fa-2x" style={{ color: '#fff' }}></i>
        </a>
        <a href="https://github.com/itsmo-bilal" target="_blank">
          <i className="social_icon fab fa-github fa-2x" style={{ color: '#fff' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/mohammed-bilal-6713591b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <i className="social_icon fab fa-linkedin fa-2x" style={{ color: '#fff' }}></i>
        </a>
        <p>© {currentYear} TRACK IT DOWN</p>
      </div>
    </footer>
  );
};

export default Footer;
