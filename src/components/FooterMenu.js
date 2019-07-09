import React, {Component, Fragment} from 'react'
import {Column, Title} from 'rbx'
import '../styles/Footer.scss'

export default class ImageContainer extends Component{
    state={
        items:[
            {titulo: 'Sobre', subItems:['A Symplifica', 'Termos de uso', 'Política de priivacidade']},
            {titulo: 'Venda aqui', subItems:['Vantagens', 'Depoimentos']},
            {titulo: 'Redes Sociais', subItems:['Instagram', 'Facebook']},
            {titulo: 'Ajuda', subItems:['Como Comprar', 'Como Vender', 'Atendimento']},
        ]
    }
    render(){
        return(
            <Fragment>
                <Column.Group multiline centered offset className="footerMenuBox">
                    {
                        this.state.items.map( item => {
                            return(
                                <Column narrow>
                                    <Title size={4}> {item.titulo} </Title>
                                    
                                    {item.subItems.map( subItem =>{
                                        return(
                                            <p>{subItem}</p>
                                        )
                                    })}
                                </Column>
                            )
                        })
                    }
                
                </Column.Group>
            </Fragment>
        )
    }
}