import React from 'react';
import styled from 'styled-components';

const ModelsContainer = styled.div`
  padding: 120px 2rem 4rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
`;

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ModelCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ModelInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const models = [
  {
    id: 1,
    name: 'Benjamin Mokelu',
    type: 'Male Model',
    image: '/allimg/asset 10.jpeg'
  },
  {
    id: 2,
    name: 'Adeniyi Daniel',
    type: 'Male Model',
    image: '/allimg/asset 11.jpeg'
  },
  {
    id: 3,
    name: 'Elu Emina',
    type: 'Male Model',
    image: '/allimg/asset 12.jpeg'
  },
  {
    id: 4,
    name: 'Shofowora',
    type: 'Male Model',
    image: '/allimg/asset 13.jpeg'
  },
  {
    id: 5,
    name: 'Sarah James',
    type: 'Female Model',
    image: '/allimg/asset 14.jpeg'
  },
  {
    id: 6,
    name: 'Victoria Peters',
    type: 'Female Model',
    image: '/allimg/asset 15.jpeg'
  },
  {
    id: 7,
    name: 'Michael Johnson',
    type: 'Male Model',
    image: '/allimg/asset 16.jpeg'
  },
  {
    id: 8,
    name: 'Elizabeth Stone',
    type: 'Female Model',
    image: '/allimg/asset 17.jpeg'
  }
];

function Models() {
  return (
    <ModelsContainer>
      <Title>Our Models</Title>
      <ModelGrid>
        {models.map(model => (
          <ModelCard key={model.id}>
            <img src={model.image} alt={model.name} />
            <ModelInfo>
              <h3>{model.name}</h3>
              <p>{model.type}</p>
            </ModelInfo>
          </ModelCard>
        ))}
      </ModelGrid>
    </ModelsContainer>
  );
}

export default Models; 