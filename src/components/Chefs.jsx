import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleChef from "../SingleChef";
import "./Chefs.css";

const Chefs = () => {
  const [chefs, setchefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setchefs(data));
    setLoading(false);
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
      {/* loader spinner here */}
      {loading ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Chefs;
