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
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.blue500};
`
export const Subtitle = styled.h2`
  font-size: 47px;
  font-weight: 600;
  color: ${colors.primary};
  margin-top: 24px;
`

export const Title = styled.h1`
  font-size: 87px;
  background: -webkit-linear-gradient(-45deg, #2C83FB, #1F76F0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Divisor = styled.hr`
  border: 0;
  height: 1px;
  background: ${colors.hr};
`

export const Description = styled.p`
  color: ${colors.primary};
  font-weight: 600;
  font-size: 17.7px;
  margin-top: 20px;
`


