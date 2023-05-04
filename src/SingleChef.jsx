import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const SingleChef = (props) => {
  const { id, chef_name, chef_picture, years_of_experience, likes } =
    props.chef;
  return (
    <div>
      <div className="container mx-auto mb-8">
        <div className="card w-96 glass mx-auto">
          <LazyLoad>
            <img src={chef_picture} alt="chef's table" />
          </LazyLoad>
          <div className="card-body">
            <h2 className="card-title">{chef_name}</h2>
            <p>Years of experience: {years_of_experience}</p>

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
