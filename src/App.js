import Header from "components/Header";
import Home from "components/Home";
import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Redirect from="/" to="/home" exact />
    </BrowserRouter>
  );
}

export default App;
