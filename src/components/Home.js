import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  background: #000;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const HeroPanel = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  &.left-panel {
    background: #000;
  }

  &.center-panel {
    background: #000;
  }

  &.right-panel {
    background: #000;
  }
`;

const SideText = styled.div`
  position: absolute;
  left: ${props => props.left ? '2rem' : 'auto'};
  right: ${props => props.right ? '2rem' : 'auto'};
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: left center;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  font-weight: 500;
  word-spacing: 4px;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BookButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #ff3b30;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.3s ease;
  white-space: nowrap;
  font-weight: 500;

  &:hover {
    background: #e6352b;
  }

  @media (max-width: 768px) {
    bottom: 3rem;
    padding: 0.8rem 2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    bottom: 2.5rem;
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  font-family: 'Cormorant Display', serif;
  font-size: 2.75rem;
  margin: 4rem 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin: 2rem 1rem;
  }
`;

const ModelSection = styled.section`
  padding: 4rem 0;
  
  h2 {
    text-align: center;
    font-family: 'Cormorant Display', serif;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #000;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const ModelGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }

  .slick-slide {
    padding: 0 0.5rem;
  }

  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    z-index: 1;
    
    &:before {
      font-size: 40px;
      color: #000;
      opacity: 0.5;
    }

    @media (max-width: 1024px) {
      width: 30px;
      height: 30px;
      &:before {
        font-size: 30px;
      }
    }
  }

  .slick-prev {
    left: -50px;
    @media (max-width: 1024px) {
      left: -35px;
    }
    @media (max-width: 768px) {
      left: -25px;
    }
  }

  .slick-next {
    right: -50px;
    @media (max-width: 1024px) {
      right: -35px;
    }
    @media (max-width: 768px) {
      right: -25px;
    }
  }
`;

const ModelCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .model-details {
    opacity: 1;
  }
`;

const ModelDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ModelMeasurement = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.4rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 0.3rem 0;
  }

  .label {
    color: white;
    font-weight: 500;
  }

  .value {
    color: #ffd700;
    font-weight: 400;
  }
`;

const ModelName = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-family: 'Cormorant Display', serif;
  font-size: 1.25rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 0.6rem;
  }
`;

const InstagramSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 600;
    color: #000;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
  
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const InstagramButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const LoadMoreButton = styled.button`
  background: #ffd700;
  color: #000;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e6c200;
  }
`;

const FollowButton = styled.button`
  background: #E1306C;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c62e60;
  }
`;

function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const femaleModels = [
    {
      name: "Marvelous Bankole",
      measurements: {
        height: "5' 9\" / 180cm",
        dress: "8 UK",
        bust: "34\" / 86cm",
        waist: "27\" / 68cm",
        shoe: "8 UK / 42 EU",
        hair: "Black",
        eyes: "Dark Brown"
      },
      image: "/allimg/asset 14.jpeg"
    },
    {
      name: "Victoria Peters",
      measurements: {
        height: "5' 10\" / 178cm",
        dress: "6 UK",
        bust: "32\" / 81cm",
        waist: "26\" / 66cm",
        shoe: "7 UK / 40 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 15.jpeg"
    },
    {
      name: "Elizabeth Stone",
      measurements: {
        height: "5' 11\" / 180cm",
        dress: "8 UK",
        bust: "34\" / 86cm",
        waist: "28\" / 71cm",
        shoe: "8 UK / 42 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 17.jpeg"
    },
    {
      name: "Grace Williams",
      measurements: {
        height: "5' 9\" / 175cm",
        dress: "6 UK",
        bust: "32\" / 81cm",
        waist: "26\" / 66cm",
        shoe: "7 UK / 40 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 14.jpeg"
    },
    {
      name: "Sarah James",
      measurements: {
        height: "5' 8\" / 173cm",
        dress: "8 UK",
        bust: "34\" / 86cm",
        waist: "27\" / 68cm",
        shoe: "8 UK / 42 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 15.jpeg"
    },
    {
      name: "Tolulope Mohammed",
      measurements: {
        height: "5' 10\" / 178cm",
        dress: "6 UK",
        bust: "32\" / 81cm",
        waist: "26\" / 66cm",
        shoe: "7 UK / 40 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 17.jpeg"
    }
  ];

  const maleModels = [
    {
      name: "Elu Emina",
      measurements: {
        height: "6' 1\" / 185cm",
        chest: "40\" / 102cm",
        waist: "32\" / 81cm",
        shoe: "10 UK / 44 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 10.jpeg"
    },
    {
      name: "Shofowora Samuel Oluwafemi",
      measurements: {
        height: "6' 0\" / 183cm",
        chest: "38\" / 97cm",
        waist: "30\" / 76cm",
        shoe: "9 UK / 43 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 11.jpeg"
    },
    {
      name: "Victor Unanah",
      measurements: {
        height: "6' 2\" / 188cm",
        chest: "42\" / 107cm",
        waist: "34\" / 86cm",
        shoe: "11 UK / 45 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 12.jpeg"
    },
    {
      name: "Ben",
      measurements: {
        height: "6' 0\" / 183cm",
        chest: "40\" / 102cm",
        waist: "32\" / 81cm",
        shoe: "10 UK / 44 EU",
        hair: "Black",
        eyes: "Brown"
      },
      image: "/allimg/asset 13.jpeg"
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroPanel className="left-panel">
          <img src="/allimg/asset 2.jpeg" alt="Fashion model with hat" />
          <SideText left>WHATSAPP TWITTER INSTAGRAM FACEBOOK</SideText>
        </HeroPanel>
        <HeroPanel className="center-panel">
          <img src="/allimg/asset 3.jpeg" alt="Professional model pose" />
          <BookButton>Book Lifestyle Models</BookButton>
        </HeroPanel>
        <HeroPanel className="right-panel">
          <img src="/allimg/asset 4.jpeg" alt="Close-up fashion portrait" />
          <SideText right>SEND A MESSAGE</SideText>
        </HeroPanel>
      </HeroSection>

      <PageTitle>Welcome to Box Models - Top Modelling Agency in Lagos Nigeria</PageTitle>

      <ModelSection>
        <h2>Female Models</h2>
        <ModelGrid>
          <Slider {...sliderSettings}>
            {femaleModels.map((model, index) => (
              <div key={index}>
                <ModelCard>
                  <img src={model.image} alt={model.name} />
                  <ModelDetails className="model-details">
                    <ModelMeasurement>
                      <span className="label">Height:</span>
                      <span className="value">{model.measurements.height}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Dress:</span>
                      <span className="value">{model.measurements.dress}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Bust:</span>
                      <span className="value">{model.measurements.bust}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Waist:</span>
                      <span className="value">{model.measurements.waist}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Shoe:</span>
                      <span className="value">{model.measurements.shoe}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Hair:</span>
                      <span className="value">{model.measurements.hair}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Eyes:</span>
                      <span className="value">{model.measurements.eyes}</span>
                    </ModelMeasurement>
                  </ModelDetails>
                </ModelCard>
                <ModelName>{model.name}</ModelName>
              </div>
            ))}
          </Slider>
        </ModelGrid>
      </ModelSection>

      <ModelSection>
        <h2>Male Models</h2>
        <ModelGrid>
          <Slider {...sliderSettings}>
            {maleModels.map((model, index) => (
              <div key={index}>
                <ModelCard>
                  <img src={model.image} alt={model.name} />
                  <ModelDetails className="model-details">
                    <ModelMeasurement>
                      <span className="label">Height:</span>
                      <span className="value">{model.measurements.height}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Chest:</span>
                      <span className="value">{model.measurements.chest}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Waist:</span>
                      <span className="value">{model.measurements.waist}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Shoe:</span>
                      <span className="value">{model.measurements.shoe}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Hair:</span>
                      <span className="value">{model.measurements.hair}</span>
                    </ModelMeasurement>
                    <ModelMeasurement>
                      <span className="label">Eyes:</span>
                      <span className="value">{model.measurements.eyes}</span>
                    </ModelMeasurement>
                  </ModelDetails>
                </ModelCard>
                <ModelName>{model.name}</ModelName>
              </div>
            ))}
          </Slider>
        </ModelGrid>
      </ModelSection>

      <InstagramSection>
        <h2>See Our Posts On Instagram</h2>
        <InstagramGrid>
          <img src="/allimg/asset 6.jpeg" alt="Instagram post" />
          <img src="/allimg/asset 7.jpeg" alt="Instagram post" />
          <img src="/allimg/asset 8.jpeg" alt="Instagram post" />
          <img src="/allimg/asset 9.jpeg" alt="Instagram post" />
        </InstagramGrid>
        <InstagramButtons>
          <LoadMoreButton>Load More...</LoadMoreButton>
          <FollowButton>Follow us on Instagram</FollowButton>
        </InstagramButtons>
      </InstagramSection>
    </HomeContainer>
  );
}

export default Home; 