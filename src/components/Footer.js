import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #0D3B66;
  color: #FFD700;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  width: 80%;
  margin: auto;
  p {
    margin: 5px 0;
  }
  a {
    color: #FFD700;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      color: #DC143C;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} AeternYug. All rights reserved.</p>
        <p>
          <a href="mailto:info@aeternyug.com">info@aeternyug.com</a> | 
          <a href="https://www.facebook.com/aeternyug" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com/aeternyug" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com/aeternyug" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
