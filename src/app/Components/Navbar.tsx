'use client';


import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Add more icons here
import { BsPersonFillExclamation } from "react-icons/bs";
import { CiSearch, CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="bg-[#FBEBB5] text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1>
          
        </h1>
      

        {/* Desktop Links */}
        <div className="hidden md:flex-grow md:block text-center">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="/Shop" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="/Contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Icon Section */}
        <div className="flex items-center text-2xl space-x-4 cursor-pointer hover:text-gray-700">
          <BsPersonFillExclamation  />
          <CiSearch  />
          <CiHeart  />
          <AiOutlineShoppingCart  />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl">
          <button
            className="hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle the mobile menu visibility
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-[#FBEBB5] p-4`}>
        <ul className="flex flex-col space-y-4 text-center">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="/Shop" className="hover:text-black">Shop</a></li>
          <li><a href="#" className="hover:text-black">About</a></li>
          <li><a href="/Contact" className="hover:text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
