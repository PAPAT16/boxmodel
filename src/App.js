import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Models from './components/Models';
import Influencers from './components/Influencers';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <Footer />
        <WhatsAppButton />
      </AppContainer>
    </Router>
  );
}

export default App;
