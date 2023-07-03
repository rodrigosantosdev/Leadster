import { colors } from "@/app/assets/styles/global";
import { styled } from "styled-components";

export const LeadsPoints = styled.section`
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${colors.blue100};
`
export const LeadsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

export const BeneficioGratisImage = styled.div`
  width: 100%;
  max-width: 480px;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 580px) {
    padding: 0 1rem;
  }
`

export const BeneficioGratisDesk = styled.div`
  width: 624px;

  @media (max-width: 1200px) {
    text-align: center;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: ${colors.primary};
  }

  h2 {
    font-size: 42px;
    font-weight: 800;
    color: ${colors.primary};
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: ${colors.primary};
    padding-top: 8px;
    padding-bottom: 16px;
  }

  span {
    font-weight: bold;
  }
`

export const Content = styled.div`
  
  a {
    background-color: ${colors.blue500};
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.white};
    border-radius: 50px;
    padding: 24px 38px;
    cursor: pointer;
  }
`
export const Demostracao = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px; 
  transition: all 200ms ease-in;

  @media (max-width: 580px) {
    flex-direction: column;
  }

  a {
    &:hover {
      background-color: ${colors.blue800};
    }
  }
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  @media (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`

export const Credito = styled.div`
  display: flex;
  align-items: center;
  gap:8px;
  font-weight: 600;
  padding-right: 16px;
  border-right: 2px solid ${colors.primary};

  @media (max-width: 580px) {
    border-right: 0;
    padding-right: 0;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    padding: 0;
  }
  
  span {
    font-weight: bold;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap:8px;
  padding-left: 16px;

  @media (max-width: 580px) {
    padding-left:0;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    padding: 0;
  }
  
  span {
    font-weight: bold;
  }
`