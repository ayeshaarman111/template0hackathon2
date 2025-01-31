'use client';

import { useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";
import { CiSearch, CiHeart } from "react-icons/ci";
import Link from "next/link"; // Import Link for navigation
import { useCart } from '../context/CartContext'; // Import the useCart hook

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const { cart } = useCart(); // Access the cart context
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items in the cart

  return (
    <nav className="bg-[#FBEBB5] text-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-black">
          <img 
            src="/images/shoplogo.png" 
            alt="Comfort Cove Logo" 
            width={40} 
            height={40} 
            className="transition-all duration-500 transform hover:rotate-6 hover:scale-110 shadow-md"
          />
          <h1 className="text-3xl font-extrabold text-[#3E2723] transition-all duration-300 hover:text-[#6A4C3C] tracking-wide">
            Comfort Cove
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex-grow md:block text-center">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/Shop" 
                className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/Contact" 
                className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icon Section */}
        <div className="flex items-center text-3xl space-x-6 cursor-pointer">
          {/* Profile Icon */}
          <Link href="/account">
            <BsPersonFillExclamation 
              className="transition-all duration-300 text-[#6A4C3C] hover:text-[#D32F2F] transform hover:scale-110 hover:rotate-12"
            />
          </Link>

          {/* Search Icon */}
          <Link href="/search">
            <CiSearch 
              className="transition-all duration-300 text-[#6A4C3C] hover:text-[#D32F2F] transform hover:scale-110 hover:rotate-12"
            />
          </Link>

          {/* Heart Icon */}
          <Link href="/favorites">
            <CiHeart 
              className="transition-all duration-300 text-[#6A4C3C] hover:text-[#D32F2F] transform hover:scale-110 hover:rotate-12"
            />
          </Link>

          {/* Shopping Cart Icon */}
          <Link href="/cart">
            <div className="relative">
              <AiOutlineShoppingCart 
                className="transition-all duration-300 text-[#6A4C3C] hover:text-[#D32F2F] transform hover:scale-110 hover:rotate-12"
              />
              {/* Display cart item count */}
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
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
        <ul className="flex flex-col space-y-6 text-center">
          <li>
            <Link 
              href="/" 
              className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/Shop" 
              className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              href="#" 
              className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/Contact" 
              className="text-xl font-semibold text-[#3E2723] transition-all duration-300 transform hover:text-[#D32F2F] hover:scale-110 hover:rotate-3 hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
