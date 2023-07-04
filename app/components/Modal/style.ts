import { colors } from "@/app/assets/styles/global";
import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContainer = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 50px;
  text-align: left;
  border-radius: 12px;
  border-top: 4px solid ${colors.blue500};
  background-color: ${colors.white};
  box-shadow: 1px 1px 1px 1px #ddd;
`

export const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 8px;
  border: 0;
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
`