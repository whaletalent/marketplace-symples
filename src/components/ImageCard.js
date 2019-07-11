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
                                <Title className="textTitle" subtitle size={6}>
                                    {this.props.price}
                                </Title>
                                    <LaunchModal
                                        imagem={this.props.cardImage}
                                        title={this.props.cardTitle}
                                        price={this.props.price}
                                    >
                                        <Button color="default-primary">Solicitar Cotação</Button>
                                    </LaunchModal>
                                <Title className="textTitle" color="default-primary" subtitle size={6}>  
                                    {
                                       this.props.stars.map( s =>{
                                           return (<FaStar/>)
                                       })
                                    }
                                </Title>
                            </Media.Item>
                            </Media>
                        </Card.Content>
                    </Card>
            </Fragment>
        )
    }
}