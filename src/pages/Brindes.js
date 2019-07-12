import React, { Component, Fragment } from 'react';
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Brindes extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/261654/pexels-photo-261654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Josi Canetas Personalizadas', price: '400,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/109361/pexels-photo-109361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'KeyChain chaveiros', price: '300,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/734543/pexels-photo-734543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Paola Copos', price: '599,90', stars: [1,2,3]},
        {imageUrl: 'https://images.pexels.com/photos/970206/pexels-photo-970206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Boy-Mini-Toy', price: '80,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/1329305/pexels-photo-1329305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Personal Gifts', price: '300,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1061581/pexels-photo-1061581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Candy Brindes', price: '200,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/42067/air-balloon-balloons-birthday-42067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Baloony - Balões Personalizados', price: '30,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Flunky - Brinquedos personalizados', price: '1200,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/1842627/pexels-photo-1842627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Susan Bottle - Garrafas', price: '2300,00', stars: [1,2,3,4,5]},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
                title="Brindes"
              imageUrl='https://images.pexels.com/photos/269887/pexels-photo-269887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">Aquele brinde especial para lembrarem do seu evento!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
