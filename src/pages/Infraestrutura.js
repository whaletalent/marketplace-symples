import React, { Component, Fragment } from 'react';
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Infraestrutura extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Audio&Som Filmagens', price: '1200,00'},
        {imageUrl: 'https://images.pexels.com/photos/1124960/pexels-photo-1124960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Cleitinho Lights', price: '400,00'},
        {imageUrl: 'https://images.pexels.com/photos/159108/light-lamp-electricity-power-159108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Megan Iluminação Temática', price: '4000,00'},
        {imageUrl: 'https://images.pexels.com/photos/2312124/pexels-photo-2312124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'César Decorações', price: '1200,00'},
        {imageUrl: 'https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'CIA das Mesas e Cadeiras', price: '4000,00'},
        {imageUrl: 'https://images.pexels.com/photos/2167152/pexels-photo-2167152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Som And Palco', price: '2000,00'},
        {imageUrl: 'https://images.pexels.com/photos/302879/pexels-photo-302879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Auidioventor Sound', price: '4500,00'},
        {imageUrl: 'https://images.pexels.com/photos/462503/pexels-photo-462503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Show Time - Sons para Shows', price: '6600,00'},
        {imageUrl: 'https://images.pexels.com/photos/1343524/pexels-photo-1343524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Cristiane Palcos', price: '2000,00'},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
                title="Infraestrutura"
              imageUrl='https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">A melhor Infraestrurura para o seu evento!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
