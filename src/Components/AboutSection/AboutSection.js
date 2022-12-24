import React from "react";
import aboutUs from "../../Assests/About/about_us_image.png";
const AboutSection = () => {
  return (
    <div>
      <section className="bg-gray-50 text-gray-800 px-[4%] my-4 py-6">
        <div className="container flex flex-col items-center mx-auto lg:flex-row">
         
          <div className="flex text-left flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mb-8 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path> 
            </svg>
            <h2 className="text-4xl font-semibold leading-none">About Us</h2>
            </div>
            <p className="mt-2 mb-8 text-3xl text-black font-semibold ">
            Pakapepe is The Best Delivery Service Near You
            </p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-red-600 text-gray-50">
              Get started
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={aboutUs} alt=""  className="h-[500px] w-full"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
