import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  --primary: #1C3C50;
  --blue-100: #F0F8FF;
  --blue-500: #2C83FB;
  --blue-800: #1F76F0;
  --gray: #83979E;


  body {
    font-family: 'PlusJakartaSans', sans-serif;
    font-weight: 400;
  }
`