import React, { Component, Fragment } from 'react';
import Grid from '../components/Grid'
import {Title} from 'rbx'
import ImageContainer from '../components/ImageContainer'
// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
        <Fragment>
            <Grid></Grid>
            <Title>Não perca tempo e peça logo seu Cofee Break!</Title>
            <ImageContainer></ImageContainer>
        </Fragment>    
    )
  }
}
