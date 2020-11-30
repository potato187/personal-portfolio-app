import { createGlobalStyle, css } from "styled-components";
const GlobalStyled = createGlobalStyle`

  
  *, *::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) =>
      css`
        font-family: ${theme.fonts.default};
        color: ${theme.colors.fontColor};
        font-size: ${theme.fontSize.medium};
      `};
  }

  input,button {
    border: none;
    outline: none;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    cursor: pointer;
  }

`;
export default GlobalStyled;
