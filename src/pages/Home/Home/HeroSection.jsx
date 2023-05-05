import React from "react";

const HeroSection = () => {
  return (
    <div className="py-16 my-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Spicy Food
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are passionate about creating dishes that are packed with heat
            and flavor. From classic spicy favorites like Buffalo wings to
            fusion dishes like spicy noodles with shrimp, we've got something
            for every spice lover.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY3klMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Spicy food"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Heat Levels
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                We offer a range of heat levels to suit every palate, from mild
                to extra-hot. Don't be afraid to ask your server for
                recommendations or to customize your dish to your preferred
                level of spice.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Spice Blends
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Our chefs use a variety of spice blends to create unique and
                  flavorful dishes. From classic blends like Cajun and jerk
                  seasoning to more exotic blends like berbere and garam masala,
                  we're always experimenting with new flavors.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY3klMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Spice blends"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
