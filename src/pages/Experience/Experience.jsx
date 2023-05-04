import React from "react";

const Experience = () => {
  return (
    <section className="bg-white py-16 lg:py-24 my-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between flex-row-reverse">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Experience The Sublime
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor diam sit amet metus iaculis, non dignissim libero
              consectetur. Nulla facilisi. Donec rutrum velit augue, vitae
              vulputate tellus ullamcorper vel.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
              Book a table
            </button>
          </div>
          <div className="lg:w-2/6">
            <img
              src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/bg-8.png"
              alt="Experience The Sublime"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
