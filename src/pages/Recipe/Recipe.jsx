import React, { useState } from "react";
import { FaRegBookmark, FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

const Recipe = ({ recipe }) => {
  const [bookmark, setBookmark] = useState(true);
  const { img, recipe_name, ingredients, cooking_method, rating } = recipe;

  const handleBookmark = () => {
    if (bookmark) {
      setBookmark(false);
      return Swal.fire("Bookmarked Successfully!", " ", "success");
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button onClick={handleBookmark} disabled={false}>
            {bookmark ? (
              <FaRegBookmark></FaRegBookmark>
            ) : (
              <FaBookmark></FaBookmark>
            )}
          </button>
        </div>
        <img src={img} alt="" className="rounded-2xl" />
        <h4 className="font-bold text-xl">{recipe_name}</h4>
        <p className="p-0">
          <span className="text-lg font-semibold">Ingredients</span>
          {ingredients.map((ingredient, index) => (
            <li className="pl-4" key={index}>
              {ingredient}
            </li>
          ))}
        </p>
        <p>
          <span className="text-lg font-semibold">Cooking method:</span>{" "}
          {cooking_method}
        </p>
        <div className="flex items-center">
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating || 0)}
            readOnly
          />
          <span className="ml-2">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
