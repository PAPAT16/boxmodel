import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background: #fff;
  padding: 4rem 2rem;
  font-family: 'Playfair Display', serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #ffc107;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    width: 40px;
    height: 40px;
    background: #ffc107;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    
    &:hover {
      background: #333;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  color: #666;
  
  a {
    color: #ffc107;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Box Models Agency Nigeria</h3>
          <p>Box Models is a leading Lagos based Modelling Agency, representing male and female models, influencers and brand ambassadors in Nigeria and around the world.</p>
          <p>We help talented models to achieve their dreams by connecting them with brands and businesses for collaboration and promotion.</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <QuickLinks>
            <Link to="/about">About Us</Link>
            <Link to="/models/male">Male Models</Link>
            <Link to="/models/female">Female Models</Link>
            <Link to="/models/runway">Runway Models</Link>
            <Link to="/news">News</Link>
            <Link to="/become-model">Become A Model</Link>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contact Details</h3>
          <p>
            <strong>Address:</strong><br />
            1st Floor Tecno Mobile<br />
            3 Allen Avenue, Ikeja<br />
            Toyin/Allen/Opebi Roundabout<br />
            Beside Mama Cass<br />
            Lagos State, Nigeria
          </p>
          <p>
            <strong>Email:</strong> info@boxmodels.ng<br />
            <strong>Phone:</strong> +234 (0) 8130290110
          </p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © 2025 Box Models Nigeria - All rights reserved | Logo, Web Design & SEO beautifully crafted by <a href="https://topyougo.com" target="_blank" rel="noopener noreferrer">TopYouGo</a>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 