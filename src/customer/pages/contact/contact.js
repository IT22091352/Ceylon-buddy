import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("wBuwOGjV3u8lXTdrV");
  }, []);

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourDate: '',
    groupSize: '',
    destination: '',
    duration: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Set submitting state
    setSubmitStatus({
      submitting: true,
      success: false,
      error: false,
      message: ''
    });
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'ceylonbuddytour@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      tour_date: formData.tourDate,
      group_size: formData.groupSize,
      destination: formData.destination,
      duration: formData.duration,
      message: formData.message,
    };
    
    // Use environment variables with fallbacks to hardcoded values
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_pt9c499";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_nhq0nit";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "wBuwOGjV3u8lXTdrV";
    
    // Send email using EmailJS with fallback values
    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setSubmitStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Thank you for your booking request! We'll contact you shortly to confirm your tour."
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        tourDate: '',
        groupSize: '',
        destination: '',
        duration: '',
        message: ''
      });
      setValidated(false);
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      setSubmitStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Error sending request: ${err.text || 'Unknown error'}. Please try again or contact us directly.`
      });
    });
  };

  // Contact information data
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "ceylonbuddytour@gmail.com",
      link: "mailto:ceylonbuddytour@gmail.com",
      color: "#4285F4"
    },
    {
      icon: "fab fa-facebook",
      title: "Facebook",
      content: "Ceylon Buddy Tours",
      link: "https://www.facebook.com/share/15kv5XKF2y/",
      color: "#3b5998"
    },
    {
      icon: "fab fa-tiktok",
      title: "TikTok",
      content: "@ceylon.buddy",
      link: "https://www.tiktok.com/@ceylon.buddy?_t=ZS-8uCbi2omwkc&_r=1",
      color: "#000000"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      content: "+94 719928373 / +94 702592173",
      link: "https://wa.me/94719928373",
      color: "#25D366"
    }
  ];

  // Popular destinations in Sri Lanka
  const destinations = [
    "Sigiriya Rock Fortress",
    "Kandy - Temple of the Tooth",
    "Galle Fort",
    "Yala National Park",
    "Ella and Nine Arch Bridge",
    "Mirissa Beach",
    "Nuwara Eliya (Little England)",
    "Dambulla Cave Temple",
    "Polonnaruwa Ancient City",
    "Trincomalee Beaches",
    "Anuradhapura Sacred City",
    "Adam's Peak",
    "Arugam Bay",
    "Horton Plains National Park",
    "Udawalawe National Park"
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>Let us help you plan your perfect Sri Lankan adventure</p>
          </div>
        </Container>
      </div>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <h2>Get In Touch</h2>
                <p>We're here to answer any questions you may have about our tours and services</p>
              </div>
            </Col>
          </Row>
          
          <Row className="contact-cards g-4">
            {contactInfo.map((item, index) => (
              <Col key={index} md={6} lg={3}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-card-link">
                  <Card className="contact-card h-100">
                    <div className="card-icon-container" style={{backgroundColor: item.color}}>
                      <i className={item.icon}></i>
                    </div>
                    <Card.Body className="text-center">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Book a Guide Section */}
      <section id="book-guide-section" className="book-guide-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <h2>Book a Tour Guide</h2>
                <p>Experience Sri Lanka with our knowledgeable local guides</p>
              </div>
            </Col>
          </Row>
          
          <Row className="booking-content">
            <Col lg={6} className="booking-info">
              <div className="info-container">
                <h3>Why Book with Ceylon Buddy?</h3>
                <ul className="benefits-list">
                  <li><i className="fas fa-certificate"></i> Certified local guides with deep knowledge</li>
                  <li><i className="fas fa-language"></i> Multi-lingual tour guides available</li>
                  <li><i className="fas fa-star"></i> Personalized experience tailored to your interests</li>
                  <li><i className="fas fa-route"></i> Access to hidden gems and local experiences</li>
                  <li><i className="fas fa-hand-holding-heart"></i> Support local communities through sustainable tourism</li>
                </ul>
                
                <div className="guide-features">
                  <div className="feature">
                    <div className="feature-icon">
                      <i className="fas fa-hiking"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Adventure</h4>
                      <p>Guided hikes through Sri Lanka's breathtaking landscapes</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <div className="feature-icon">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Culture</h4>
                      <p>Deep insights into Sri Lanka's rich cultural heritage</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <div className="feature-icon">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Cuisine</h4>
                      <p>Authentic culinary experiences and food recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="booking-form">
              <div className="form-container">
                <h3>Request Your Guide</h3>
                <p>Fill in your details below and we'll get back to you within 24 hours</p>
                
                {submitStatus.success && (
                  <div className="alert alert-success">
                    <i className="fas fa-check-circle me-2"></i>
                    {submitStatus.message}
                  </div>
                )}
                
                {submitStatus.error && (
                  <div className="alert alert-danger">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {submitStatus.message}
                  </div>
                )}
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Form.Group as={Col} md={6} className="mb-3">
                      <Form.Label>Full Name*</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="Your name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group as={Col} md={6} className="mb-3">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="your.email@example.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  
                  <Row>
                    <Form.Group as={Col} md={6} className="mb-3">
                      <Form.Label>Phone Number*</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        placeholder="+1 234 567 8900"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group as={Col} md={6} className="mb-3">
                      <Form.Label>Preferred Tour Date*</Form.Label>
                      <Form.Control 
                        type="date" 
                        name="tourDate" 
                        value={formData.tourDate}
                        onChange={handleChange}
                        required 
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select a valid date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  
                  <Row>
                    <Form.Group as={Col} md={6} className="mb-3">
                      <Form.Label>Group Size*</Form.Label>
                      <Form.Control 
                        as="select" 
                        name="groupSize" 
                        value={formData.groupSize}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select size</option>
                        <option value="1-2">1-2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11+">11+ people</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select your group size.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group as={Col} md={6} className="mb-3">
                      <Form.Label>Tour Duration*</Form.Label>
                      <Form.Control 
                        as="select" 
                        name="duration" 
                        value={formData.duration}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select duration</option>
                        <option value="1 day">1 day</option>
                        <option value="2-3 days">2-3 days</option>
                        <option value="4-7 days">4-7 days</option>
                        <option value="8-13 days">8-13 days</option>
                        <option value="14+ days">14+ days</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select your tour duration.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Destination*</Form.Label>
                    <Form.Control 
                      as="select" 
                      name="destination" 
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select destination</option>
                      {destinations.map((destination, index) => (
                        <option key={index} value={destination}>{destination}</option>
                      ))}
                      <option value="Multiple destinations">Multiple destinations</option>
                      <option value="Not sure yet">Not sure yet - need recommendations</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please select a destination.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Special Requests or Questions</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interests, special needs, or any questions you may have."
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="booking-submit-btn"
                      disabled={submitStatus.submitting}
                    >
                      {submitStatus.submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Tour Guide <i className="fas fa-paper-plane ms-2"></i>
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <h2>Find Us in Sri Lanka</h2>
                <p>We operate throughout Sri Lanka to show you the best this beautiful island has to offer</p>
              </div>
            </Col>
          </Row>
          
          <div className="map-container">
            <div className="responsive-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.3028246893!2d78.4615992116211!3d7.857178348650733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1654782830975!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ceylon Buddy Location Map"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about our tour guide services</p>
              </div>
            </Col>
          </Row>
          
          <Row className="faq-content">
            <Col lg={6}>
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> How far in advance should I book a tour guide?</h3>
                <p>For peak season (December-March), we recommend booking at least 4-6 weeks in advance. For other times, 2-3 weeks notice is typically sufficient, but we can sometimes accommodate last-minute requests based on availability.</p>
              </div>
              
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> What languages do your guides speak?</h3>
                <p>Our guides are fluent in English, and we also have guides who speak French, German, Italian, Spanish, Chinese, Russian, and Japanese. Please specify your language preference when booking.</p>
              </div>
              
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> Do you offer custom itineraries?</h3>
                <p>Absolutely! We specialize in creating custom itineraries based on your interests, whether it's wildlife, history, culture, adventure, or a mix of experiences. Just let us know your preferences in the booking form.</p>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> What payment methods do you accept?</h3>
                <p>We accept credit cards, PayPal, bank transfers, and cash payments. For tour bookings, we typically require a 20% deposit to confirm your reservation with the balance due before the tour begins.</p>
              </div>
              
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> Can you help with transportation and accommodation?</h3>
                <p>Yes, we provide full-service planning including arranging private transportation and booking accommodations based on your preferences and budget. This ensures a seamless experience throughout your journey.</p>
              </div>
              
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> What if I need to cancel my tour?</h3>
                <p>We understand plans can change. Cancellations made 14+ days before the tour receive a full refund minus processing fees. Cancellations 7-13 days before receive a 50% refund. Unfortunately, cancellations less than 7 days before the tour are non-refundable.</p>
              </div>
            </Col>
          </Row>
          
          <div className="text-center mt-5">
            <p className="more-questions">Have more questions? We're happy to help!</p>
            <Button variant="outline-primary" size="lg" href="mailto:ceylonbuddytour@gmail.com" className="contact-action-btn">
              <i className="fas fa-envelope me-2"></i> Email Us
            </Button>
            <Button variant="outline-success" size="lg" href="https://wa.me/94719928373" className="contact-action-btn ms-3">
              <i className="fab fa-whatsapp me-2"></i> WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="contact-cta">
        <Container className="text-center">
          <h2>Begin Your Sri Lankan Journey Today</h2>
          <p>Let's create unforgettable memories together</p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="#book-guide-section" className="me-3">
              Book a Guide <i className="fas fa-user-tie ms-2"></i>
            </Button>
            <Button variant="outline-light" size="lg" href="/gallery">
              Explore Destinations <i className="fas fa-map-marked-alt ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Contact;