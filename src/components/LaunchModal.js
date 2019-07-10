import React, {Component }from 'react';
import {Modal} from 'react-bootstrap'
import {Button, Title} from 'rbx'

class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal style={{zIndex: '9999'}}
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton>
            <Modal.Title>Acesse nosso conteúdo especial!</Modal.Title>
          </Modal.Header>
            lols
             
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
          <Button
            color="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            CADASTRE-SE
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </div>
      );
    }
  }