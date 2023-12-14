import React from "react";
import logo from "../../assets/images/logo/logo.svg";
const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-8 px-12 fixed left-0 top-0 right-0 w-full bg-transparent">
      <div className="logo">
        <img src={logo} alt="logo_img" className="w-full h-auto" />
      </div>
      <div className="menu">
        <ul className="flex gap-8 text-white text-[16px] font-medium">
          <li className="cursor-pointer hover:text-[#ff0336]">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-[#ff0336]">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer hover:text-[#ff0336]">
            <a href="#">Gallary</a>
          </li>
          <li className="cursor-pointer hover:text-[#ff0336]">
            <a href="#">Schedule</a>
          </li>
          <li className="cursor-pointer hover:text-[#ff0336]">
            <a href="#">Classes</a>
          </li>
          <li className="cursor-pointer hover:text-[#ff0336]">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
