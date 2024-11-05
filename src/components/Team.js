import React from 'react';
import styled from 'styled-components';

const TeamSection = styled.section`
  padding: 100px 20px;
  background: #F6F1F1;
  text-align: center;
`;

const TeamContent = styled.div`
  max-width: 1000px;
  margin: auto;
  h2 {
    font-size: 2.5em;
    color: #0D3B66;
    margin-bottom: 40px;
  }
  .team-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

const TeamMember = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  h3 {
    color: #0D3B66;
    margin-bottom: 5px;
  }
  p {
    color: #333;
    font-size: 0.9em;
  }
`;

const Team = () => {
  // Sample team data
  const members = [
    {
      name: 'Aarav Sharma',
      role: 'Game Developer',
      image: '/assets/team/AaravSharma.webp',
    },
    {
      name: 'Meera Patel',
      role: 'Game Assets Designer',
      image: '/assets/team/MeeraPatel.webp',
    },
    {
      name: 'Rohan Gupta',
      role: 'UI Designer',
      image: '/assets/team/RohanGupta.webp',
    },
    {
      name: 'Anaya Singh',
      role: 'Sound Engineer',
      image: '/assets/team/AnayaSingh.webp',
    },
    {
      name: 'Vihaan Desai',
      role: 'QA Tester',
      image: '/assets/team/VihaanDesai.webp',
    },
    {
      name: 'Isha Verma',
      role: 'Project Manager',
      image: '/assets/team/IshaVerma.webp',
    },
  ];

  return (
    <TeamSection id="team">
      <TeamContent>
        <h2>Our Team</h2>
        <div className="team-list">
          {members.map((member, index) => (
            <TeamMember key={index}>
              <img src={member.image} alt={`${member.name}`} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamMember>
          ))}
        </div>
      </TeamContent>
    </TeamSection>
  );
};

export default Team;
