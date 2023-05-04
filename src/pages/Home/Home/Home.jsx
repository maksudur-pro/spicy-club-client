import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Experience from "../../Experience/Experience";
import OurPartner from "../../OurPartner/OurPartner";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://spicy-club-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="my-container text-center mb-4">
        <h1 className="text-4xl font-bold">Our Chefs</h1>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-container gap-4 mt-5">
        {data.map((singleData) => (
          <Chefs singleData={singleData} key={singleData.id}></Chefs>
        ))}
      </div>
      <Experience></Experience>
      <OurPartner></OurPartner>
    </div>
  );
};

export default Home;
