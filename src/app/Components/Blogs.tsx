import React from 'react'
import { FaClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Blogs = () => {
  return (
    <div className="bg-white w-full py-8">
    {/* Blog Title */}
    <div className="flex items-center justify-center">
      <h1 className="text-2xl sm:text-3xl font-bold">Our Blog</h1>
    </div>
  
    {/* Blog Subtitle */}
    <div className="flex items-center justify-center mt-4 px-4">
      <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
        Find a bright idea to suit your taste with our great selection
      </p>
    </div>
  
    {/* Blog Posts */}
    <div className="flex flex-col md:flex-row md:space-x-6 mt-8 space-y-8 md:space-y-0 justify-center items-center px-4">
      {/* Post 1 */}
      <div className="w-full md:w-1/3 text-center">
        <img
          src="/img1.jpg"
          alt="Blog Image 1"
          className="rounded-lg w-full h-64 object-cover"
        />
        <p className="mt-4 text-lg font-semibold">
          Going all-in with millennial design
        </p>
        <button className="mt-2  font-medium underline">Read More</button>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="flex items-center space-x-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-lg">
            <FaClock />
            <span>5 min</span>
          </span>
          <span className="flex items-center space-x-2 text-gray-600 text-sm">
            <SlCalender />
            <span>12th Oct 2022</span>
          </span>
        </div>
      </div>
  
      {/* Post 2 */}
      <div className="w-full md:w-1/3 text-center">
        <img
          src="/img2.jpg"
          alt="Blog Image 2"
          className="rounded-lg w-full h-64 object-cover"
        />
        <p className="mt-4 text-lg font-semibold">
          Going all-in with millennial design
        </p>
        <button className="mt-2 font-medium underline">Read More</button>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="flex items-center space-x-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-lg">
            <FaClock />
            <span>5 min</span>
          </span>
          <span className="flex items-center space-x-2 text-gray-600 text-sm">
            <SlCalender />
            <span>12th Oct 2022</span>
          </span>
        </div>
      </div>
  
      {/* Post 3 */}
      <div className="w-full md:w-1/3 text-center">
        <img
          src="/img3.jpg"
          alt="Blog Image 3"
          className="rounded-lg w-full h-64 object-cover"
        />
        <p className="mt-4 text-lg font-semibold">
          Going all-in with millennial design
        </p>
        <button className="mt-2 font-medium underline">Read More</button>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="flex items-center space-x-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-lg">
            <FaClock />
            <span>5 min</span>
          </span>
          <span className="flex items-center space-x-2 text-gray-600 text-sm">
            <SlCalender />
            <span>12th Oct 2022</span>
          </span>
        </div>
      </div>
    </div>
  
    {/* View All Link */}
    <div className="flex items-center justify-center mt-12">
      <h1 className="underline font-medium text-sm sm:text-base md:text-lg">
        View All Past
      </h1>
    </div>
  </div>
  
  )
}

export default Blogs
