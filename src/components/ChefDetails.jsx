import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
  const [details, setDetails] = useState({});
  const chefId = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/${chefId.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  //   console.log(id);
  return (
    <div className="container mx-auto grid grid-cols-3">
      <div className="container mx-auto mb-8">
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{details?.chef_name}</h2>
            <p>Years of experience{details?.years_of_experience}</p>

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
        <h1> {details?.chef_name}'s Recipes</h1>
      </div>
    </div>
  );
};

export default ChefDetails;
