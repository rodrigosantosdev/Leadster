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
  }
`

export const colors = {
  primary: "#506270",
  blue100: "#F0F8FF",
  blue500: "#2C83FB",
  blue800: "#1F76F0",
  gray: "#83979E",
  hr: "#C8D4DD",
}