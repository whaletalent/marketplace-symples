import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import { Button, Title, Column, Image } from 'rbx'
import '../styles/LaunchModal.scss'

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal style={{ zIndex: '9999' }}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Adicionar Produto</Modal.Title>
        </Modal.Header>
        <Column.Group className="modalColumns">

          <Column size="half" className="firstColumn" >
            <Title size="5">{this.props.produto}</Title>
            <Image.Container>
              <Image className="popupImage"
                src={this.props.imageUrl}
              />
            </Image.Container>
            <Title size="6">{this.props.preco}</Title>
            <Title size="6">Serve 40 pessoas</Title>
            <Title size="6">Disponível em 02 dias úteis</Title>
            <Button color="primary-variation2">Adicionar ao Carrinho</Button>
          </Column>
          {/* produto destaque */}
          <Column size="half" className="firstColumn" >
            <Title  size="5">Compare!</Title>
            <Image.Container >
              <Image className="popupImage"
                src={this.props.imageUrl}
              />
            </Image.Container>
            <Title  size="6">{this.props.preco}</Title>
            <Title  size="6">Serve 40 pessoas</Title>
            <Title  size="6">Disponível em 02 dias úteis</Title>
            <Button color="primary-variation2">Adicionar ao Carrinho</Button>
          </Column>

        </Column.Group>
        <Modal.Footer closeButton>
          <Button color="primary-variation2">Finalizar Pedido</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default class LaunchModal extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <a
          onClick={() => this.setState({ modalShow: true })}
        >
          {this.props.children}
        </a>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
          imageUrl={this.props.imagem}
          produto={this.props.title}
          preco={this.props.price}
        />
      </div>
    );
  }
}