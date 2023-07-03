import { colors } from "@/app/assets/styles/global";
import { styled } from 'styled-components';


export const Webinar = styled.section`
  width: 100%;
  display: flex;
  padding: 160px 0;
  background-color: ${colors.blue100};
`

export const WebinarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Tag = styled.span`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 20px 20px 20px 4px;
  border: 3px solid ${colors.blue500};

  font-weight: 800;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: ${colors.blue500};
`
export const Subtitle = styled.h2`
  font-size: 2.9375rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-top: 24px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Title = styled.h1`
  font-size: 5.4375rem;
  background: -webkit-linear-gradient(-45deg, #2C83FB, #1F76F0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  &::after {
    content: '-';
    display: block;
    background-image: url("/images/asset-header.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 12px;
    right: -18px;
  }
`

export const Description = styled.p`
  color: ${colors.primary};
  font-weight: 600;
  font-size: 1.1062rem;
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 360px;
    text-align: center;
    font-size: 0.875rem;
  }
`


