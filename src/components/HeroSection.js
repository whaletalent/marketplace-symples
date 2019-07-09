import React, {Component, Fragment} from 'react'
import {Hero, Container, Title, Input, Tab} from 'rbx'

export default class HeroSection extends Component{
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
                    <Hero.Foot>
                        <Container>
                            <Tab.Group as="nav" type="boxed" fullwidth>
                            {
                                this.state.categories.map( category => {
                                    return(
                                        // usar active para o item ativo do menu
                                        <Tab>{category}</Tab>
                                    )
                                })
                            }
                            </Tab.Group>
                        </Container>
                    </Hero.Foot>
                </Hero>
            </Fragment>
        )
    }
}