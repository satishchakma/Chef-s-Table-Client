import React from "react";
import hero from "../assets/hero.png";
import "./HeroSection.css";
import separator from "../assets/seprator.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="basis-6/12 ">
        <img className="hero-img" src={hero}></img>
      </div>
      <div className="basis-6/12">
        <h1 className="hero-heading text-[#75b91d] font-bold text-5xl mb-5">
          Healthy Low Carb <br></br> Pasta, Rice and Ready<br></br> to Eat Meals
        </h1>
        <div>
          <img src={separator} alt="" className="mb-5" />
        </div>
        <h2 className="text-[#735e56]  text-3xl mb-5">
          That Fit Your Lifestyle
        </h2>
        <button className="hero-btn bg-[rgba(255,129,43,1)] p-5 text-2xl text-white rounded-lg mb-5">
          <Link to="/"> Shop All</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
