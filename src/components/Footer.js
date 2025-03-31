import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Container>
          <Row className="gy-4">
            <Col lg={3} md={6}>
              <div className="footer-info">
                <Link to="/" className="footer-logo">
                  <span className="brand-text">
                    <span className="ceylon">Ceylon</span>
                    <span className="buddy">Buddy</span>
                  </span>
                </Link>
                <p className="mt-3">
                  Your trusted companion for authentic Sri Lankan experiences. We provide personalized tours to help you discover the island's hidden treasures.
                </p>
                <div className="footer-social">
                  <a href="https://www.facebook.com/share/15kv5XKF2y/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/ceylon.buddy/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@ceylon.buddy?_t=ZS-8uCbi2omwkc&_r=1" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="https://wa.me/94719928373" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="footer-links">
                <h4 className="footer-title">Quick Links</h4>
                <ul>
                  <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                  <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
                  <li><Link to="/services"><i className="fas fa-chevron-right"></i> Our Services</Link></li>
                  <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Destinations</Link></li>
                  <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
                </ul>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="footer-links">
                <h4 className="footer-title">Popular Destinations</h4>
                <ul>
                  <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Sigiriya Rock</Link></li>
                  <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Ella &amp; Nine Arch Bridge</Link></li>
                  <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Galle Fort</Link></li>
                  <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Yala National Park</Link></li>
                  <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Kandy Temple of Tooth</Link></li>
                </ul>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="footer-contact">
                <h4 className="footer-title">Contact Us</h4>
                <p>
                  <i className="fas fa-envelope me-2"></i>
                  <a href="mailto:ceylonbuddytour@gmail.com">ceylonbuddytour@gmail.com</a>
                </p>
                <p>
                  <i className="fas fa-phone-alt me-2"></i>
                  <a href="tel:+94719928373">+94 719 928 373</a>
                </p>
                <p>
                  <i className="fas fa-phone-alt me-2"></i>
                  <a href="tel:+94702592173">+94 702 592 173</a>
                </p>
                <p className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> Sri Lanka</p>
                
                <div className="newsletter-mini mt-4">
                  <h5>Subscribe to our newsletter</h5>
                  <Form className="d-flex mt-2">
                    <Form.Control 
                      type="email" 
                      placeholder="Your email" 
                      className="footer-form-control"
                    />
                    <Button className="footer-btn ms-2">
                      <i className="fas fa-paper-plane"></i>
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom">
        <Container>
          <div className="copyright">
            &copy; {currentYear} <strong>Ceylon Buddy</strong>. All Rights Reserved.
            <div className="mt-1 text-sm">Designed with <i className="fas fa-heart text-danger"></i> for Sri Lankan tourism</div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
