import React from 'react'
import { CiGrid41 } from "react-icons/ci";
import { BsFilterLeft } from "react-icons/bs";
import { TbLayoutListFilled } from "react-icons/tb";

const Shopthree = () => {
  return (
    <div className="bg-[#FAF4F4] w-full px-4 py-2 flex flex-wrap items-center justify-between text-sm">
    {/* Left Section: Filter and View Icons */}
    <div className="flex items-center space-x-4">
      <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
      <BsFilterLeft />
        <span>Filter</span>
      </button>
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded hover:bg-gray-200">
        <CiGrid41 />
        </button>
        <button className="p-2 rounded hover:bg-gray-200">
        <TbLayoutListFilled />
        </button>
      </div>
    </div>
  
    {/* Middle Section: Results Info */}
    <div className="text-gray-500 flex-grow text-center md:text-left">
      Showing 1–16 of 32 results
    </div>
  
    {/* Right Section: Show and Sort Dropdowns */}
    <div className="flex items-center space-x-4">
      {/* Show Dropdown */}
      <div className="flex items-center space-x-2">
        <span>Show</span>
        <select className="border rounded px-2 py-1 text-gray-700 bg-white focus:outline-none">
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
        </select>
      </div>
      {/* Sort By Dropdown */}
      <div className="flex items-center space-x-2">
        <span>Sort by</span>
        <select className="border rounded px-2 py-1 text-gray-700 bg-white focus:outline-none">
          <option value="default">Default</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
        </select>
      </div>
    </div>
  </div>
  
  )
}

export default Shopthree
