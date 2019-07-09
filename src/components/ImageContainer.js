import React, {Component, Fragment} from 'react'
import {Column, Notification} from 'rbx'
import ImageCard from './ImageCard';
import '../styles/imageContainer.scss'

export default class ImageContainer extends Component{
    state={
        cards:[
            {imageUrl: 'https://i.imgur.com/RkhxDSH.jpg', Titulo: 'Dog'},
            {imageUrl: 'https://i.imgur.com/mLkWMOx.jpg', Titulo: 'Dog'},
            {imageUrl: 'https://i.imgur.com/S8XcKjA.jpg', Titulo: 'tituloe'},
            {imageUrl: 'https://i.imgur.com/kcT3BaH.jpg', Titulo: 'Dog'},
            {imageUrl: 'https://i.imgur.com/cN3V2YM.jpg', Titulo: 'Dog'},
            {imageUrl: 'https://i.imgur.com/SSEH9wH.jpg', Titulo: 'Dog'},
            
        ]
        
    }
    render(){
        return(
            <Column.Group multiline centered>

                    {
                        this.state.cards.map( card => {
                            return(
                                <Column className="cardColumn" size='one-third'>
                                    
                                    <ImageCard 
                                        cardImage={card.imageUrl}
                                        cardTitle={card.Titulo}/>
                                    
                                </Column>
                            )
                        })
                    }
            
            </Column.Group>
        )
    }

}