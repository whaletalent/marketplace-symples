import React, {Component, Fragment} from 'react'
import {Column, Notification} from 'rbx'
import ImageCard from './ImageCard';
import '../styles/imageContainer.scss'

export default class ImageContainer extends Component{
    
    render(){
        return(
            <Column.Group multiline centered>
                    {
                        this.props.cards.map( card => {
                            return(
                                <Column className="cardColumn" size='one-third'>                                   
                                    <ImageCard 
                                        cardImage={card.imageUrl}
                                        cardTitle={card.Titulo}
                                        price={` R$: ${card.price}`}
                                        stars={card.stars}
                                        />  
                                </Column>
                            )
                        })
                    }
            </Column.Group>
        )
    }

}