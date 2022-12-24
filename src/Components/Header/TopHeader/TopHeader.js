import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../Assests/logo/logo.png'
import { FaShoppingCart } from "react-icons/fa";
const TopHeader = () => {
  const topHeader = [
  <React.Fragment>
    <ul className="flex justify-between items-center text-center">
        <div className="logo text-center">
        <li className="text-center"><Link to='home'> Welcome to PakaPepe </Link></li>
        </div>
        {/* <div className="logo flex items-center justify-between">
        <li className="border border-l text-xl font-semi-bold"><Link to='LoginBox'>Login</Link></li>
        <li className="border border-l ml-4"><p> <FaShoppingCart className="w-6 h-6 text-red-600"/> </p></li>
        </div> */}
    </ul>
  </React.Fragment>
  ];

  return <div className="px-[4%] py-2 bg-slate-100 border bottom-2 text-center">
    {topHeader}
  </div>;
};

export default TopHeader;
