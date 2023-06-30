import React from 'react'
import Image from "next/image"
import { ContainerGrid } from "../Container/style"
import { Divisor } from "../Divisor"
import { OptionItem } from "../OptionItem"
import { CardItem, CardImage, CardDesk, ContainerVideo, OptionContent, StyleForm, StyledSpan, StyledSelect, OptionsContainer } from "./style"

export const Videos = () => {
  return (
    <ContainerGrid>
      <OptionsContainer>
        <OptionContent>
          <OptionItem border="1px solid #314D5E" bgColor="#fff" textColor="#314D5E">
            Agência
          </OptionItem>
          <OptionItem border="1px solid #2C83FB" bgColor="#fff" textColor="#2C83FB">
            Chatbot
          </OptionItem>
          <OptionItem border="1px solid #314D5E" bgColor="#fff" textColor="#314D5E">
            Marketing Digital
          </OptionItem>
          <OptionItem border="1px solid #2C83FB" bgColor="#2C83FB" textColor="#fff">
            Geração de Leads
          </OptionItem>
          <OptionItem border="1px solid #314D5E" bgColor="#fff" textColor="#314D5E">
            Mídia Paga
          </OptionItem>
        </OptionContent>
        <StyleForm>
          <StyledSpan>Ordenar por</StyledSpan>
          <StyledSelect name="select" id="select">
            <option value="1">Data de Publicação</option>
          </StyledSelect>
        </StyleForm>
      </OptionsContainer>
      <Divisor />
      <ContainerVideo>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
        <CardItem>
          <CardImage>
            <Image src="/images/thumbnail.png" alt="capa" width={362} height={204} />
          </CardImage>
          <CardDesk>
          Como aumentar sua Geração de Leads feat. Traktor
          </CardDesk>
        </CardItem>
      </ContainerVideo>
    </ContainerGrid>
  )
}
