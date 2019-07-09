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
                                <Title as="p" className="destaqueTitulo">Titulo</Title>
                                <p>
                                    Subtitulo aqui auehuaehauehuaehuaheuaheae
                                </p>
                            </div>
                        
                        </Tile>
                    </Tile>

                    <Tile size={4} kind="parent" vertical>
                        <Tile as={Box} kind="child" className="destaque2">
                            <div className="background">
                                <Title as="p" className="destaqueTitulo">Titulo</Title>
                                <p>
                                    Subtitulo aqui auehuaehauehuaehuaheuaheae
                                </p>
                            </div>
                        </Tile>
                        <Tile as={Box} kind="child" className="destaque3">
                            <div className="background">
                                <Title as="p" className="destaqueTitulo">Titulo</Title>
                                <p>
                                    Subtitulo aqui auehuaehauehuaehuaheuaheae
                                </p>
                            </div>
                        </Tile>
                    </Tile>
                </Tile>
            </Fragment>
        )
    }
}