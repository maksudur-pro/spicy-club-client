import React from "react";
import { Container } from "react-bootstrap";
import Header from "../pages/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
