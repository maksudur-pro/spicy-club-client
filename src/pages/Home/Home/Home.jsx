import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      {data.map((singleData) => (
        <Chefs singleData={singleData} key={singleData.id}></Chefs>
      ))}
    </div>
  );
};

export default Home;
