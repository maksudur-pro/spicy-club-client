import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chefs = ({ singleData }) => {
  const { picture, name, experience_years, total_recipe, likes, id } =
    singleData;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="w-full h-56" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">
            <p className="text-xs">{experience_years} years experience</p>
          </div>
        </h2>
        <p>Total recipe : {total_recipe}</p>
        <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-3">
            <FaThumbsUp></FaThumbsUp> {likes}
          </div>
          <Link to={`/details/${id}`} className="badge badge-primary p-4">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
