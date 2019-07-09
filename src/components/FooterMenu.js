import React, {Component, Fragment} from 'react'
import {Footer, Content} from 'rbx'
import ImageCard from './ImageCard';

export default class ImageContainer extends Component{
    state={
        itens:[
            {titulo: 'Sobre', subItems:['A Symplifica', 'Termos de uso', 'Política de priivacidade']},
            {titulo: 'Venda aqui', subItems:['Vantagens', 'Depoimento', 'Política de priivacidade']},
            {titulo: 'Redes Sociais', subItems:['A Symplifica', 'Termos de uso', 'Política de priivacidade']},
            {titulo: 'Ajuda', subItems:['A Symplifica', 'Termos de uso', 'Política de priivacidade']},
        ]
    }
    render(){
        return(
            <Fragment>
                <Column.Group multiline centered>
               
                    <Column narrow>
                    
                    </Column>
                
                </Column.Group>
            </Fragment>
        )
    }
}