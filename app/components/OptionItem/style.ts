import { styled } from "styled-components";

interface OptionFilterWrapperProps {
  bgColor: string;
  border: string;
  textColor: string;
}

export const OptionFilterWrapper = styled.button<OptionFilterWrapperProps>`
  background-color: ${props => props.bgColor};
  border:${props => props.border};
  color: ${props => props.textColor};
  
  display: inline-flex;
  justify-content: center;
  padding: 10px 20px;
  align-items: center;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 1080px) {
    font-size: 12px;
  }

  @media (max-width: 940px) {
    padding: 10px 12px;
  }
`;