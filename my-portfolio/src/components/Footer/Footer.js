import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3">
      <Container>
        Xi Xi Lin &copy; {new Date().getFullYear()}
      </Container>
    </div>
  );
};

export default Footer;