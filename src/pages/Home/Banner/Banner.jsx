import React from "react";

const Banner = () => {
  return (
    <div className="relative mb-5 my-container">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY3klMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Chef Banner"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Welcome to Spicy club
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Welcome to the Spicy Restaurant! We offer the spiciest and most
          delicious food in town. Our menu features a variety of spicy dishes
          that will satisfy your taste buds.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="text-white bg-indigo-500 rounded-full px-8 py-3 font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
