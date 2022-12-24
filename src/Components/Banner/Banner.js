import React from "react";
import banner from "../../Assests/Background/bannerBg.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero text-center" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")`, height: '500px' }}>
        <div className="hero-overlay bg-opacity-60 text-center"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-center">
            <h1 className="mb-5 text-5xl font-bold">Welcome to the PakaPepe</h1>
            <p className="mb-5">
              
            </p>
            <button className="btn bg-red-600 border-none">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
