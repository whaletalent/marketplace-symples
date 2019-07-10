import React, { Component, Fragment } from 'react';
import Grid from '../components/Grid'
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import LaunchModal from '../components/LaunchModal'
// import { Container } from './styles';

export default class Home extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/1864642/pexels-photo-1864642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Juliana Carolina', price: '1200,00'},
        {imageUrl: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Jonas Marques - Youtuber', price: '300,00'},
        {imageUrl: 'https://images.pexels.com/photos/2167152/pexels-photo-2167152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Som And Palco', price: '2000,00'},
        {imageUrl: 'https://images.pexels.com/photos/261654/pexels-photo-261654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Josi Canetas Personalizadas', price: '400,00'},
        {imageUrl: 'https://images.pexels.com/photos/1383787/pexels-photo-1383787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Daniela Buffet', price: '1440,00'},
        {imageUrl: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Teatro Vera Holtz', price: '8800,00'},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            {/* <LaunchModal/> */}
            <Grid></Grid>
            <Title className="text">Não perca tempo e contrate também!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
