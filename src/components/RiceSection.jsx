import React from "react";
import rice from "../assets/rice and pasta.png";
import "./RiceSection.css";

const RiceSection = () => {
  return (
    <div className="bg-[#FFF8E5] md:flex justify-center items-center gap-8 rice my-24 ">
      <div className="basis-1/2">
        <img src={rice} />
      </div>
      <div className="basis-1/2 my-12 md:my-0">
        <h1 className="text-4xl font-semibold rice-heading">
          21st Century Upgrade to <br></br> Rice and Pasta
        </h1>
        <p className="rice-text">Invented in the 6th Century</p>
        <button className="rice-btn">OUR STORY</button>
      </div>
    </div>
  );
};

export default RiceSection;
