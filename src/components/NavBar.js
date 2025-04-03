import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);
  
  // Handle navigation with click event to ensure proper routing
  const handleNavigation = (path) => {
    // Close the navbar if it's open on mobile
    if (expanded) {
      setExpanded(false);
    }
    
    // Check if we're navigating to contact page with intention to book
    if (path === '/contact') {
      // If we're already on the contact page, just scroll to the section
      if (window.location.pathname === '/contact') {
        const bookSection = document.getElementById('book-guide-section');
        if (bookSection) {
          bookSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to contact page and then scroll after page loads
        navigate(path);
        // Set a small timeout to ensure the page has loaded before scrolling
        setTimeout(() => {
          const bookSection = document.getElementById('book-guide-section');
          if (bookSection) {
            bookSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      // For other pages, just navigate normally
      navigate(path);
    }
    
    // Scroll to top of the page for other navigation
    window.scrollTo(0, 0);
  };
  
  return (
    <Navbar 
      expand="lg" 
      className={`tourism-navbar ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
          <i className="fas fa-compass brand-icon"></i> Ceylon Buddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">
            <span className="hamburger-line"></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={() => handleNavigation('/')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              <i className="fas fa-home nav-icon"></i> Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/gallery" 
              onClick={() => handleNavigation('/gallery')}
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              <i className="fas fa-map-marked-alt nav-icon"></i> Destinations
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              onClick={() => handleNavigation('/services')}
              className={location.pathname === '/services' ? 'active' : ''}
            >
              <i className="fas fa-concierge-bell nav-icon"></i> Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={() => handleNavigation('/about')}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <i className="fas fa-info-circle nav-icon"></i> About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={() => handleNavigation('/contact')}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              <i className="fas fa-envelope nav-icon"></i> Contact
            </Nav.Link>
          </Nav>
          <div className="nav-cta">
            <Button 
              as={Link} 
              to="/contact" 
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavigation('/contact'); 
              }}
              className="contact-btn"
            >
              <i className="fas fa-calendar-check"></i> Book a Tour
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
