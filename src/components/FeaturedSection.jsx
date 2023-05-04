import React from "react";
import "./FeaturedSection.css";
import img1 from "../assets/home-logo-partner-1.png";
import img2 from "../assets/home-logo-partner-2.png";
import img3 from "../assets/home-logo-partner-3.png";
import img4 from "../assets/home-logo-partner-4.png";
import img5 from "../assets/home-logo-partner-5.png";

const FeaturedSection = () => {
  return (
    <div>
      <h1 className="feature-heading">Featured In</h1>
      <div className="flex justify-center items-center gap-8 my-16">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  );
};

export default FeaturedSection;
