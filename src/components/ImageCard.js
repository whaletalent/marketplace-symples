import React, {Component, Fragment} from 'react'
import {Card, Media, Image, Content, Title} from 'rbx'
import '../styles/ImageCard.scss'

export default class ImageCard extends Component{
    render(){
        return(
            <Fragment>
                <Card centered className='cardContainer'>
                    <Card.Image>
                        <Image.Container size="4by3">
                        <Image src={this.props.cardImage} />
                        </Image.Container>
                    </Card.Image>
                    <Card.Content centered>
                        <Media>
                        
                        <Media.Item>
                            <Title as="p" size={4}>
                                {this.props.cardTitle}
                            </Title>
                            
                        </Media.Item>
                        </Media>
                    </Card.Content>
                </Card>
            </Fragment>
        )
    }
}