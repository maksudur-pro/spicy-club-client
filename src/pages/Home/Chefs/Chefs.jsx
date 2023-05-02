import { FaThumbsUp } from "react-icons/fa";

const Chefs = ({ singleData }) => {
  const { picture, name, experience_years, total_recipe, likes } = singleData;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="w-full h-56" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">
            {experience_years} years experience
          </div>
        </h2>
        <p>Total recipe : {total_recipe}</p>
        <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-3">
            <FaThumbsUp></FaThumbsUp> {likes}
          </div>
          <div className="badge badge-primary p-4">View Recipes</div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
