import React, { useContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Experience from "../../Experience/Experience";
import OurPartner from "../../OurPartner/OurPartner";
import { AuthContext } from "../../../providers/AuthProvider";
import LazyLoad from "react-lazy-load";
import HeroSection from "./HeroSection";
import AboutUsSection from "../../AboutUsSection/AboutUsSection";

const Home = () => {
  const [data, setData] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://spicy-club-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-white">
        <LazyLoad
          className="flex justify-center items-center h-full"
          height={762}>
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </LazyLoad>
      </div>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <HeroSection></HeroSection>
      <Experience></Experience>
      <div className="my-container text-center mb-4">
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Chefs
        </h1>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-container gap-4 mt-5">
        {data.map((singleData) => (
          <Chefs singleData={singleData} key={singleData.id}></Chefs>
        ))}
      </div>
      <AboutUsSection></AboutUsSection>
      <OurPartner></OurPartner>
    </div>
  );
};

export default Home;
