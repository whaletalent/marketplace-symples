import React, {Component, Fragment} from 'react'
import {Footer, Content} from 'rbx'
import ImageCard from './ImageCard';

export default class ImageContainer extends Component{
    render(){
        return(
            <Fragment>
                <Footer>
                    <Content textAlign="centered">
                        <p>
                            Logo Aqui
                        </p>
                        <p>
                            Symplifica® 2019 CNPJ: 00.000.000/0000-00 • 
                        </p>
                        <p>
                            Todos os produtos são vendidos apenas online. 
                        </p>
                    </Content>
                </Footer>
            </Fragment>
        )
    }
}