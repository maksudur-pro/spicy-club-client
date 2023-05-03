import React, { useState } from "react";
import { FaRegBookmark, FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";

const Recipe = ({ recipe }) => {
  const [bookmark, setBookmark] = useState(true);
  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  const handleBookmark = () => {
    if (bookmark) {
      setBookmark(false);
      return Swal.fire("Bookmarked Successfully!", " ", "success");
    }
  };
  return (
    <div className="card my-container w-96 bg-base-100 shadow-xl">
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
        <h4>{recipe_name}</h4>
        <p className="p-0">Ingredients: {ingredients}</p>
        <p>Cooking method: {cooking_method}</p>
        <div className="flex items-center">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
