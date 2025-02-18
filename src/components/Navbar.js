import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  background: #000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 1001;
  
  img {
    height: 35px;
    width: auto;
    object-fit: contain;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 0;
`;

const MenuText = styled.span`
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0;

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0.25rem;

    span {
      display: block;
      width: 20px;
      height: 2px;
      background: #000;
      transition: transform 0.3s ease;
    }
  }
`;

const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Cormorant Display', serif;
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 2px;
  position: relative;
  padding: 0.5rem 0;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  font-weight: 500;
  
  &:hover {
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background: white;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100px;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 1rem;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease;

  svg {
    font-size: 2rem;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <Nav>
        <Logo to="/">
          <img src="/allimg/asset 0.png" alt="Box Models Agency" />
        </Logo>
        
        <MenuContainer>
          <MenuButton onClick={() => setIsOpen(true)}>
            <MenuText>Menu</MenuText>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MenuButton>
        </MenuContainer>
      </Nav>

      <NavOverlay isOpen={isOpen}>
        <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <NavLinks>
          <NavLink to="/models" onClick={() => setIsOpen(false)}>Models</NavLink>
          <NavLink to="/influencers" onClick={() => setIsOpen(false)}>Influencers</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </NavLinks>
      </NavOverlay>
    </>
  );
}

export default Navbar; 