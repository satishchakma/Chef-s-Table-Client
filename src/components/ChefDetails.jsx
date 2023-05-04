import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ChefDetails.css";
import Recipes from "./Recipes";

const ChefDetails = () => {
  const [details, setDetails] = useState({});
  const chefId = useParams();

  const recipes = details.recipes;
  console.log(recipes);

  useEffect(() => {
    fetch(`https://chefs-table-server-satishchakma.vercel.app/${chefId.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  //   console.log(id);
  return (
    <div className="container mx-auto grid grid-cols-3 chefdetails">
      <div className="container mx-auto mb-8">
        <div className="card w-96 glass">
          <figure>
            <img src={details?.chef_picture} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{details?.chef_name}</h2>
            <p>Years of experience: {details?.years_of_experience}</p>

            <p>Numbers of recipes: {details?.recipes?.length}</p>
            <p>Likes: {details?.likes}</p>
            <div className="card-actions justify-start">
              {/* <Link to={`/chefs/${id}`}>
                <button className="btn btn-primary">View Recipes</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-4xl font-semibold">
          {details?.chef_name}'s Recipes
        </h1>

        {recipes?.map((recipe) => (
          <Recipes recipe={recipe}></Recipes>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
