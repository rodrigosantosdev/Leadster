import React from 'react'
import Image from "next/image"
import { Divisor } from "../Divisor"
import { 
  LeadsContent, 
  LeadsPoints, 
  BeneficioGratisImage, 
  BeneficioGratisDesk, 
  Content,
  Demostracao, 
  Credito,   
  Box,
  Rating
  } from "./style"

export const GeracaoLeads = () => {
  return (
    <LeadsPoints>
      <LeadsContent>
        <BeneficioGratisImage>
          <Image src="/images/comparativo_img_CTA.png" width={740} height={687} alt="Geração de Leads" />
        </BeneficioGratisImage>
        <BeneficioGratisDesk>
          <h1>Pronto para triplicar sua</h1>
          <h2>Geração de Leads?</h2>
          <p>Criação e ativação em <span>4 minutos.</span></p>
          
          <Divisor />

          <Content>
            <Demostracao>
              <a>ver demostração</a>
              <Image src="/images/selo_RD.png" width={207} height={73} alt="Geração de Leads" />
            </Demostracao>

            <Box>
              <Credito>
                <Image src="/images/no-card-dark.webp" width={16} height={16} alt="Geração de Leads" />
                <p><span>Não</span> é necessário Cartão de Crédito</p>
              </Credito>
              
              <Rating>
                <Image src="/images/rating.webp" width={92} height={16} alt="Geração de Leads" />
                <p><span>4.9</span>/5 média de satisfação</p>
              </Rating>
            </Box>
          </Content>

        </BeneficioGratisDesk>
      </LeadsContent>
    </LeadsPoints>
  )
}
