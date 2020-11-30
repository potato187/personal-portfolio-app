import React from "react";
import { HeroBanner, HeroSection, ScrollDown } from "./HeroElements";

function Hero() {
  return (
    <HeroSection url="/images/hero-background.jpg" data-name="Michael">
      <HeroBanner src="/images/hero-background.png" alt="background" />
      <ScrollDown />
    </HeroSection>
  );
}

export default Hero;
