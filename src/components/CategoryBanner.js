import React, { Component, Fragment } from 'react';
import {Column, Notification, Title} from 'rbx'
import '../styles/CategoryBanner.scss'
// import { Container } from './styles';

export default class CategoryBanner extends Component {
  render() {
    return (
        <Fragment>
            <Title>Coffee-Break</Title>
            <Column.Group>
                <Column>
                   <Notification color="primary">
                       Imagem aqui
                   </Notification>
                </Column>
            </Column.Group>
        </Fragment>
    )
  }
}
