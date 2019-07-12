import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap'
import { Button, Title, Column, Image } from 'rbx'
import '../styles/LaunchModal.scss'
import FormModal from './Modals/FormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MyVerticallyCenteredModal extends React.Component {
  notify = () => {
    toast.success("Solicitação enviada!", {
      position: toast.POSITION.TOP_CENTER
    });
    
  }
  render() {
    return (
      <Modal style={{ zIndex: '9999' }}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title >Solicite cotação</Modal.Title>
        </Modal.Header>
        <Column.Group className="modalColumns">

          <Column size="half" className="firstColumn" >
            <FormModal></FormModal>
          </Column>
          <Column size="half" className="firstColumn productColumn" >
            
            <Title size="4">{this.props.produto}</Title>
            <Image.Container>
              <Image className="popupImage"
                src={this.props.imageUrl}
              />
            </Image.Container>
            {/* <Title size="6">{this.props.preco}</Title>
            <Title size="6">props.text</Title>
            <Title size="6">props.text2</Title> */}
            <Button color="primary-variation2"
            onClick={this.notify}
            >
              Solicitar Orçamento
            </Button>
            <ToastContainer />
          </Column>
          {/* produto destaque */}

        </Column.Group>
        <Modal.Footer closeButton>
          
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
      <Fragment>
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
      </Fragment>
    );
  }
}