import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 100px 20px;
  background: #fff;
  text-align: center;
`;

const ServicesContent = styled.div`
  max-width: 1000px;
  margin: auto;
  h2 {
    font-size: 2.5em;
    color: #0D3B66;
    margin-bottom: 40px;
  }
  .service-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

const ServiceCard = styled.div`
  background: #F6F1F1;
  padding: 30px;
  border-radius: 10px;
  width: 250px;
  h3 {
    color: #0D3B66;
    margin-bottom: 15px;
  }
  p {
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <ServicesContent>
        <h2>Our Services</h2>
        <div className="service-list">
          <ServiceCard>
            <h3>Game Development</h3>
            <p>Crafting immersive and strategic games that engage players across multiple eras.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Art & Design</h3>
            <p>Creating stunning 2D and 3D assets that bring game worlds to life.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Sound Engineering</h3>
            <p>Designing captivating audio experiences that enhance player immersion.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Quality Assurance</h3>
            <p>Ensuring flawless gameplay through meticulous testing and bug fixing.</p>
          </ServiceCard>
        </div>
      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
