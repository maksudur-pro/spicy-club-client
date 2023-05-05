import React from "react";
import Marquee from "react-fast-marquee";

const OurPartner = () => {
  return (
    <section className=" py-12 my-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Partners
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Here are some of the companies we work with:
          </p>
        </div>
        <Marquee>
          <div className="flex justify-center mt-10">
            <div className="mx-4">
              <img
                src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                alt="Mastercard"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium text-gray-900">
                Mastercard
              </p>
            </div>
            <div className="mx-4">
              <img
                src="https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png"
                alt="Mastercard"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium text-gray-900">Visa</p>
            </div>
            <div className="mx-4">
              <img
                src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-original-logo-hd-0.png"
                alt="McDonald's"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium text-gray-900">
                McDonald's
              </p>
            </div>
            <div className="mx-4">
              <img
                src="https://www.freepnglogos.com/uploads/burger-king-png-logo/burger-king-png-logo-0.png"
                alt="Burger King"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium text-gray-900">
                Burger King
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default OurPartner;
