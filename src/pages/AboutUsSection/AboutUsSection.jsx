import React from "react";

const AboutUsSection = () => {
  return (
    <div className=" my-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are a family-owned restaurant that has been serving up spicy,
            flavorful dishes for over 20 years. Our recipes have been passed
            down through generations and perfected over time to create a truly
            unique dining experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.adsttc.com/media/images/5f3b/15c3/b357/6599/7f00/0024/newsletter/Spicy_NoSpicy_by_YOD_10.jpg?1597707667"
                alt="Restaurant"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Philosophy
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                At our restaurant, we believe that good food brings people
                together. That's why we take pride in creating a warm, welcoming
                atmosphere where everyone feels at home. We source our
                ingredients locally whenever possible and prepare everything
                fresh in-house to ensure the highest quality and flavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
