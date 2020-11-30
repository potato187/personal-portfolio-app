import App from "App";
import GlobalStyled from "globalStyled";
import Theme from "globalStyled/basic";
import Fonts from "globalStyled/Fonts";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
const Root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Fonts />
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  Root
);
