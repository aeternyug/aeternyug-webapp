import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll for scrolling

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background: #0D3B66;
  padding: 20px 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  a, .nav-link {
    margin: 0 15px;
    color: #FFD700;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      color: #DC143C;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/" className="nav-link">
          <Logo src='/assets/logo.png' alt="AeternYug Logo" />
        </Link>
        <NavLinks>
          <ScrollLink to="introduction" smooth={true} duration={500} className="nav-link" activeClass="active-link">Home</ScrollLink>
          <ScrollLink to="aboutus" smooth={true} duration={500} className="nav-link" activeClass="active-link">About Us</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="nav-link" activeClass="active-link">Services</ScrollLink>
          <ScrollLink to="team" smooth={true} duration={500} className="nav-link" activeClass="active-link">Team</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link" activeClass="active-link">Contact</ScrollLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
