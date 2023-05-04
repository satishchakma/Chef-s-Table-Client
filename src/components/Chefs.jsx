import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleChef from "../SingleChef";
import "./Chefs.css";

import LazyLoad from "react-lazy-load";

import { FidgetSpinner } from "react-loader-spinner";

const Chefs = () => {
  const [chefs, setchefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://chefs-table-server-satishchakma.vercel.app/")
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
      {/* loader spinner here */}
      {loading ? (
        <div className="flex justify-center">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#ff0000", "#00ff00", "#0000ff"]}
            backgroundColor="#F4442E"
          />
        </div>
      ) : (
        <></>
      )}
      <div className="md:grid grid-cols-3 gap-4 my-24 py-12 container mx-auto">
        {chefs.map((chef) => (
          <SingleChef key={chef.id} chef={chef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
