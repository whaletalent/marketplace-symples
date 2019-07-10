import React, {Component, Fragment} from 'react'
import {Tile, Box, Title} from 'rbx'
import '../styles/Gird.scss'

export default class Grid extends Component{
    render(){
        return(
            <Fragment>
                <Tile kind="ancestor" className="parent">
                    <Tile kind="parent" >
                        <Tile as={Box} kind="child" className="destaque1">
                            <div className="background">
                                <Title as="p" className="destaqueTitulo">Cofee-Break: Doceria da Júlia</Title>
                                <p>
                                    Café completo, de Segunda à Sábado, até 19,00 por pessoa
                                </p>
                            </div>
                        
                        </Tile>
                    </Tile>

                    <Tile size={4} kind="parent" vertical>
                        <Tile as={Box} kind="child" className="destaque2">
                            <div className="background">
                                <Title as="p" className="destaqueTitulo">Música: Júlia & Sérgio</Title>
                                <p>
                                    A Melhor dupla sertaneja da região. Contrate para seu evento já!
                                </p>
                            </div>
                        </Tile>
                        <Tile as={Box} kind="child" className="destaque3">
                            <div className="background">
                                <Title as="p" className="destaqueTitulo">Palestrante: Tim Brand</Title>
                                <p>
                                    Instrutor Financeiro, Mestrado em Society Economy, Harvard
                                </p>
                            </div>
                        </Tile>
                    </Tile>
                </Tile>
            </Fragment>
        )
    }
}