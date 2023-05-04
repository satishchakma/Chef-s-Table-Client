import React from "react";
import Chefs from "./Chefs";
import FeaturedSection from "./FeaturedSection";
import HeroSection from "./HeroSection";
import RiceSection from "./RiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Chefs></Chefs>
      <RiceSection></RiceSection>
      <FeaturedSection></FeaturedSection>
    </div>
  );
};

export default Home;
