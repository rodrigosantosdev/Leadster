import React from 'react'
import { Webinar, Subtitle, Tag, Title, Divisor, Description, WebinarWrapper } from "./style"
import { ContainerGrid } from "../Container/style"

export const Hero = () => {
  return (
    <Webinar>
      <ContainerGrid>
        <WebinarWrapper>
          <Tag>Webinars exclusivos</Tag>
          <Subtitle>Menos Conversinha,</Subtitle>
          <Title>Mais Conversão</Title>
          <Divisor />
          <Description>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</Description>
        </WebinarWrapper>
      </ContainerGrid>
    </Webinar>
  )
}
