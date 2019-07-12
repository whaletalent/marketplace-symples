import React, { Component, Fragment } from 'react';
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Locais extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Teatro Vera Holtz', price: '8800,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Auditório Sandra Brunet', price: '4400,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Club Union', price: '3400,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Restaurante Plazza', price: '1200,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Restaurante Club Life', price: '2200,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'União Esportiva Club', price: '2300,00', stars: [1,2,3]},
        {imageUrl: 'https://images.pexels.com/photos/2387566/pexels-photo-2387566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Doran Avenue', price: '3900,00', stars: [1,2,3,4,5]},
        {imageUrl: 'https://images.pexels.com/photos/248673/pexels-photo-248673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Amazonia ExpoCenter', price: '1000,00', stars: [1,2,3,4]},
        {imageUrl: 'https://images.pexels.com/photos/274/people-show-chairs-gym.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Palcoon!', price: '2000,00', stars: [1,2,3,4]},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
                title="Locais"
              imageUrl='https://images.pexels.com/photos/69815/florida-state-university-westcott-building-auditorium-interior-69815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">Escolha o melhor local para seu evento!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
