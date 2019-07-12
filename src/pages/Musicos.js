import React, { Component, Fragment } from 'react';
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Musicos extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/2167139/pexels-photo-2167139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Los Matamos', price: '700,00', stars: [1]},
        {imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Josh Tri', price: '700,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Julia&Sergio', price: '800,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1699160/pexels-photo-1699160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'MC Paulinha', price: '900,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1864642/pexels-photo-1864642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Juliana Carolina', price: '1200,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1563868/pexels-photo-1563868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Cuia-Hair Band', price: '3500,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'DJ Erick', price: '4400,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Martha Freezz', price: '1380,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/1808711/pexels-photo-1808711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Samantha', price: '3000,00', stars: [1,2,3,4,5]},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
                title="Músicos"
              imageUrl='https://images.pexels.com/photos/2091374/pexels-photo-2091374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">Os melhores músicos em um só lugar!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
