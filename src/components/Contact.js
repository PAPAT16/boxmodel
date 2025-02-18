import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactContainer = styled.div`
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-weight: 500;
  }
  
  input, textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #ffc107;
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #ffc107;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e0a800;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  
  .icon {
    color: #ffc107;
    font-size: 1.5rem;
    margin-top: 0.2rem;
  }
  
  .content {
    h3 {
      margin-bottom: 0.5rem;
      font-family: 'Playfair Display', serif;
    }
    
    p {
      color: #666;
      line-height: 1.6;
    }
  }
`;

const Map = styled.div`
  margin-top: 2rem;
  height: 300px;
  background: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactContent>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        <ContactInfo>
          <InfoItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <div className="content">
              <h3>Our Location</h3>
              <p>
                1st Floor Tecno Mobile<br />
                3 Allen Avenue, Ikeja<br />
                Toyin/Allen/Opebi Roundabout<br />
                Beside Mama Cass<br />
                Lagos State, Nigeria
              </p>
            </div>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div className="content">
              <h3>Phone Number</h3>
              <p>+234 (0) 8130290110</p>
            </div>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div className="content">
              <h3>Email Address</h3>
              <p>info@boxmodels.ng</p>
            </div>
          </InfoItem>
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3332299615767!2d3.3491377!3d6.6053833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922f39f8b517%3A0x5f0695e23d6c121e!2sAllen%20Ave%2C%20Ikeja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1623456789012!5m2!1sen!2s"
              title="Box Models Agency Location"
              allowFullScreen=""
              loading="lazy"
            />
          </Map>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact; 