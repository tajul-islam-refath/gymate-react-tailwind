import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Featured from "../components/Featured/Featured";
import ChooseUs from "../components/ChooseUs/ChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
    </>
  );
};

export default Home;
