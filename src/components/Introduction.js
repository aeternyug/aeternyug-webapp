import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
  height: 100vh;
  background: #F6F1F1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
`;

const IntroContent = styled.div`
  max-width: 800px;
  h1 {
    font-size: 3em;
    color: #0D3B66;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2em;
    color: #333;
  }
`;

const Introduction = () => {
  return (
    <IntroSection id="introduction">
      <IntroContent>
        <h1>Welcome to AeternYug</h1>
        <p>
          At <strong>AeternYug</strong>, we transcend the boundaries of time and imagination to craft unforgettable gaming experiences. Our passion lies in blending rich cultural heritage with cutting-edge technology to develop immersive and strategic games like <strong>"Eclipse Realms: Chrono Siege."</strong> Join us on our journey as we forge timeless realms and redefine the future of interactive entertainment.
        </p>
      </IntroContent>
    </IntroSection>
  );
};

export default Introduction;
