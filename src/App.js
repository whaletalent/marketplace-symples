import React, {Fragment} from 'react';
import './App.css';
import {Title} from 'rbx'

import HeroSection from './components/HeroSection'
import NavPills from './components/NavPills';
import Grid from './components/Grid';
import ImageContainer from './components/ImageContainer'
import FooterCopyright from './components/FooterCopyright'
import FooterMenu from './components/FooterMenu'

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <NavPills></NavPills>
      <Grid></Grid>
      <Title>Não perca tempo e peça logo seu Cofee Break!</Title>
      <ImageContainer></ImageContainer>
      <FooterMenu/>
      <FooterCopyright></FooterCopyright>
    </div>
  );
}

export default App;
