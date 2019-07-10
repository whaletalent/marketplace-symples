import React, {Component, Fragment} from 'react'
import {Card, Media, Image, Content, Title} from 'rbx'
import '../styles/ImageCard.scss'
import LaunchModal from './LaunchModal'

export default class ImageCard extends Component{
   
    render(){
        return(
            <Fragment>
                <LaunchModal
                    imagem={this.props.cardImage}
                    title={this.props.cardTitle}
                    price={this.props.price}
                >
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
                            </Media.Item>
                            </Media>
                        </Card.Content>
                    </Card>
                </LaunchModal>
            </Fragment>
        )
    }
}