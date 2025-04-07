import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: '',
  });
  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    error: false,
    message: '',
  });

  useEffect(() => {
    fetchFeedbacks();
    
    // Set up polling for real-time updates (every 30 seconds)
    const interval = setInterval(() => {
      fetchFeedbacks();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/feedback`);
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setIsLoading(true);
    
    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/feedback`, formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        rating: 5,
        message: '',
      });
      setValidated(false);
      
      // Show success message
      setSubmitStatus({
        show: true,
        error: false,
        message: 'Thank you for your feedback!'
      });
      
      // Refresh feedback list
      fetchFeedbacks();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ show: false, error: false, message: '' });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        show: true,
        error: true,
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  return (
    <div className="feedback-section py-5">
      <div className="container">
        <Row>
          <Col lg={5}>
            <div className="feedback-form-container">
              <h3 className="mb-4">Share Your Experience</h3>
              <p className="text-muted mb-4">
                Your feedback helps us improve and helps other travelers make decisions.
              </p>
              
              {submitStatus.show && (
                <div className={`alert ${submitStatus.error ? 'alert-danger' : 'alert-success'} mb-4`}>
                  {submitStatus.message}
                </div>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Rating*</Form.Label>
                  <div className="star-rating mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fas fa-star ${
                          star <= formData.rating ? 'active' : ''
                        }`}
                        onClick={() => setFormData({ ...formData, rating: star })}
                      ></i>
                    ))}
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Your Feedback*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your experience with Ceylon Buddy"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your feedback.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={isLoading}
                  className="submit-feedback-btn"
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Submitting...
                    </>
                  ) : (
                    <>Submit Feedback <i className="fas fa-paper-plane ms-2"></i></>
                  )}
                </Button>
              </Form>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="feedback-list-container">
              <h3 className="mb-4">What Our Customers Say</h3>
              
              {feedbacks.length === 0 ? (
                <p className="text-muted">Be the first to leave feedback!</p>
              ) : (
                <div className="feedback-list">
                  {feedbacks.map((feedback, index) => (
                    <Card key={feedback._id || index} className="feedback-card mb-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="mb-0">{feedback.name}</h5>
                          <div className="feedback-rating">
                            {renderStars(feedback.rating)}
                          </div>
                        </div>
                        <p className="text-muted small mb-3">
                          {new Date(feedback.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="feedback-text mb-0">{feedback.message}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeedbackForm;
