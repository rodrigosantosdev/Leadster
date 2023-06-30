import { colors } from "@/app/assets/styles/global";
import { styled } from "styled-components";


export const OptionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 28px;
`;

export const OptionContent = styled.div`
  display: flex;
  gap: 1rem;
`

export const StyleForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;


export const StyledSpan = styled.span`
  font-weight: bold;
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

  appearance: none;
  padding: 10px;
  width: 100%;
  position: relative;
  
  &::after {
    content: '▼';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 12px;
    padding: 0 5px;
    color: ${colors.primary}; /* Cor da seta */
  }
`;


export const ContainerVideo = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const CardItem = styled.div`
  background-color: #fff;
  box-shadow: 2px 12px 15px 0px #dddddd;
  border-radius: 20px;
`

export const CardImage = styled.div`
  width: 100%;
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
