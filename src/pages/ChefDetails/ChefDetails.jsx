import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Recipe from "../Recipe/Recipe";

const ChefDetails = () => {
  const details = useLoaderData();

  const {
    picture,
    name,
    experience_years,
    total_recipe,
    likes,
    id,
    bio,
    recipes,
  } = details;
  return (
    <div className="my-container">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} className="h-full" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-500 text-2xl font-bold">{name}</h2>
          <p>
            {bio} <br />
            <span>Total recipe : {total_recipe}</span>
            <br />
            <span>Experience {experience_years} years</span>
          </p>
          <div className="card-actions justify-end">
            <div className="flex items-center">
              <FaThumbsUp className="text-blue-500 mx-2"></FaThumbsUp>{" "}
              <p className="font-bold">{likes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3  lg:grid-cols-3 mt-4">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.category_id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
