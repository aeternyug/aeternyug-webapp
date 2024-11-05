import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Apply from './components/Apply'; // Import Apply Component

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    scroll-behavior: smooth;
  }
`;

const AppContainer = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Introduction />
                <AboutUs />
                <Services />
                <Team />
                <Contact />
              </>
            }
          />
          <Route path="/apply/:role" element={<Apply />} /> {/* Dynamic Route for Apply Page */}
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
