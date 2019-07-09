import React, { Component, Fragment } from 'react';
import Grid from '../components/Grid'
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
import CategoryBanner from '../components/CategoryBanner';
// import { Container } from './styles';

export default class Coffee extends Component {
  state={
    cards:[
        {imageUrl: 'https://i.imgur.com/RkhxDSH.jpg', Titulo: 'coffeee', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/mLkWMOx.jpg', Titulo: 'Dog', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/S8XcKjA.jpg', Titulo: 'tituloe', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/kcT3BaH.jpg', Titulo: 'Dog', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/cN3V2YM.jpg', Titulo: 'Dog', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/SSEH9wH.jpg', Titulo: 'Dog', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/kcT3BaH.jpg', Titulo: 'Dog', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/cN3V2YM.jpg', Titulo: 'Dog', price: 'xx'},
        {imageUrl: 'https://i.imgur.com/SSEH9wH.jpg', Titulo: 'Dog', price: 'xx'},
        
    ]
    
  }
  render() {
    return (
        <Fragment>
            <CategoryBanner/>
            <Title>Não perca tempo e peça logo seu Cofee Break!</Title>
            <ImageContainer cards={this.state.cards}></ImageContainer>
        </Fragment>    
    )
  }
}
