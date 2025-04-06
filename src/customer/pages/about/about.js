import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './about.css';
import elephantImage from '../../../assets/photos/aboutpage/elephent.jpg';
import lighthouse from '../../../assets/photos/aboutpage/lighthouse.jpg';
import ninearch from '../../../assets/photos/aboutpage/ninearchabout.jpg';
import pecock from '../../../assets/photos/aboutpage/pecock.jpg';
import vision from '../../../assets/photos/aboutpage/vision.jpg';





function About() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Ranil Sampath Appuhamy",
      role: "Founder & CEO",
      bio: "Ranil Sampath brings unparalleled expertise and passion for showcasing Sri Lanka to the world.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  // Company values
  const values = [
    {
      icon: "fas fa-heart",
      title: "Passion",
      description: "We are deeply passionate about Sri Lanka and sharing its wonders with travelers from around the world."
    },
    {
      icon: "fas fa-handshake",
      title: "Authenticity",
      description: "We believe in providing authentic experiences that connect travelers with the true essence of Sri Lanka."
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainability",
      description: "We are committed to sustainable tourism practices that respect nature and support local communities."
    },
    {
      icon: "fas fa-award",
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, ensuring unforgettable journeys for our clients."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Discover the story behind Ceylon Buddy and our passion for Sri Lanka</p>
          </div>
        </Container>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="welcome-content text-center">
                <div className="section-subtitle">Our Story</div>
                <h2>Welcome to Ceylon Buddy – Your Gateway to Sri Lanka</h2>
                <div className="welcome-text">
                  <p className="lead">
                    At Ceylon Buddy, we are passionate about showcasing the breathtaking beauty, rich heritage, and warm hospitality of Sri Lanka. Our mission is to inspire travelers from around the world to explore this tropical paradise, where every journey is a story waiting to be told.
                  </p>
                  <p>
                    From sun-kissed beaches and misty mountains to ancient ruins and vibrant festivals, Sri Lanka is a land of wonders. Whether you seek adventure, cultural immersion, relaxation, or wildlife encounters, our platform is designed to help you discover the best experiences the island has to offer.
                  </p>
                  <p>
                    We believe in sustainable and responsible tourism, ensuring that every visit contributes to preserving Sri Lanka's natural beauty, empowering local communities, and protecting its rich history. Through carefully curated content, expert travel insights, and exclusive recommendations, we make it easy for you to plan your dream getaway.
                  </p>
                  <p>
                    Join us in exploring Sri Lanka – where every sunset is magical, every meal is a feast, and every journey leaves a lasting impression. Your adventure starts here!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Banner */}
      <section className="image-banner">
        <div className="image-grid">
          <div className="grid-item item1">
          <img src={elephantImage} alt="Sri Lanka Landscape" />
          </div>
          <div className="grid-item item2">
            <img src={lighthouse} alt="Tea Plantation" />
          </div>
          <div className="grid-item item3">
            <img src={pecock} alt="Beach" />
          </div>
          <div className="grid-item item4">
            <img src={ninearch} alt="Cultural Site" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="vision-image">
                <img 
                  src={vision}
                  alt="Sri Lanka Vision" 
                  className="img-fluid rounded shadow"
                />
                <div className="vision-badge">
                  <div className="inner">
                    <span className="number">Our</span>
                    <span className="text">Vision</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vision-content">
                <div className="section-subtitle">Looking Forward</div>
                <h2>Our Vision for Sri Lankan Tourism</h2>
                <p className="lead">
                  Our vision is to establish Sri Lanka as a world-class travel destination, celebrated for its unparalleled natural beauty, rich cultural heritage, and warm hospitality.
                </p>
                <p>
                  We aim to create an immersive and unforgettable experience for every traveler by highlighting the island's pristine beaches, lush rainforests, ancient landmarks, and vibrant traditions. Through responsible tourism, we strive to protect our environment, empower local communities, and preserve Sri Lanka's unique identity for future generations.
                </p>
                <p>
                  By leveraging innovation, storytelling, and sustainable practices, we aspire to make Sri Lanka a top choice for global travelers, fostering meaningful connections and lifelong memories.
                </p>
                <div className="vision-action">
                  <Button as={Link} to="/contact" variant="primary" className="mt-3">
                    Join Our Journey <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <div className="section-subtitle">What Drives Us</div>
                <h2>Our Core Values</h2>
                <p className="section-description">
                  The principles that guide our approach to showcasing Sri Lanka and serving our travelers
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            {values.map((value, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className={value.icon}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="section-header text-center">
                <div className="section-subtitle">Meet Our Team</div>
                <h2>The People Behind Ceylon Buddy</h2>
                <p className="section-description">
                  Our team of passionate Sri Lankan travel experts dedicated to creating unforgettable experiences
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center">
            {teamMembers.map((member) => (
              <Col key={member.id} md={4} className="mb-4">
                <div className="team-card">
                  <div className="team-img-container d-flex justify-content-center align-items-center">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                    <p>{member.bio}</p>
                    <div className="team-social">
                      <a href="tel:+94719928373" className="social-link"><i className="fab fa-whatsapp"></i></a>
                      <a href="mailto:ceylonbuddytour@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <Container className="text-center">
          <h2>Ready to Experience the Beauty of Sri Lanka?</h2>
          <p>Let's create unforgettable memories together</p>
          <div className="cta-buttons">
            <Button as={Link} to="/contact" variant="primary" size="lg" className="me-3">
              Contact Us <i className="fas fa-paper-plane ms-2"></i>
            </Button>
            <Button as={Link} to="/gallery" variant="outline-light" size="lg">
              Explore Destinations <i className="fas fa-map-marked-alt ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
