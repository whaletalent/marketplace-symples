import React, { Component, Fragment } from 'react';
import Grid from '../components/Grid'
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Coffee extends Component {
  state={
    cards:[
        {imageUrl: 'https://i.imgur.com/RkhxDSH.jpg', Titulo: 'Padaria 3 Amores', price: '760,00'},
        {imageUrl: 'https://i.imgur.com/mLkWMOx.jpg', Titulo: 'Coffee-Break Doceria da Júlia', price: '660,00'},
        {imageUrl: 'https://i.imgur.com/S8XcKjA.jpg', Titulo: 'Maísa Sorriso & Festas', price: '890,00'},
        {imageUrl: 'https://i.imgur.com/kcT3BaH.jpg', Titulo: 'Padaria Sweet Life', price: '980,00'},
        {imageUrl: 'https://i.imgur.com/cN3V2YM.jpg', Titulo: 'Massamix Coffee-break', price: '1110,00'},
        {imageUrl: 'https://i.imgur.com/SSEH9wH.jpg', Titulo: 'Delícias da Casa', price: '800,00'},
        {imageUrl: 'https://images.pexels.com/photos/42064/background-baguette-baked-bakery-42064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Sonho de Padaria', price: '680,00'},
        {imageUrl: 'https://images.pexels.com/photos/946543/pexels-photo-946543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Vegan Coffees', price: '1480,00'},
        {imageUrl: 'https://images.pexels.com/photos/1426711/pexels-photo-1426711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Dior Bakery', price: '780,00'},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
            title="Coffee-break"
              imageUrl='https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">Não perca tempo e escolha nossas melhores ofertas!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
