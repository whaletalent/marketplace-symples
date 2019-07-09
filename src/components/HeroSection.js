import React, {Component, Fragment} from 'react'
import {Hero, Container, Title, Input} from 'rbx'

export default class HeroSection extends Component{
    render(){
        return(
            <Fragment>
                <Hero color="primary">
                    <Hero.Body>
                        <Container>
                        <Title>Logo</Title>
                        <Input type="text" color='primary' placeholder='Digite o que precisa' />
                        <Title as="h2" subtitle>
                            Hero Subtitle
                        </Title>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Fragment>
        )
    }
}