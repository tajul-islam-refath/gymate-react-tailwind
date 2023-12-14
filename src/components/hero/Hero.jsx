import React from "react";
import bgImage from "../../assets/images/hero/hero-img.jpg";
import titleBg from "../../assets/images/titlebg.svg";
import MainButton from "../button/MainButton";

const Hero = () => {
  return (
    <div className={`hero-section w-full h-[110vh] `}>
      {/* hero section  */}
      <div className="container-hero">
        <div className="flex flex-col absolute hero-text text-white">
          <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 mb-8">
            FIND YOUR ENERGY
          </p>
          <img
            src={titleBg}
            alt="title_bg"
            className="w-[52%] absolute -top-3 title-white"
          />
          <h1 className="font-bold text-[48px] uppercase mb-[4rem] min450:text-[40px]">
            Make your body
            <br />
            <span className="font-thin">Fit & Perfact</span>
          </h1>
          <MainButton color={`text-black`} bg={`bg-white`} text="our classes" />
        </div>
      </div>
      {/* socials  */}
      <div className="flex flex-row-reverse items-center -rotate-90 text-white absolute top-2/4 right-0">
        <p className="uppercase text-3xl font-bold tracking-widest">Share</p>
        <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
        <div className="text-white gap-7 flex mr-7 ">
          <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-3xl cursor-pointer ease-in duration-200 "></i>
          <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-3xl cursor-pointer ease-in duration-200"></i>
          <i className="fa-brands rotate-90 hover:text-[#FF0336]  fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
