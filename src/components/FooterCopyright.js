import React, {Component, Fragment} from 'react'
import {Footer, Content, Column, Image} from 'rbx'
import LogoFooter from '../assets/logo_symplifica_white.svg';
import '../styles/Footer.scss'

export default class ImageContainer extends Component{
    render(){
        return(
            <Fragment>
                <Footer className="copyrightSection">
                    <Content textAlign="centered">
                        <Column.Group centered>
                            <Column size="one-quarter">
                                <Image size="1by3" src={LogoFooter} />
                            </Column>
                        </Column.Group>
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