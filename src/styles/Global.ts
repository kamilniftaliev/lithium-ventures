import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 3rem;
    overflow-x: hidden;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    text-rendering: optimizeSpeed;
    line-height: 1;
  }
`