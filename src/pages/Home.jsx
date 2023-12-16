import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Featured from "../components/Featured/Featured";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Trainers from "../components/Trainers/Trainers";
import Footer from "../components/Footer/Footer";
import BmiCalc from "../components/BMI/BmiCalc";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <BmiCalc />
      <Footer />
    </>
  );
};

export default Home;
