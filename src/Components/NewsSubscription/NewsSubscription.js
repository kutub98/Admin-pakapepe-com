import React from "react";
import "./newsLetterBox.css";
import { FaArrowCircleRight } from "react-icons/fa";
const NewsSubscription = () => {
  return (
    <div className="newsLetterBox text-center bg-white my-14">
      <h1 className="text-5xl font-bold">Sign Up For Newsletter</h1>
      <h1 className="my-6">Receive Latest News, Updates and Many Other News Every Week</h1>
      <div className="flex bGround text-center mt-7">
        <div className="bg-gray-100 w-full h-full"></div>
        <div className="bg-red-600 shadow-lg w-full h-full"></div>
        <div className="SubscriptionBox shadow-lg ">
          <div className="flex my-0  mx-auto">
            <form className="my-0 flex justify-around mx-auto w-full items-center">
            <input
                type="email"
                name=""
                id=""
                required
                className="rounded border-none w-full bg-slate-100"
                placeholder="Enter your Email"
              />
              <button className="btn border-none ml-1 h-12 w-12 rounded-full bg-red-600 text-white" type="submit">
               <FaArrowCircleRight className="w-8 h-8 text-4xl"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSubscription;
