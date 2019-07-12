import React, { Component, Fragment } from "react";
import { Hero, Container, Title, Input, Tab, Column, Image } from "rbx";
import "../styles/HeroSection.scss";
import Logo from "../assets/logo_symplifica.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaCartPlus, FaShoppingBag } from "react-icons/fa";
import CotacoesModal from "./Modals/CotacoesModal";

export default class HeroSection extends Component {
  state = {
    categories: [
      { name: "Coffee Break", link: "coffee-break" },
      { name: "Infraestrutura", link: "infraestrutura" },
      { name: "Palestrantes", link: "palestrantes" },
      { name: "Locais", link: "locais" },
      { name: "Brindes", link: "brindes" },
      { name: "Músicos ", link: "musicos" },
      { name: "Buffet", link: "buffet" }
    ]
  };
  render() {
    return (
      <Fragment>
        <Hero color="default-primary" className="heroFoot">
          <Hero.Body>
            <Container>
              <Link to={`/`}>
              <Column.Group centered>
                <Column size="one-quarter">
                  <Image class="logoFooter" size="1by3" src={Logo} />
                </Column>
              </Column.Group>
              </Link>
              <Input
                className="inputHero"
                type="text"
                color="default-primary"
                placeholder="Digite o que precisa"
              />
              <Title className="subtitle" size="3" subtitle>
                Tudo para seu evento
              </Title>
            </Container>
          </Hero.Body>
          <Hero.Foot className="categoryMenu">
            <Container textAlign="centered">
              <Tab.Group as="nav" type="boxed" fullwidth align="center">
                  {this.state.categories.map(category => {
                    return (
                      <Link to={`/${category.link}`}>
                        <Tab className="categoria">{category.name}</Tab>                   
                      </Link>
                      // usar active para o item ativo do menu     
                      )
                    })}
                    <CotacoesModal>
                      <Tab className="myBag">Cotações</Tab>
                    </CotacoesModal>

                
              </Tab.Group>
            </Container>
          </Hero.Foot>
        </Hero>
      </Fragment>
    );
  }
}
