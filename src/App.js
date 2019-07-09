import React, {Fragment} from 'react';
import './App.scss';
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
      <div className="content">
        {/* <NavPills></NavPills> */}
        <Grid></Grid>
        <Title>Não perca tempo e peça logo seu Cofee Break!</Title>
        <ImageContainer></ImageContainer>
      </div>
      <FooterMenu/>
      <FooterCopyright></FooterCopyright>
    </div>
  );
}

export default App;
