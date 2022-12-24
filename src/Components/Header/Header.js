import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/logo/logo.png";
import { FaBars, FaWindowClose, RiBarChartHorizontalLine } from "react-icons/fa";
import "./Header.css";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);

 
  // console.log(user)
   
  const menuItem = (
    <React.Fragment>
      <li className="" onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-lg " to="home">
          Home
        </Link>
      </li>
      <li className="" onClick={() => setOpenMenu(!openMenu)}>
        <a href="https://pakapepe.com/" className=" text-lg ">
          Browser Web
        </a>
      </li>
      <li className="" onClick={() => setOpenMenu(!openMenu)}>
        <Link to="/privacyPolicy" className=" text-lg ">
          Privacy Policy
        </Link>
      </li>
      
      <li className="" onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-lg " to="/About">
          About
        </Link>
      </li>
      
      <li className="" onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-lg " to="/contact">
          Contact
        </Link>
      </li>
      
      
      
    </React.Fragment>
  );

  return (
    <div className="navBar bg-white">
    <nav className=" flex justify-between py-6 px-[4%] items-center">
      <div className="logo flex">
        <Link to="/home">
          <img src={logo} alt="" className=" logo1 w-40 h-20" />
        </Link>

        
      </div>
      {openMenu ? <ul className="menuItem items-center">{menuItem}</ul> : <ul className="menuItems items-center">{menuItem}</ul>}
      <div className="relative BarsBar" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <button className="bars">
            <FaBars className="w-6 h-6 text-black"/>
          </button>
        ) : (
          <button className="closeBar">
            <FaWindowClose className="w-6 h-6 text-black"/>
          </button>
        )}
      </div>
    </nav>
  </div>
  );
};

export default Header;
