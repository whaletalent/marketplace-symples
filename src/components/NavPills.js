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
                    //O Map percorre todos os itens do array do state e retorna com o formato definido no item
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