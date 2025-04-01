import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Carousel, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
import heroVideo from '../../../assets/photos/homepage/hero-bg.mp4';
import temple from '../../../assets/photos/homepage/temple.jpg';
import ninearch from '../../../assets/photos/homepage/ninearch.jpg';

function Home() {
  // State for animated counting
  const [counters, setCounters] = useState({
    tours: 0,
    guides: 0,
    customers: 0
  });

  const finalCounters = {
    destinations: 150,
    tours: 500,
    guides: 30,
    customers: 10000
  };

  // Animation for counters
  useEffect(() => {
    const duration = 2000; // Duration in milliseconds
    const frameRate = 20; // Update every 20ms
    const steps = duration / frameRate;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      if (step <= steps) {
        setCounters({
          destinations: Math.floor(progress * finalCounters.destinations),
          tours: Math.floor(progress * finalCounters.tours),
          guides: Math.floor(progress * finalCounters.guides),
          customers: Math.floor(progress * finalCounters.customers)
        });
      } else {
        clearInterval(interval);
      }
    }, frameRate);
    
    return () => clearInterval(interval);
  }, []);

  // Add animation observer
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

    // Select all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup function
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []); // Empty dependency array means this runs once on component mount

  // Featured destinations - expanded with more attractive locations
  const featuredDestinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
      description: "Ancient rock fortress with breathtaking views and fascinating history.",
      category: "Heritage"
    },
    {
      id: 2,
      name: "Ella",
      image: {ninearch},
      description: "Picturesque hill station with lush tea plantations and the famous Nine Arch Bridge.",
      category: "Hill Country"
    },
    {
      id: 3,
      name: "Mirissa Beach",
      image: "https://images.unsplash.com/photo-1586344483413-86d53498ac63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Golden sands, palm trees, and crystal-clear waters perfect for whale watching and surfing.",
      category: "Beach"
    }
  ];

  // Expanded featured destinations for the carousel
  const expandedDestinations = [
    ...featuredDestinations,
    {
      id: 4,
      name: "Yala National Park",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      description: "Safari adventures with leopards, elephants, and diverse wildlife in their natural habitat.",
      category: "Wildlife"
    },
    {
      id: 5,
      name: "Galle Fort",
      image: "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg",
      description: "Colonial charm within ancient walls, featuring Dutch architecture and ocean views.",
      category: "Heritage"
    },
    {
      id: 6,
      name: "Kandy",
      image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg",
      description: "Cultural capital featuring the sacred Temple of the Tooth and traditional performing arts.",
      category: "Cultural"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Australia",
      quote: "Our tour with Ceylon Buddy was the highlight of our vacation. The guides knew every hidden gem and made us feel right at home in Sri Lanka.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      quote: "Professional, knowledgeable, and incredibly accommodating. The customized itinerary perfectly matched our interests and the service was exceptional.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "United Kingdom",
      quote: "Ceylon Buddy made our honeymoon truly magical. Our guide went above and beyond to create unforgettable experiences and capture perfect moments.",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      rating: 5
    }
  ];

  // Unique selling points
  const sellingPoints = [
    {
      icon: "fas fa-map-marked-alt",
      title: "Customized Tours",
      description: "Itineraries designed around your interests, whether history, wildlife, beaches, or adventure."
    },
    {
      icon: "fas fa-user-tie",
      title: "Expert Local Guides",
      description: "Knowledgeable guides who offer authentic insights and access to hidden gems."
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Sustainable Tourism",
      description: "Responsible practices that respect our environment and support local communities."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Professional assistance throughout your journey for a seamless travel experience."
    }
  ];

  // Tourism experiences with images
  const tourismExperiences = [
    {
      title: "Beach Getaways",
      image: "https://images.unsplash.com/photo-1586344483413-86d53498ac63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Relax on pristine beaches with golden sands and azure waters."
    },
    {
      title: "Wildlife Safaris",
      image: "https://images.unsplash.com/photo-1604324565792-a70f0b245d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Encounter elephants, leopards, and exotic birds in their natural habitat."
    },
    {
      title: "Cultural Heritage",
      image: "https://images.unsplash.com/photo-1540310287592-d81dc3766c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore ancient temples, colonial forts, and traditional villages."
    },
    {
      title: "Scenic Train Journeys",
      image: "https://images.pexels.com/photos/5388478/pexels-photo-5388478.jpeg",
      description: "Experience breathtaking vistas on one of the world's most beautiful rail trips."
    }
  ];

  // Popular tour plans for summary section
  const popularTourPlans = [
    {
      id: 1,
      title: "Cultural Triangle Explorer",
      days: 3,
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Discover Sri Lanka's ancient wonders including Sigiriya Rock, Dambulla Cave Temple, and the sacred city of Kandy.",
      price: 250,
      highlights: ["UNESCO World Heritage Sites", "Local Cultural Experiences", "Expert Historical Guides"]
    },
    {
      id: 2,
      title: "Hill Country & Tea Escape",
      days: 4,
      image: "https://images.pexels.com/photos/5388476/pexels-photo-5388476.jpeg",
      description: "Journey through misty mountains, tour tea plantations, and experience the famous train ride through scenic Ella.",
      price: 320,
      highlights: ["Scenic Train Journey", "Tea Factory Tours", "Mountain Hiking"]
    },
    {
      id: 3,
      title: "Wildlife & Beach Adventure",
      days: 5,
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      description: "Combine safari adventures in Yala National Park with relaxation on the pristine beaches of Sri Lanka's south coast.",
      price: 420,
      highlights: ["Leopard Safaris", "Whale Watching", "Pristine Beaches"]
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Video Background and Booking Form */}
      <section className="hero-section relative">
  <div className="hero-video-container">
    <video autoPlay muted loop className="hero-video object-cover">
      <source src={heroVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <Container>
    <div className="hero-content text-white">
      <h1 className="animate-on-scroll fade-up text-4xl md:text-5xl lg:text-6xl font-bold">
        Discover the Beauty of Sri Lanka
      </h1>
      <p className="animate-on-scroll fade-up delay-1 text-xl md:text-2xl mt-4 text-gray-100">
        Authentic experiences guided by local experts
      </p>
      <div className="hero-buttons animate-on-scroll fade-up delay-2 mt-8 flex justify-center">
        <Button
          as={Link}
          to="/contact#book-guide-section"
          size="lg"
          className="find-guide-btn px-8 py-3 rounded-full font-semibold text-lg shadow-lg bg-gradient-to-r from-emerald-600 to-teal-500 border-0 hover:shadow-xl transition-all"
        >
          <i className="fas fa-user-tie me-2"></i> Find Tour Guider
        </Button>
      </div>
    </div>
  </Container>
</section>

      {/* Welcome Section with Enhanced Images */}
      <section className="welcome-section py-16 md:py-24 bg-gray-50">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="welcome-image relative">
                <div className="image-stack rounded-1xl overflow-hidden shadow-2xl">
                  <div className="image-stack-item image-stack-item-top">
                    <img src={temple} alt="Tea plantations in Sri Lanka" className="image-hover" />
                  </div>
                </div>
                <div className="experience-badge shadow-xl">
                  <div className="inner bg-gradient-to-br from-emerald-600 to-emerald-800">
                    <span className="number">10+</span>
                    <span className="text">Years Experience</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="welcome-content">
                <div className="section-subtitle text-emerald-600 font-medium">Welcome to Ceylon Buddy</div>
                <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-800">Your Trusted Guide to Authentic Sri Lankan Experiences</h2>
                <p className="text-gray-600 my-4">
                  At Ceylon Buddy, we're passionate about showcasing the vibrant culture, stunning landscapes, and warm hospitality of our island paradise. Our team of experienced local guides goes beyond the typical tourist routes to provide you with authentic, immersive experiences that connect you with the true spirit of Sri Lanka.
                </p>
                <div className="welcome-features">
                  <div className="feature-item">
                    <i className="fas fa-check-circle text-emerald-500"></i>
                    <span>Personalized itineraries tailored to your interests</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle text-emerald-500"></i>
                    <span>Small group tours for a more intimate experience</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle text-emerald-500"></i>
                    <span>Insider access to hidden gems and local experiences</span>
                  </div>
                </div>
                <Button as={Link} to="/services" variant="primary" className="mt-4 bg-emerald-600 hover:bg-emerald-700 border-0 shadow-md px-5 py-2.5 rounded-lg">
                  Our Services <i className="fas fa-chevron-right ms-2"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview Section with Icons */}
      <section className="services-overview-section py-16 md:py-24">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle animate-on-scroll fade-up text-emerald-600 font-medium">Our Services</div>
            <h2 className="section-title animate-on-scroll fade-up delay-1 text-3xl md:text-4xl font-bold text-slate-800 mb-3">How We Make Your Journey Special</h2>
            <p className="section-description animate-on-scroll fade-up delay-2 text-gray-600 max-w-3xl mx-auto">
              Comprehensive tour solutions designed to create unforgettable Sri Lankan experiences
            </p>
          </div>
          
          <Row className="mt-12">
            {sellingPoints.map((point, index) => (
              <Col key={index} md={6} lg={3} className="mb-5">
                <div className={`service-overview-card animate-on-scroll fade-up delay-${index} bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 h-100`}>
                  <div className="service-icon bg-emerald-100 text-emerald-600">
                    <i className={point.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mt-4">{point.title}</h3>
                  <p className="text-gray-600 mt-2">{point.description}</p>
                  <Link to="/services" className="service-link text-emerald-600 hover:text-emerald-700 font-medium mt-3 inline-block">
                    Learn more <i className="fas fa-arrow-right ms-1 text-sm"></i>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Animated Counter Section with Parallax */}
      <section className="counter-section py-20 relative">
        <div className="absolute inset-0 bg-fixed" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540310287592-d81dc3766c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}></div>
        <div className="counter-overlay bg-gradient-to-r from-slate-900/80 to-emerald-900/70 absolute inset-0"></div>
        <Container className="relative z-10">
          <div className="counter-container py-8">
            <Row>
              <Col md={3} sm={6} className="mb-5 mb-md-0">
                <div className="counter-item animate-on-scroll fade-up text-center text-white">
                  <div className="counter-icon bg-white/10 backdrop-blur-sm text-white">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="counter-number text-4xl font-bold mt-4">{counters.destinations}+</div>
                  <div className="counter-text text-gray-200 font-medium">Destinations</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-5 mb-md-0">
                <div className="counter-item animate-on-scroll fade-up delay-1 text-center text-white">
                  <div className="counter-icon bg-white/10 backdrop-blur-sm text-white">
                    <i className="fas fa-route"></i>
                  </div>
                  <div className="counter-number text-4xl font-bold mt-4">{counters.tours}+</div>
                  <div className="counter-text text-gray-200 font-medium">Tours Completed</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-5 mb-md-0">
                <div className="counter-item animate-on-scroll fade-up delay-2 text-center text-white">
                  <div className="counter-icon bg-white/10 backdrop-blur-sm text-white">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <div className="counter-number text-4xl font-bold mt-4">{counters.guides}+</div>
                  <div className="counter-text text-gray-200 font-medium">Expert Guides</div>
                </div>
              </Col>
              <Col md={3} sm={6}>
                <div className="counter-item animate-on-scroll fade-up delay-3 text-center text-white">
                  <div className="counter-icon bg-white/10 backdrop-blur-sm text-white">
                    <i className="fas fa-smile"></i>
                  </div>
                  <div className="counter-number text-4xl font-bold mt-4">{counters.customers}+</div>
                  <div className="counter-text text-gray-200 font-medium">Happy Travelers</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Featured Destinations Carousel - New Section */}
      <section className="featured-carousel-section py-16 md:py-20 bg-gray-50">
        <Container fluid className="px-0">
          <div className="section-header text-center mb-8 px-4">
            <div className="section-subtitle text-emerald-600 font-medium">Breathtaking Destinations</div>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-800 mb-3">Sri Lanka's Treasures</h2>
            <p className="section-description text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the island's diverse landscapes and rich cultural heritage
            </p>
          </div>
          
          <Carousel 
            className="destinations-carousel"
            indicators={true}
            interval={4000}
          >
            {expandedDestinations.map((destination) => (
              <Carousel.Item key={destination.id}>
                <div className="carousel-image-container">
                  <img
                    className="d-block w-100 carousel-img"
                    src={destination.image}
                    alt={destination.name} />
                  <div className="carousel-caption rounded-lg bg-black/30 backdrop-blur-sm p-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{destination.name}</h3>
                    <p className="hidden md:block mb-4">{destination.description}</p>
                    <Button as={Link} to="/gallery" variant="light" className="btn-glow">
                      Explore <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Featured Destinations Grid */}
      <section className="destinations-section py-16 md:py-20">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle text-emerald-600 font-medium">Explore Sri Lanka</div>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-800 mb-3">Featured Destinations</h2>
            <p className="section-description text-gray-600 max-w-3xl mx-auto">
              Discover the diverse beauty of Sri Lanka, from ancient cities to pristine beaches
            </p>
          </div>
          
          <Row className="mt-12">
            {featuredDestinations.map((destination) => (
              <Col key={destination.id} lg={4} md={6} className="mb-5">
                <div className="destination-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="destination-img overflow-hidden">
                    <img src={destination.image} alt={destination.name} className="w-100 image-zoom" />
                    <div className="category-badge bg-emerald-600">{destination.category}</div>
                  </div>
                  <div className="destination-content p-5">
                    <h3 className="text-xl font-semibold text-slate-800">{destination.name}</h3>
                    <p className="text-gray-600 my-3">{destination.description}</p>
                    <Link to="/gallery" className="destination-link text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                      Explore <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-10">
            <Button as={Link} to="/gallery" variant="outline-primary" size="lg" className="btn-outline-modern px-6 py-3">
              View All Destinations <i className="fas fa-compass ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* Tourism Experiences - New Section */}
      <section className="experiences-section py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle text-emerald-600 font-medium">Unforgettable Experiences</div>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-slate-800 mb-3">Discover Sri Lanka's Magic</h2>
            <p className="section-description text-gray-600 max-w-3xl mx-auto">
              From wildlife safaris to cultural immersion, Sri Lanka offers diverse experiences
            </p>
          </div>
          
          <Row className="mt-12">
            {tourismExperiences.map((experience, index) => (
              <Col key={index} lg={3} md={6} className="mb-5">
                <div className="experience-card h-100 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="experience-img overflow-hidden">
                    <img src={experience.image} alt={experience.title} className="w-100 image-zoom" />
                    <div className="experience-overlay bg-emerald-900/40 backdrop-blur-sm">
                      <Link to="/services" className="experience-link hover:bg-white/90">
                        <i className="fas fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="experience-content p-5">
                    <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                    <p className="text-gray-600 mt-2">{experience.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Tour Plans Section */}
      <section className="tour-plans-section">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle animate-on-scroll fade-up">Our Popular Tours</div>
            <h2 className="section-title animate-on-scroll fade-up delay-1">Explore Our Best Selling Tour Day Plans</h2>
            <p className="section-description animate-on-scroll fade-up delay-2">
              Choose from our carefully crafted itineraries designed to showcase the best of Sri Lanka
            </p>
          </div>
          
          <Row className="mt-5">
            {popularTourPlans.map((plan, index) => (
              <Col key={plan.id} lg={4} md={6} className="mb-4">
                <div className={`tour-plan-card animate-on-scroll fade-up delay-${index}`}>
                  <div className="tour-plan-header">
                    <img src={plan.image} alt={plan.title} />
                    <div className="tour-plan-overlay"></div>
                    <div className="tour-days-badge">
                      <span className="days-number">{plan.days}</span>
                      <span className="days-text">Days</span>
                    </div>
                    {/* <div className="tour-price">
                      From <span>${plan.price}</span>
                    </div> */}
                  </div>
                  <div className="tour-plan-body">
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                    <div className="tour-highlights">
                      <ul>
                        {plan.highlights.map((highlight, i) => (
                          <li key={i}><i className="fas fa-check-circle"></i> {highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tour-actions">
                      <Button as={Link} to="/services" variant="outline-primary" className="tour-btn">
                        <i className="fas fa-info-circle"></i> View Details
                      </Button>
                      {/* <Button as={Link} to="/contact" variant="primary" className="tour-btn">
                        <i className="fas fa-calendar-check"></i> Book Now
                      </Button> */}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5 animate-on-scroll fade-up">
            <Button as={Link} to="/services" variant="outline-primary" size="lg" className="view-all-btn">
              View All Tour Day Plans <i className="fas fa-arrow-right ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* Destination Showcase with Tabs */}
      <section className="destinations-showcase-section">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle animate-on-scroll fade-up">Top Destinations</div>
            <h2 className="section-title animate-on-scroll fade-up delay-1">Explore Sri Lanka by Region</h2>
            <p className="section-description animate-on-scroll fade-up delay-2">
              Discover the diverse beauty and rich cultural heritage of this tropical paradise
            </p>
          </div>
          
          <div className="destination-tabs-container animate-on-scroll fade-up delay-2">
            <Tab.Container id="destination-tabs" defaultActiveKey="cultural">
              <Nav variant="pills" className="destination-nav">
                <Nav.Item>
                  <Nav.Link eventKey="cultural">Cultural Triangle</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="hills">Hill Country</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="beaches">Beaches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="wildlife">Wildlife</Nav.Link>
                </Nav.Item>
              </Nav>
              
              <Tab.Content>
                <Tab.Pane eventKey="cultural">
                  <div className="destination-showcase">
                    <Row>
                      <Col lg={6}>
                        <div className="destination-showcase-image">
                          <img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg" alt="Cultural Triangle" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="destination-showcase-content">
                          <h3>The Cultural Triangle</h3>
                          <p className="lead">Step back in time to ancient Sri Lankan civilizations</p>
                          <p>Explore the UNESCO World Heritage sites including Sigiriya Rock Fortress, Dambulla Cave Temple, and the ancient cities of Anuradhapura and Polonnaruwa. Discover incredible architecture, religious monuments, and engineering marvels dating back over 2,000 years.</p>
                          <div className="destination-highlights">
                            <div className="highlight-item">
                              <i className="fas fa-landmark"></i>
                              <span>Ancient Citadels</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-pray"></i>
                              <span>Sacred Temples</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-mountain"></i>
                              <span>Rock Fortresses</span>
                            </div>
                          </div>
                          <Button as={Link} to="/gallery" className="mt-4">
                            Explore Region <i className="fas fa-arrow-right ms-2"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="hills">
                  <div className="destination-showcase">
                    <Row>
                      <Col lg={6}>
                        <div className="destination-showcase-image">
                          <img src="https://images.pexels.com/photos/5388476/pexels-photo-5388476.jpeg" alt="Hill Country" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="destination-showcase-content">
                          <h3>The Hill Country</h3>
                          <p className="lead">Misty mountains, tea plantations, and cool climates</p>
                          <p>Journey through Sri Lanka's breathtaking central highlands, where emerald tea plantations blanket rolling hills and cool mountain air offers a refreshing escape. From the colonial charm of Nuwara Eliya to the scenic train rides through Ella, the hill country combines natural beauty with cultural heritage.</p>
                          <div className="destination-highlights">
                            <div className="highlight-item">
                              <i className="fas fa-leaf"></i>
                              <span>Tea Plantations</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-train"></i>
                              <span>Scenic Train Journeys</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-hiking"></i>
                              <span>Mountain Trails</span>
                            </div>
                          </div>
                          <Button as={Link} to="/gallery" className="mt-4">
                            Explore Region <i className="fas fa-arrow-right ms-2"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="beaches">
                  <div className="destination-showcase">
                    <Row>
                      <Col lg={6}>
                        <div className="destination-showcase-image">
                          <img src="https://images.unsplash.com/photo-1586344483413-86d53498ac63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sri Lanka Beaches" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="destination-showcase-content">
                          <h3>Pristine Beaches</h3>
                          <p className="lead">Golden sands, turquoise waters, and palm-lined shores</p>
                          <p>Sri Lanka is ringed by some of the world's most beautiful beaches. From the popular stretches of the southwest coast to the untouched shores of the east, each beach has its own character. Enjoy water sports in Arugam Bay, whale watching in Mirissa, or simply relax under swaying palms in the laid-back coastal villages.</p>
                          <div className="destination-highlights">
                            <div className="highlight-item">
                              <i className="fas fa-water"></i>
                              <span>Surf Paradises</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-fish"></i>
                              <span>Marine Life</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-umbrella-beach"></i>
                              <span>Coastal Escapes</span>
                            </div>
                          </div>
                          <Button as={Link} to="/gallery" className="mt-4">
                            Explore Region <i className="fas fa-arrow-right ms-2"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="wildlife">
                  <div className="destination-showcase">
                    <Row>
                      <Col lg={6}>
                        <div className="destination-showcase-image">
                          <img src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg" alt="Sri Lanka Wildlife" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="destination-showcase-content">
                          <h3>Wildlife Sanctuaries</h3>
                          <p className="lead">Encounter majestic creatures in their natural habitat</p>
                          <p>Sri Lanka boasts one of the highest rates of biological endemism in the world. Explore national parks like Yala, home to the highest density of leopards globally, or Udawalawe, known for its elephant herds. The island offers incredible biodiversity, from elusive big cats to colorful birds and magnificent marine life, making it a paradise for wildlife enthusiasts.</p>
                          <div className="destination-highlights">
                            <div className="highlight-item">
                              <i className="fas fa-paw"></i>
                              <span>Leopard Safaris</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-elephant"></i>
                              <span>Elephant Encounters</span>
                            </div>
                            <div className="highlight-item">
                              <i className="fas fa-feather-alt"></i>
                              <span>Bird Watching</span>
                            </div>
                          </div>
                          <Button as={Link} to="/gallery" className="mt-4">
                            Explore Region <i className="fas fa-arrow-right ms-2"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="testimonials-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596628069661-3c59217d209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}>
        <div className="testimonial-overlay"></div>
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle">Happy Travelers</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Read genuine reviews from travelers who experienced Sri Lanka with Ceylon Buddy
            </p>
          </div>
          
          <div className="testimonial-carousel-container animate-on-scroll fade-up delay-2">
            <Carousel 
              className="testimonial-carousel mt-5"
              indicators={false}
              interval={5000}
            >
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <div className="testimonial-slide">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-left quote-icon"></i>
                      <p>{testimonial.quote}</p>
                      <div className="testimonial-rating">
                        {Array(testimonial.rating).fill().map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          
          <div className="text-center mt-5 animate-on-scroll fade-up">
            <Button as={Link} to="/about" variant="outline-light">
              See More Reviews <i className="fas fa-chevron-right ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* Travel Experience Process */}
      <section className="process-section">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle animate-on-scroll fade-up">How It Works</div>
            <h2 className="section-title animate-on-scroll fade-up delay-1">Your Journey with Ceylon Buddy</h2>
            <p className="section-description animate-on-scroll fade-up delay-2">
              We make planning your Sri Lankan adventure simple and enjoyable
            </p>
          </div>
          
          <div className="process-timeline mt-5">
            <Row>
              <Col md={3} className="mb-4">
                <div className="process-step animate-on-scroll fade-up">
                  <div className="process-number">1</div>
                  <h3>Tell Us Your Dreams</h3>
                  <p>Share your travel preferences, interests, and budget through our simple consultation process.</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="process-step animate-on-scroll fade-up delay-1">
                  <div className="process-number">2</div>
                  <h3>Get Expert Planning</h3>
                  <p>Our local specialists design a personalized itinerary tailored to your unique interests.</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="process-step animate-on-scroll fade-up delay-2">
                  <div className="process-number">3</div>
                  <h3>Refine Your Journey</h3>
                  <p>Review and customize your itinerary until it perfectly matches your vision.</p>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="process-step animate-on-scroll fade-up delay-3">
                  <div className="process-number">4</div>
                  <h3>Experience Sri Lanka</h3>
                  <p>Enjoy your trip with expert guides, 24/7 support, and seamless logistics.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section
  className="cta-banner relative py-20 md:py-28"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1590733720117-a79e377578ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

  <Container className="relative z-10">
    <div className="section-header text-center text-white">
      {/* Subtitle */}
      <div className="section-subtitle text-teal-400 font-medium text-lg uppercase tracking-wider animate-on-scroll fade-up">
        Day Plans
      </div>

      {/* Title */}
      <h2 className="section-title text-4xl md:text-5xl font-extrabold leading-tight animate-on-scroll fade-up delay-1">
        Ready for an Unforgettable Adventure?
      </h2>

      {/* Description */}
      <p className="section-description text-lg md:text-xl mt-4 text-gray-300 animate-on-scroll fade-up delay-2">
        Let us help you create the perfect Sri Lankan experience
      </p>

      {/* Buttons */}
      <div className="cta-buttons mt-8 flex flex-col md:flex-row gap-4 justify-center animate-on-scroll fade-up delay-3">
        <Button
          as={Link}
          to="/contact"
          size="lg"
          className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 transition-all"
        >
          <i className="fas fa-paper-plane me-2"></i> Start Planning Now
        </Button>
        <Button
          as={Link}
          to="/gallery"
          size="lg"
          className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg bg-white text-teal-600 hover:bg-gray-100 hover:text-teal-700 border-2 border-white transition-all"
        >
          <i className="fas fa-map-marked-alt me-2"></i> Explore Destinations
        </Button>
      </div>
    </div>
  </Container>
</section>

      {/* Photo Gallery - New Section
      <section className="gallery-preview-section">
        <Container>
          <div className="section-header text-center">
            <div className="section-subtitle">Visual Journey</div>
            <h2 className="section-title">Sri Lanka Through Our Lens</h2>
            <p className="section-description">
              Captivating moments from across the paradise island
            </p>
          </div>
          
          <div className="gallery-grid mt-5">
            <div className="gallery-item item1">
              <img src="https://images.unsplash.com/photo-1578551712292-9a675b7ee1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Colombo skyline" />
            </div>
            <div className="gallery-item item2">
              <img src="https://images.unsplash.com/photo-1601561415086-62031dfabbc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Train journey through tea plantations" />
            </div>
            <div className="gallery-item item3">
              <img src="https://images.unsplash.com/photo-1563445046-a16f364cef50?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Traditional Sri Lankan dance" />
            </div>
            <div className="gallery-item item4">
              <img src="https://images.unsplash.com/photo-1625378482328-69860f9a382e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pidurangala Rock view" />
            </div>
            <div className="gallery-item item5">
              <img src="https://images.unsplash.com/photo-1605004670074-85667859ae37?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Trincomalee beach" />
            </div>
            <div className="gallery-item item6">
              <img src="https://images.unsplash.com/photo-1568322931555-8df7bdc8a92a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Diyaluma Falls" />
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Button as={Link} to="/gallery" variant="primary" size="lg">
              View Full Gallery <i className="fas fa-images ms-2"></i>
            </Button>
          </div>
        </Container>
      </section> */}

      {/* Letterhead Download Section - Modified from Newsletter */}
      <section className="newsletter-section py-16 bg-slate-50">
  <Container>
    <Row className="justify-content-center">
      <Col lg={8}>
        <div className="newsletter-container bg-gradient-to-r from-teal-600 to-emerald-700 shadow-xl rounded-2xl overflow-hidden">
          <div className="newsletter-content p-6 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tourist Information Pack</h2>
            <p className="text-gray-100 mb-6">
              Download our official letterhead with essential travel information and tips for your Sri Lankan adventure
            </p>
            <div className="download-options flex flex-col md:flex-row gap-3 justify-center">
              <Button
                className="btn-modern bg-white text-teal-700 hover:bg-gray-100 border-0 py-3 px-6 shadow-md hover:shadow-lg transition-all"
                href="/downloads/ceylon-buddy-tourist-letterhead.pdf"
                download
              >
                <i className="fas fa-file-pdf me-2 text-red-500"></i> Download PDF
              </Button>
              <Button
                className="btn-modern bg-white text-blue-700 hover:bg-gray-100 border-0 py-3 px-6 shadow-md hover:shadow-lg transition-all"
                href="/downloads/ceylon-buddy-tourist-letterhead.docx"
                download
              >
                <i className="fas fa-file-word me-2 text-blue-500"></i> Download Word
              </Button>
            </div>
            <p className="text-sm text-gray-100 mt-4">
              <i className="fas fa-info-circle me-1"></i> Contains travel guidelines, emergency contacts, and useful phrases
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      {/* Call-to-Action with Enhanced Background */}
      <section className="final-cta py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-fixed" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1602435886481-9196872ac09c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover"
        }}></div>
        <div className="cta-overlay bg-gradient-to-r from-slate-900/80 to-emerald-900/70 absolute inset-0"></div>
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Begin Your Sri Lankan Journey Today</h2>
          <p className="text-xl text-gray-200 mb-8">Let's create unforgettable memories together</p>
          <div className="cta-buttons flex flex-col md:flex-row gap-4 justify-center">
            <Button as={Link} to="/contact" variant="primary" size="lg" className="btn-modern bg-emerald-600 hover:bg-emerald-700 border-0 py-3 px-8 shadow-lg">
              Book a Guide <i className="fas fa-user-tie ms-2"></i>
            </Button>
            <Button as={Link} to="/gallery" variant="outline-light" size="lg" className="btn-outline-modern border-2 py-3 px-8 hover:bg-white/10">
              Explore Destinations <i className="fas fa-map-marked-alt ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
