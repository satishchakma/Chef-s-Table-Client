import React from "react";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = (props) => {
  const [disabled, setdisabled] = useState(false);

  const notify = () => {
    toast("Added to Favorite list!");
    setdisabled(!disabled);
  };

  const { name, ingredients, cooking_method, rating } = props.recipe;
  return (
    <div className="bg-green-100 p-4 m-4 rounded">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <span className="font-semibold">Ingredients: </span>
      <ol className="py-2 px-4">
        {ingredients.map((ingredient) => (
          <li className="list-decimal">{ingredient}</li>
        ))}
      </ol>

      <h1>
        <span className="font-semibold">Cooking method:</span> {cooking_method}
      </h1>
      <p>
        <span className="font-semibold">Rating:</span> {rating}
      </p>
      <button
        onClick={notify}
        disabled={disabled}
        className={`flex my-3   p-3 w-64 rounded-full justify-center items-center gap-4 btn btn-primary
        `}
      >
        <button>
          <BsHeart></BsHeart>
        </button>
        <p>Add Favorite</p>
      </button>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
