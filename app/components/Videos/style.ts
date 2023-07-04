import { colors } from "@/app/assets/styles/global";
import { styled } from "styled-components";


export const OptionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 28px;

  @media (max-width: 940px) {
    align-items: flex-start;
    gap: 2rem;
    padding-left: 1rem;
  }

  @media (max-width: 940px) {
    flex-wrap: wrap;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OptionContent = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1080px) {
    gap: 0.5rem;
  }
  @media (max-width: 940px) {
    display: flex;
    flex-wrap: wrap;
  }

`

export const StyleForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;

  @media (max-width: 1080px) {
    font-size: 16px;
  }
`;

export const StyledSelect = styled.select`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  color: ${colors.primary};
  border-radius: 10px;
  border: 1px solid ${colors.primary};

  @media (max-width: 1080px) {
    font-size: 12px;
  }
  @media (max-width: 940px) {
  }
`;

export const ContainerVideo = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 60px;
  margin-bottom: 120px;

  @media (max-width: 1080px) {
    justify-content: space-around;
  }

  @media (max-width: 580px) {
    justify-content: center;
  }
`;

export const CardItem = styled.div`
  background-color: #fff;
  box-shadow: 2px 12px 15px 0px #dddddd;
  border-radius: 20px;
`

export const CardImage = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    cursor: pointer;
    &::after {
    content: url('../../../svg/play-solid.svg');
    display: block;
    width: 160px;
    height: 0;
    position: relative;
    top: -180px;
    left: 80px;
    bottom: 0;
  }

  &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(72, 178, 251, 0.46);
      position: absolute;
    }
  }
`

export const CardDesk = styled.div`
  max-width: 300px;
  font-weight: 600;
  padding-left: 32px;
  padding-block: 24px;
  color: ${colors.primary};
  transition: all 2ms ease;
  cursor: pointer;

  &:hover {
    color: ${colors.blue500};
  }
`

export const ModalContent = styled.div`
  
  h2 {
    span {
      color: ${colors.blue500};
      font-weight: 600;
    }
  }
`

export const ModalTitle = styled.h2`
  padding: 1.5rem;
`
export const ModalVideo = styled.div`
  iframe {
    width: 100%;
    height: 390px;
    border: 0;
  }
`
export const ModalInfo = styled.div`
  padding: 1.25rem;

  h3, h4, p {
    margin-block: 0.75rem;
    color: ${colors.primary};
  }

  h3 {
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  h4 {
    font-weight: 700;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const ModalButton = styled.button<{ color: string; text: string }>`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  color: ${props => props.text};
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: ${props => props.color};

   span {
    padding: 8px;
    font-weight: 600;
   }
`

export const ModalIcon = styled.div<{ color: string; text: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: ${props => props.text};
  background-color: ${props => props.color};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
