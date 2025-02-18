import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  z-index: 1000;
  
  &:hover {
    transform: scale(1.1);
  }
`;

function WhatsAppButton() {
  return (
    <WhatsAppLink 
      href="https://wa.me/2348130290110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </WhatsAppLink>
  );
}

export default WhatsAppButton; 