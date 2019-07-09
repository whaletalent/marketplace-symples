import React, {Fragment} from 'react';
import './App.css';
import {Title} from 'rbx'

import HeroSection from './components/HeroSection'
import NavPills from './components/NavPills';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <NavPills></NavPills>
      <Grid></Grid>
      <Title>Não perca tempo e peça logo seu Cofee Break!</Title>
    </div>
  );
}

export default App;
