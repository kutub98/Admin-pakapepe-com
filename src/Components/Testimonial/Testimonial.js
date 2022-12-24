import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Testimonial.css";
import user from "../../Assests/Background/user/user.png";
import quotationMark from "../../Assests/Background/Icon/Qoutation.png";

// import required modules
import { EffectCards } from "swiper";

export default function Testimonial() {
  return (
    <div className="text-center">
        <h1 className="text-center text-4xl font-bold mt-8 mb-12">Trusted by Customer & Restaurant Owner</h1>
        <>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        <SwiperSlide className="">
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="div justify-end">
              <img src={quotationMark} alt="" className="w-24 h-24" />
            </div>
            <div className="">
              <img src={user} alt="" className=" w-36 h-36 rounded-full border my-2 mx-auto" />
            </div>
            <div className="w-2/3 my-2 mx-auto">
              <p>The PakaPepe is the best for for Food & Groceries from home</p>

              <div>
                <h1 className="text-gray-500 text-lg mt-4">Borhan uddin Shanto</h1>
                <h1 className="text-gray-500 text-lg">Web Designer</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}
