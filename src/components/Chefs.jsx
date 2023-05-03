import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleChef from "../SingleChef";
import "./Chefs.css";

const Chefs = () => {
  const [chefs, setchefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setchefs(data));
  }, []);

  return (
    <div className="chefs-container">
      <div className="container mx-auto my-5 ">
        <h1 className="font-semibold text-center text-4xl">Top Chefs</h1>
        <p className="w-1/2 mx-auto text-center my-3 ">
          Our mission is to give our customers peace of mind when it comes to
          food selection. We do so in 4 ways.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-24 py-12 container mx-auto">
        {chefs.map((chef) => (
          <SingleChef key={chef.id} chef={chef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
