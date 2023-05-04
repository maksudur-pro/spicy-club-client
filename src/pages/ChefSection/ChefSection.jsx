import React from "react";

const ChefSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Chef 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Chef 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor diam sit amet metus iaculis, non dignissim libero
              consectetur. Nulla facilisi. Donec rutrum velit augue, vitae
              vulputate tellus ullamcorper vel.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Chef 2"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Chef 2</h3>
            <p className="text-gray-700">
              Proin accumsan dui in bibendum facilisis. Sed condimentum
              malesuada sem, ac bibendum purus. Curabitur in dolor in tellus
              blandit consectetur. Nullam at quam facilisis, faucibus metus sit
              amet, venenatis metus.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Chef 3"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Chef 3</h3>
            <p className="text-gray-700">
              Nam lacinia nunc et massa consectetur, nec maximus purus
              malesuada. Phasellus euismod purus non leo laoreet, sed convallis
              mauris fringilla. Nulla facilisi. Donec vitae sapien in leo
              feugiat lacinia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
