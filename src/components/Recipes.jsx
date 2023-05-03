import React from "react";

const Recipes = (props) => {
  const { name, ingredients, cooking_method, rating } = props.recipe;
  return (
    <div className="bg-green-100 p-4 m-4 rounded">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <span>Ingredients: </span>
      <ol className="py-2 px-4">
        {ingredients.map((ingredient) => (
          <li className="list-decimal">{ingredient}</li>
        ))}
      </ol>

      <h1>Cooking method: {cooking_method}</h1>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Recipes;
