import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookSquare } from "react-icons/fa";
const LoginBox = () => {
  return (
    <div className="w-[30%] my-6 py-4 rounded mx-auto shadow-2xl p-2">
      <h1 className="text-left text-4xl my-4 text-lg font-semibold text-black font-bold">Welcome </h1>
      <h1 className="text-left text-1xl my-4 text-lg font-semibold text-black font-bold">Sign up or log in to continue</h1>
      <div>
        <button
          aria-label="Login with Google"
          type="button"
          className="flex bg-white my-4 text-lg font-semibold shadow items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-red-600"
        >
          <FaGoogle />
          <p>Login with Google</p>
        </button>

        <button
          aria-label="Login with Apple"
          role="button"
          className="flex my-4 text-lg font-semibold bg-black text-white shadow items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-red-600"
        >
          <FaApple />
          <p>Login with Apple</p>
        </button>
		
        <button
          aria-label="Login with Facebook"
          role="button"
          className="flex my-4 text-lg font-semibold bg-sky-700 text-white shadow items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-red-600"
        >
          <FaFacebookSquare />
          <p>Login with Facebook</p>
        </button>
        <Link
          to="/loginForm"
          aria-label="Login with form"
          role="button"
          className="flex bg-red-600 text-white my-4 text-lg font-semibold shadow items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-red-600"
        >
          <p>Log in</p>
        </Link>
        <Link
          to="/signUp"
          aria-label="Login with Sign up"
          role="button"
          className="flex my-4 text-lg font-semibold shadow items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-red-600 focus:ring-red-600"
        >
          <p>Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
