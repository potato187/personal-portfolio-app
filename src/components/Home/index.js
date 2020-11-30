import Hero from "components/Home/Hero";
import { Main } from "components/styled";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Expertise from "./Expertise";
import Motto from "./Motto";
import Portfolio from "./Portfolio";
import WorkExperience from "./WorkExperience";

function Home() {
  return (
    <>
      <Main>
        <Hero />
        <About />
        <Expertise />
        <Motto />
        <WorkExperience />
        <Portfolio />
        <Contact />
      </Main>
    </>
  );
}

export default Home;
