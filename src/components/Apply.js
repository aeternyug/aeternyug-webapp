import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const ApplySection = styled.section`
  padding: 100px 20px;
  background: #F6F1F1;
  min-height: 100vh;
  text-align: center;
`;

const ApplyContent = styled.div`
  max-width: 800px;
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
  
  .apply-instructions {
    text-align: left;
    margin-bottom: 40px;
  }
  
  .apply-button {
    padding: 15px 30px;
    background: #0D3B66;
    color: #FFD700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    
    &:hover {
      background: #FFD700;
      color: #0D3B66;
    }
  }
  
  .back-link {
    margin-top: 20px;
    display: inline-block;
    color: #0D3B66;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      color: #DC143C;
    }
  }
`;

const roleDetails = {
  'ui-designer': {
    title: 'UI Designer',
    instructions: (
      <>
        <p>
          We are seeking a talented <strong>UI Designer</strong> to craft intuitive and aesthetically pleasing user interfaces for our games. You will collaborate with developers and artists to ensure seamless integration of UI elements that enhance player interaction and engagement.
        </p>
        <p>
          <strong>Responsibilities:</strong>
          <ul>
            <li>Design user interfaces for game menus, HUDs, and in-game elements.</li>
            <li>Collaborate with developers to implement UI designs effectively.</li>
            <li>Ensure consistency in design across different platforms and devices.</li>
          </ul>
        </p>
      </>
    ),
  },
  'game-developer': {
    title: 'Game Developer',
    instructions: (
      <>
        <p>
          We are looking for a skilled <strong>Game Developer</strong> proficient in Unity to bring our game mechanics to life. You will be responsible for implementing core gameplay features, optimizing performance, and collaborating with designers and artists to create a seamless gaming experience.
        </p>
        <p>
          <strong>Responsibilities:</strong>
          <ul>
            <li>Develop and implement game mechanics and systems using Unity.</li>
            <li>Optimize game performance across various platforms.</li>
            <li>Collaborate with designers and artists to integrate assets and features.</li>
          </ul>
        </p>
      </>
    ),
  },
  'game-assets-designer': {
    title: 'Game Assets Designer',
    instructions: (
      <>
        <p>
          We are seeking a creative <strong>Game Assets Designer</strong> to create stunning 2D and 3D assets that bring our game worlds to life. You will work closely with the art and development teams to ensure that all assets align with our artistic vision and enhance the overall player experience.
        </p>
        <p>
          <strong>Responsibilities:</strong>
          <ul>
            <li>Create high-quality 2D and 3D game assets, including characters, environments, and props.</li>
            <li>Collaborate with the art team to maintain consistency in style and quality.</li>
            <li>Optimize assets for performance and scalability across different platforms.</li>
          </ul>
        </p>
      </>
    ),
  },
};

const Apply = () => {
  const { role } = useParams();
  const roleKey = role.toLowerCase();
  const roleInfo = roleDetails[roleKey];

  if (!roleInfo) {
    return (
      <ApplySection>
        <ApplyContent>
          <h2>Role Not Found</h2>
          <p>We're sorry, but the role you're looking for does not exist.</p>
          <Link to="/" className="back-link">Back to Home</Link>
        </ApplyContent>
      </ApplySection>
    );
  }

  const handleApply = () => {
    const subject = `Application for ${roleInfo.title}`;
    window.location.href = `mailto:hiring@aeternyug.com?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <ApplySection>
      <ApplyContent>
        <h2>Apply for {roleInfo.title}</h2>
        <div className="apply-instructions">
          {roleInfo.instructions}
        </div>
        <button className="apply-button" onClick={handleApply}>Apply Now</button>
        <br />
        <Link to="/" className="back-link">Back to Home</Link>
      </ApplyContent>
    </ApplySection>
  );
};

export default Apply;
