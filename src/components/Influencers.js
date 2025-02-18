import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const InfluencersContainer = styled.div`
  padding: 120px 2rem 4rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const InfluencerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfluencerCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const InfluencerImage = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfluencerInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .category {
    color: #ffc107;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #333;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ffc107;
    }
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  
  .stat {
    h4 {
      font-size: 1.2rem;
      color: #ffc107;
      margin-bottom: 0.2rem;
    }
    
    p {
      font-size: 0.9rem;
      color: #666;
      margin: 0;
    }
  }
`;

const influencers = [
  {
    id: 1,
    name: 'Sarah James',
    category: 'Lifestyle & Fashion',
    description: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.',
    image: '/allimg/asset 14.jpeg',
    followers: '250K',
    engagement: '5.2%',
    posts: '1.2K'
  },
  {
    id: 2,
    name: 'Michael Johnson',
    category: 'Fitness & Wellness',
    description: 'Fitness model and wellness advocate inspiring healthy living.',
    image: '/allimg/asset 16.jpeg',
    followers: '180K',
    engagement: '4.8%',
    posts: '890'
  },
  {
    id: 3,
    name: 'Elizabeth Stone',
    category: 'Beauty & Lifestyle',
    description: 'Beauty content creator sharing makeup tips and lifestyle inspiration.',
    image: '/allimg/asset 17.jpeg',
    followers: '320K',
    engagement: '6.1%',
    posts: '1.5K'
  }
];

function Influencers() {
  return (
    <InfluencersContainer>
      <Content>
        <Title>Our Influencers</Title>
        <Subtitle>
          Connect with our talented influencers who create engaging content and build authentic connections with their audiences.
        </Subtitle>
        
        <InfluencerGrid>
          {influencers.map(influencer => (
            <InfluencerCard key={influencer.id}>
              <InfluencerImage>
                <img src={influencer.image} alt={influencer.name} />
              </InfluencerImage>
              <InfluencerInfo>
                <h3>{influencer.name}</h3>
                <div className="category">{influencer.category}</div>
                <p>{influencer.description}</p>
                <Stats>
                  <div className="stat">
                    <h4>{influencer.followers}</h4>
                    <p>Followers</p>
                  </div>
                  <div className="stat">
                    <h4>{influencer.engagement}</h4>
                    <p>Engagement</p>
                  </div>
                  <div className="stat">
                    <h4>{influencer.posts}</h4>
                    <p>Posts</p>
                  </div>
                </Stats>
                <SocialLinks>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </SocialLinks>
              </InfluencerInfo>
            </InfluencerCard>
          ))}
        </InfluencerGrid>
      </Content>
    </InfluencersContainer>
  );
}

export default Influencers; 