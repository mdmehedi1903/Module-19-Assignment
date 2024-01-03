// RegistrationPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PageTitle from '../Components/PageTitle';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    // For demo purposes, just show a success message
    setShowSuccessMessage(true);
  };

  return (
    <>
       <PageTitle title="Account"/>    
    <Container className="mt-5">  
      <Row className="d-flex justify-content-center">
      <Col md={6}>
      <h1 className="text-center mb-4">Account Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <div>
          <br/>
        </div>
       
        <Button variant="primary" type="submit">
          
          Register
        </Button>
      </Form>

      {showSuccessMessage && (
        <Alert variant="success" className="mt-3">
          Registration successful! You can now log in.
        </Alert>
      )}
      </Col>
      </Row>
      
    </Container>
    </>
  );
};

export default RegistrationPage;
