import React, {Component, Fragment} from 'react'
import {Card, Media, Image, Button, Title} from 'rbx'
import '../styles/ImageCard.scss'
import LaunchModal from './LaunchModal'
import { FaStar } from 'react-icons/fa';

export default class ImageCard extends Component{
   
    render(){
        return(
            <Fragment>
                    <Card centered className='cardContainer'>
                        <Image size="4by3" src={this.props.cardImage} />
                        <Card.Content centered className="cardTitle">
                            <Media>
                            
                            <Media.Item className="textContent">
                                <Title className="textTitle" size={6}>
                                    {this.props.cardTitle}
                                </Title>
                                {/* <Title className="textTitle" subtitle size={6}>
                                    {this.props.price}
                                </Title> */}
                                <Title className="textTitle reviews" color="default-primary" subtitle size={6}>  
                                    {
                                       this.props.stars.map( s =>{
                                           return (<FaStar />)
                                       })
                                    }
                                </Title>
                                <LaunchModal
                                    imagem={this.props.cardImage}
                                    title={this.props.cardTitle}
                                    price={this.props.price}
                                >
                                    <Button className="cotacaoButton" color="primary-variation2">Solicitar Cotação</Button>
                                </LaunchModal>
                            </Media.Item>
                            </Media>
                        </Card.Content>
                    </Card>
            </Fragment>
        )
    }
}