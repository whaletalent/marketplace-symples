import React, { Component, Fragment } from 'react';
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Palestrantes extends Component {
  state={
    cards:[
        {imageUrl: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Tim Brand - Intrutor Financeiro', price: '2500,00'},
        {imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Jefferson Fernandes - Literatura Brasileira', price: '3000,00'},
        {imageUrl: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Richard Thompson - Business Inteligence', price: '4600,99'},
        {imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Jéssica Amaral - CEO at Google', price: '7800,00'},
        {imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Marta Briggs - Atriz', price: '1280,00'},
        {imageUrl: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Carl Washington - Analista de Negócios', price: '1200,00'},
        {imageUrl: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', Titulo: 'Paola Prado - Designer', price: '3800,00'},
        {imageUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Tania Serique - Promotora de Eventos', price: '6600,00'},
        {imageUrl: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', Titulo: 'Jonas Marques - Youtuber', price: '300,00'},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner
                title="Palestrantes"
              imageUrl='https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Title className="text">Os melhores palestrantes do mercado!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
