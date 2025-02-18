import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Display:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    font-size: 1rem;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Display', serif;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.75rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles; 