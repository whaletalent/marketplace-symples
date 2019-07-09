import React, {Fragment} from 'react';
import './App.scss';
import {Title} from 'rbx'

import HeroSection from './components/HeroSection'
import FooterCopyright from './components/FooterCopyright'
import FooterMenu from './components/FooterMenu'
import ImageContainer from './components/FooterCopyright';
import Home from './pages/Home';

import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <div className="content">
        <Routes/>        
      </div>
      <FooterMenu/>
      <FooterCopyright></FooterCopyright>
    </div>
  );
}

export default App;
