import React, {Component, Fragment} from 'react'
import {Tile, Box, Title} from 'rbx'
import '../styles/Gird.scss'

export default class Grid extends Component{
    render(){
        return(
            <Fragment>
                <Tile kind="ancestor" className="parent">
                    <Tile kind="parent">
                        <Tile as={Box} kind="child">
                        <Title as="p">Titulo 1</Title>
                        <p>
                            Imagem aqui
                        </p>
                        
                        </Tile>
                    </Tile>

                    <Tile size={4} kind="parent" vertical>
                        <Tile as={Box} kind="child">
                        <Title as="p">Titulo 2</Title>
                        <p>
                           imagem aqui
                        </p>
                        </Tile>
                        <Tile as={Box} kind="child">
                        <Title as="p">Titulo3</Title>
                        <p>
                            Imagem aqui
                        </p>
                        </Tile>
                    </Tile>
                </Tile>
            </Fragment>
        )
    }
}