import React, { Component, Fragment } from 'react';
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Buffet extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Grand Mama', price: '4500,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/2291347/pexels-photo-2291347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Las Marias', price: '3300,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/2286175/pexels-photo-2286175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Formiga Caseira', price: '1000,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/5944/food-lunch-mexican-nachos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Bounty Bunny', price: '2300,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/2264036/pexels-photo-2264036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Shuratto', price: '1100,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1383787/pexels-photo-1383787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Daniela Buffet', price: '1440,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1121482/pexels-photo-1121482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: "Chef's Rule", price: '1220,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1485806/pexels-photo-1485806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Marchiatto', price: '1400,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Silvanna', price: '4500,00', stars: [1,2,3,4]},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
                title="Buffet"
              imageUrl='https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">Escolha seu Buffet!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
