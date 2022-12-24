import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <div className="">
          <div className="flex flex-col mx-auto my-4 mb-8 w-[30%] p-6 shadow-2xl rounded-md bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Create an Account</h1>
              <p className="text-sm text-gray-600">Log in to access your account</p>
            </div>
            <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
              <div className="space-y-4">
                <div className='text-left'>
                  <label for="email" className="block mb-2 text-left text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="number" className="text-sm">
                      Mobile Number
                    </label>
                    
                  </div>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder ="Number"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="password" className="text-sm">
                      Password
                    </label>
                    
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="confirmPassword" className="text-sm">
                      Confirm Password
                    </label>
                    
                  </div>
                  <input
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder ="confirmPassword"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-red-600 text-gray-50">
                    Create an account
                  </button>
                </div>
              </div>
              <div className='space-y-2'>
                <div>
                  <Link to="/loginForm" className="w-full px-8 py-3 font-semibold rounded-md bg-red-600 text-gray-50">
                    or Login
                  </Link>
                </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;