import React from "react";
import { FaMobileAlt, FaLocationArrow } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="px-[4%]">
      <div className="hero text-center" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60 text-center"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-left">
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          </div>
          <img
            src="https://www.pngitem.com/pimgs/m/60-606369_request-a-quote-banner-image-contact-us-illustration.png"
            alt=""
            className=""
          />
        </div>
        <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input id="email" type="email" className="w-full p-3 rounded bg-gray-100" />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-red-600 text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 bg-slate-200 my-4">
        <div className="flex items-center p-4 text-left sm:my-1 ">
            <FaMobileAlt className="h-12 w-12 p-2 mr-2 bg-red-600 text-white rounded-full"/>
            <div>
                <h1 className="text-black text-lg font-semibold ">Call Us</h1>
                <a href="tel:01906-299866" className="text-gray-600">01906-299866</a>
            </div>
         </div>
        <div className="flex items-center p-4 text-left sm:my-1 ">
            <FaMobileAlt className="h-12 w-12 p-2 mr-2 bg-red-600 text-white rounded-full"/>
            <div>
                <h1 className="text-black text-lg font-semibold ">Send an Email</h1>
                <a href="mailto:info@pakapepe.com" className="text-gray-600">info@pakapepe.com</a>
            </div>
         </div>
        <div className="flex items-center p-4 text-left sm:my-1 ">
            <FaLocationArrow className="h-12 w-12 p-2 mr-2 bg-red-600 text-white rounded-full"/>
            <div>
                <h1 className="text-black text-lg font-semibold ">Find Location</h1>
                <a href="http://maps.google.com/maps?z=12&amp;t=m&amp;q=loc:0+0" target="_blank" class="info text-base">Corporate Office: Mirpur DOHS
                                    </a>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Contact;
