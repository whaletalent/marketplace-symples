import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap'
import { Button, Title, Column, Image } from 'rbx'
import '../../styles/LaunchModal.scss'
import FormModal from '../Modals/FormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from 'react-icons/fa';
import '../../styles/ImageCard.scss'

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
          <Modal.Title >Gerencie suas cotações</Modal.Title>
        </Modal.Header>
        <Column.Group className="modalColumns">

          <Column size="half" className="firstColumn" style={{display: 'flex'}}>
            
            <Image.Container>
              <Image className="popupImage"
                src='https://i.imgur.com/RkhxDSH.jpg'
              />
            </Image.Container>
            <Title size="5">Padaria 3 Amores</Title>
            <Title size="6">760,00</Title>
            <Title size="6">Serve 40 Pessoas</Title>
            <Title size="6">Disponível em 02 dias úteis</Title>
            <Title size="6" className='reviews'>
                <FaStar style={{color: 'red !important'}}/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </Title>
            <Button color="primary-variation2">Confirmar Compra</Button>
          </Column>
          {/* produto destaque */}
          <Column size="half" className="firstColumn" style={{display: 'flex'}}>
            
            <Image.Container>
              <Image className="popupImage"
                src='https://i.imgur.com/mLkWMOx.jpg'
              />
            </Image.Container>
            <Title size="5">Coffee-Break Doceria da Júlia</Title>
            <Title size="6">650,00</Title>
            <Title size="6">Serve 50 Pessoas</Title>
            <Title size="6">Disponível em 03 dias úteis</Title>
            <Title size="6" className='reviews'>
                <FaStar style={{color: 'red !important'}}/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </Title>
            <Button color="primary-variation2">Confirmar Compra</Button>
          </Column>

        </Column.Group>
        <Modal.Footer closeButton>
          
        </Modal.Footer>
      </Modal>
    );
  }
}

export default class CotacoesModal extends React.Component {
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