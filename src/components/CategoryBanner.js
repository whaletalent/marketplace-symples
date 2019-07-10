import React, { Component, Fragment } from 'react';
import {Column, Notification, Title} from 'rbx'
import '../styles/CategoryBanner.scss'
// import { Container } from './styles';

export default class CategoryBanner extends Component {
  image= {
    backgroundImage: `url(${this.props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  render() {
    return (
        <Fragment>
            <Title className="text">{this.props.title}</Title>
            <Column.Group style={this.image}>
                <Column className="bannerImage">
                   
                </Column>
            </Column.Group>
        </Fragment>
    )
  }
}
