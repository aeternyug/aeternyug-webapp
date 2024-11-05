import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';
// Optional: Import an image for the hiring section
// import hiringImage from '../assets/hiring.jpg';

const AboutSection = styled.section`
  padding: 100px 20px;
  background: #fff;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: auto;
  
  h2 {
    font-size: 2.5em;
    color: #0D3B66;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1em;
    color: #333;
    line-height: 1.6;
    margin-bottom: 30px;
  }
  
  .mission {
    font-style: italic;
    color: #DC143C;
    margin-bottom: 40px;
  }
  
  .roles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 60px;
  }
`;

const RoleCard = styled.div`
  background: #F6F1F1;
  padding: 20px;
  border-radius: 10px;
  width: 280px;
  text-align: left;
  
  h3 {
    color: #0D3B66;
    margin-bottom: 10px;
  }
  
  p {
    color: #333;
    font-size: 0.95em;
  }
  
  .apply-button {
    margin-top: 15px;
    padding: 10px 15px;
    background: #0D3B66;
    color: #FFD700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    
    &:hover {
      background: #FFD700;
      color: #0D3B66;
    }
  }
`;

const HiringSection = styled.div`
  background: #F6F1F1;
  padding: 50px 20px;
  border-radius: 10px;
  
  .hiring-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    justify-content: center;
  }
  
  .hiring-text {
    max-width: 500px;
    
    h3 {
      font-size: 2em;
      color: #0D3B66;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 1em;
      color: #333;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    
    .cta-button {
      padding: 10px 20px;
      background: #0D3B66;
      color: #FFD700;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      text-decoration: none;
      display: inline-block;
      
      &:hover {
        background: #FFD700;
        color: #0D3B66;
      }
    }
  }
  
  .hiring-image {
    width: 300px;
    height: auto;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    .hiring-content {
      flex-direction: column;
    }
    
    .hiring-image {
      width: 100%;
      max-width: 300px;
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutSection id="aboutus">
      <AboutContent>
        <h2>About Us</h2>
        <p className="mission">
          Our mission is to transcend the boundaries of time and imagination, crafting immersive and strategic gaming experiences that engage players across multiple eras and diverse realms.
        </p>
        <p>
          At <strong>AeternYug</strong>, we are passionate about blending rich cultural heritage with modern innovation. Our dedicated team works collaboratively to develop games like <em>"Eclipse Realms: Chrono Siege"</em> that offer captivating narratives and engaging gameplay.
        </p>
        <div className="roles">
          <RoleCard>
            <h3>Game Developer</h3>
            <p>
              Our Game Developers are the backbone of our projects, responsible for implementing core gameplay mechanics, systems, and features using cutting-edge technologies like Unity. They collaborate closely with designers and artists to ensure seamless integration of all game elements.
            </p>
            <Link to={`/apply/game-developer`} className="apply-button">
              Apply Now
            </Link>
          </RoleCard>
          <RoleCard>
            <h3>Game Assets Designer</h3>
            <p>
              The Game Assets Designers bring our game worlds to life by creating stunning 2D and 3D assets. From characters and environments to intricate details, they ensure that every visual element aligns with our artistic vision and enhances the player experience.
            </p>
            <Link to={`/apply/game-assets-designer`} className="apply-button">
              Apply Now
            </Link>
          </RoleCard>
          <RoleCard>
            <h3>UI Designer</h3>
            <p>
              Our UI Designers craft intuitive and aesthetically pleasing user interfaces that enhance player interaction and engagement. They work meticulously to ensure that every menu, HUD, and interface element is both functional and visually appealing.
            </p>
            <Link to={`/apply/ui-designer`} className="apply-button">
              Apply Now
            </Link>
          </RoleCard>
        </div>
        <HiringSection>
          <div className="hiring-content">
            {/* Optional: Add an image representing your team or company culture */}
            {/* <img src={hiringImage} alt="Join Our Team" className="hiring-image" /> */}
            <div className="hiring-text">
              <h3>Join Our Team</h3>
              <p>
                Are you passionate about game development and eager to work in a dynamic, creative environment? AeternYug is looking for talented individuals to join our team and help us build extraordinary gaming experiences.
              </p>
              <Link to={`/apply/general`} className="cta-button">
                Apply Today
              </Link>
            </div>
          </div>
        </HiringSection>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutUs;
