import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'PlusJakartaSans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`


export const colors = {
  primary: "#1C3C50",
  blue100: "#F0F8FF",
  blue500: "#2C83FB",
  blue800: "#1F76F0",
  white: "#FFFFFF",
  gray: "#83979E",
  gray50: "#F7F8FB",
  hr: "#C8D4DD",
}