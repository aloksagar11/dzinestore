import React from "react";
import HeroSection from "../Componants/HeroSection";
import Trusted from "../Componants/Trusted";
import Services from "../Componants/Services";
const Home = () => {
  return (
    <>
      <HeroSection name="Dzine Store" />;
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
