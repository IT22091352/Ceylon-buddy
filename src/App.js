import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import pages
import Home from './customer/pages/home/home';
import About from './customer/pages/about/about';
import Services from './customer/pages/service/service';
import Gallery from './customer/pages/gallery/gallery';
import Contact from './customer/pages/contact/contact';

function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Add animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Activate the FAQ accordion
    const activateFAQ = () => {
      const faqItems = document.querySelectorAll('.faq-item');
      if (faqItems.length) {
        faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          if (question) {
            question.addEventListener('click', () => {
              const isActive = item.classList.contains('active');
              
              // Close all FAQ items
              faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
              });
              
              // If the clicked item wasn't active, make it active
              if (!isActive) {
                item.classList.add('active');
              }
            });
          }
        });
      }
    };

    // Select all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Initialize FAQ accordion after DOM is loaded
    setTimeout(activateFAQ, 500);

    // Cleanup function
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;