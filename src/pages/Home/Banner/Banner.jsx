import React from "react";

const Banner = () => {
  return (
    <div className="lg:flex my-container lg:flex-row-reverse justify-center items-center p-7 mx-auto">
      <img
        src="https://i.ibb.co/H7s5rnR/P3-OLGJ1-copy-1.png"
        className="rounded-lg"
      />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
