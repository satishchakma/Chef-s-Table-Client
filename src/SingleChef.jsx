import React from "react";
import { Link } from "react-router-dom";

const SingleChef = (props) => {
  const { id, chef_name, chef_picture, years_of_experience, likes } =
    props.chef;
  return (
    <div>
      <div className="container mx-auto mb-8">
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{chef_name}</h2>
            <p>Years of experience{years_of_experience}</p>

            <p>Numbers of recipes: {props?.chef?.recipes?.length}</p>
            <p>Likes: {likes}</p>
            <div className="card-actions justify-start">
              <Link to={`/chefs/${id}`}>
                <button className="btn btn-primary">View Recipes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
