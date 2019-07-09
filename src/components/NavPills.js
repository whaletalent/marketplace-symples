import React, {Component, Fragment} from 'react'

import {Column, Notification} from 'rbx'

export default class NavPills extends Component{
    state={
        categories:[
            'Cofee Break',
            'Infraestrutura',
            'Palestrantes',
            'Locais',
            'Brindes',
            'Músicos ',
            'Buffet'
        ]
    }
    render(){
        return(
            <Column.Group multiline centered>
                {
                    this.state.categories.map( item => {
                        return(
                            <Column narrow>
                                <Notification color="primary" textAlign="centered">
                                    {item}
                                </Notification>
                            </Column>
                        )
                    })
                }
            
            </Column.Group>
        )
    }
}