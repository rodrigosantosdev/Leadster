import React from 'react'
import Link from "next/link"
import { ContainerGrid } from "../Container/style"
import { Logo } from "../Logo"
import { TfiInstagram, TfiFacebook, TfiLinkedin } from 'react-icons/tfi'
import { 
  Content, 
  Copyright, 
  FooterContainer, 
  MenuFooter, 
  MenuFooterContainer, 
  MenuLinks,
  MenuSocial,
  Slogan,
  IconWrapper, 
  CopyrightContainer} from "./style"

export const Footer = () => {
  return (
    <FooterContainer>
      <ContainerGrid>
        <Content>
          <Logo />
          <Slogan>Transformando visitantes em clientes.</Slogan>

          <MenuFooterContainer>
            <MenuFooter>
              <MenuLinks>
                <span>Links Principais</span>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/ferramentas">Ferramentas</Link></li>
                  <li><Link href="/preços">Preços</Link></li>
                  <li><Link href="/contato">Contato</Link></li>
                </ul>  
              </MenuLinks>
              <MenuLinks>
               <span>Cases</span>
                <ul>
                  <li><Link href="/b2b">Geração de Leads B2B</Link></li>
                  <li><Link href="/software">Geração de Leads em Software</Link></li>
                  <li><Link href="/imobiliaria">Geração de Leads em Imobiliária</Link></li>
                  <li><Link href="/casesucesso">Cases de Sucesso</Link></li>
                </ul>
              </MenuLinks>
              <MenuLinks>
                <span>Materiais</span>
                <ul>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/parceria">Parceria com Agências</Link></li>
                  <li><Link href="/guia">Guia Definitivo do Marketing</Link></li>
                  <li><Link href="/materialgratis">Materiais Gratuitos</Link></li>
                </ul>
              </MenuLinks>
              <MenuLinks>
                <span>Siga a Leadster</span>
                <MenuSocial>
                  <Link href="">
                    <IconWrapper>
                      <TfiLinkedin size={18} />
                    </IconWrapper>
                  </Link>
                  <Link href="">
                    <IconWrapper>
                      <TfiFacebook size={18} />
                    </IconWrapper>
                  </Link>
                  <Link href="">
                    <IconWrapper>
                      <TfiInstagram size={18} />
                    </IconWrapper>
                  </Link>
                </MenuSocial>
                <ul>
                  <li><span>Email:</span> contato@leadster.com.br</li>
                  <li><span>Telefone:</span> (42) 98828-9851</li>
                </ul>
              </MenuLinks>
            </MenuFooter>
          </MenuFooterContainer>
        </Content>
      </ContainerGrid>

      <CopyrightContainer>
        <Copyright>
          <p>Copyright @ 2015 - 2022 Todos os direitos reservados | <span>Leadster</span></p>
          <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de Uso</p>
        </Copyright>
      </CopyrightContainer>
    </FooterContainer>
  )
}
