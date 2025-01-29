'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation
import Shopfive from '../Components/Shopfive';  // Import Shopfive component

const account = () => {
  return (
    <div>

<div className="relative w-full h-[316px]">
      <img 
        src="/images/shophedar.jpg" 
        alt="wallpaper" 
        className="absolute inset-0 w-full h-full object-cover" 
      />   
      
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-1">
        <img src="/images/shoplogo.png" alt="logo" width={77} height={77} />
        
        {/* Shop link */}
        <h1 className="text-black text-4xl font-bold">
          <Link href="shop">
            Account
          </Link>
        </h1>
        
        {/* Home link */}
        <p className="text-black text-lg">
          <Link href="/">
            Home & Acoount
          </Link>
        </p>
      </div>
    </div>


   
      {/* Your existing content */}
      <div className="flex flex-col lg:flex-row items-center bg-white w-full min-h-[560px] lg:justify-evenly px-6 lg:px-0">
        {/* Log In Section */}
        <div className="w-full lg:w-[40%] mb-10 lg:mb-0">
          <h1 className="text-2xl font-bold mb-6 text-center lg:text-left">Log In</h1>
          <div className="mb-4">
            <label htmlFor="login-username" className="block text-sm font-medium">
              Username or Email Address
            </label>
            <input
              type="text"
              id="login-username"
              name="username"
              placeholder="Enter your name or email"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="login-password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          <div className="flex items-center mb-6">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
              <span>Remember me</span>
            </label>
          </div>

          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            <button
              type="submit"
              className="w-full bg-purple-400 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Log In
            </button>
            <button
              type="button"
              className="w-full text-black py-3 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Lost Your Password?
            </button>
          </div>
        </div>

        {/* Register Section */}
        <div className="w-full lg:w-[40%]">
          <h1 className="text-2xl font-bold mb-6 text-center lg:text-left">Register</h1>
          <div className="mb-4">
            <label htmlFor="register-email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="register-email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
          </div>

          <p className="text-sm mb-4 ">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm mb-6 ">
            Your personal data will be used to support your experience throughout this website, to manage
            access to your account, and for other purposes described in our privacy policy.
          </p>

          <button
            type="submit"
            className="w-full bg-purple-400 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
      </div>

      {/* Shopfive Component */}
      <Shopfive />
    </div>
  );
}

export default account;
