import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 120px 2rem 4rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const ImageSection = styled.div`
  position: relative;
  height: 400px;
  margin: 3rem 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const TextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: #ffc107;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Content>
        <Title>About Box Models</Title>
        
        <Section>
          <ImageSection>
            <img src="/allimg/asset 18.jpeg" alt="Box Models Team" />
          </ImageSection>
          
          <TextContent>
            <div>
              <h2>Our Story</h2>
              <p>Box Models is a leading Lagos based Modelling Agency, representing male and female models, influencers and brand ambassadors in Nigeria and around the world. Since our establishment, we have been committed to discovering and nurturing the best talent in the industry.</p>
              <p>Our agency has grown to become one of the most respected names in the Nigerian modeling industry, known for our professional approach and dedication to excellence.</p>
            </div>
            
            <div>
              <h2>Our Mission</h2>
              <p>We help talented models to achieve their dreams by connecting them with brands and businesses for collaboration and promotion. Our mission is to bridge the gap between exceptional talent and industry opportunities.</p>
              <p>We believe in fostering a supportive environment where models can develop their skills and build successful careers in the fashion and entertainment industry.</p>
            </div>
          </TextContent>
        </Section>
        
        <Stats>
          <StatItem>
            <h3>200+</h3>
            <p>Models Represented</p>
          </StatItem>
          <StatItem>
            <h3>500+</h3>
            <p>Successful Projects</p>
          </StatItem>
          <StatItem>
            <h3>50+</h3>
            <p>Partner Brands</p>
          </StatItem>
          <StatItem>
            <h3>10+</h3>
            <p>Years Experience</p>
          </StatItem>
        </Stats>
        
        <Section>
          <TextContent>
            <div>
              <h2>Why Choose Us</h2>
              <p>At Box Models, we pride ourselves on our commitment to professionalism and excellence. Our team of experienced professionals works tirelessly to ensure that both our models and clients receive the highest level of service.</p>
              <p>We offer comprehensive support to our models, including portfolio development, training workshops, and career guidance. Our strong industry connections and reputation help our models secure prestigious opportunities with leading brands and designers.</p>
            </div>
            
            <div>
              <h2>Our Values</h2>
              <p>• Professionalism in all our dealings</p>
              <p>• Integrity and transparency</p>
              <p>• Commitment to excellence</p>
              <p>• Nurturing talent and potential</p>
              <p>• Building lasting relationships</p>
              <p>• Promoting diversity and inclusion</p>
            </div>
          </TextContent>
        </Section>
      </Content>
    </AboutContainer>
  );
}

export default About; 