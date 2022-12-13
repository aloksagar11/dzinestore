import React from "react";
import HeroSection from "../Componants/HeroSection";
import Trusted from "../Componants/Trusted";
import Services from "../Componants/Services";
import FeaturedSection from "../Componants/FeaturedSection";
const Home = () => {
  document.title ="Dzine Store";
  return (
    <>
      <HeroSection name="Dzine Store" />;
      <FeaturedSection/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
