'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import useCart to access the cart
import { urlFor } from "@/sanity/lib/image";  // Assuming you are using Sanity for image URLs
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Success Icon
import Link from 'next/link'; // Make sure to import Link for navigation
import Shopfive from '../Components/Shopfive';

const Checkout = () => {
  const { cart } = useCart();  // Get cart data from context

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    province: '',
    phone: '',
  });

  // Handle success message state
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirmOrder = () => {
    // Simulate order confirmation logic here
    setOrderSuccess(true);

    // Reset form and cart after a brief delay
    setTimeout(() => {
      setOrderSuccess(false);
      // Clear cart if necessary
      // clearCart();
    }, 5000);
  };

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <div className="relative w-full h-[316px]">
        <img 
          src="/images/shophedar.jpg" 
          alt="wallpaper" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-1">
          <img src="/images/shoplogo.png" alt="logo" width={77} height={77} />
          
          {/* Shop link */}
          <h1 className="text-balck text-4xl font-bold">
            <Link href="Checkout">
              Checkout
            </Link>
          </h1>
          
          {/* Home link */}
          <p className="text-black text-lg">
            <Link href="/">
              Home & Checkout
            </Link>
          </p>
        </div>
      </div>

      {/* Main Checkout Content */}
      <div className="flex flex-col md:flex-row items-start justify-center w-full py-8 bg-white">
        <div className="w-full md:w-2/3 lg:w-1/2 px-4">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">Billing Details</h1>

          {/* Billing Details Form */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mb-4 w-full md:w-1/2">
                <label htmlFor="first-name" className="block text-sm font-medium text-black">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                />
              </div>

              <div className="mb-4 w-full md:w-1/2">
                <label htmlFor="last-name" className="block text-sm font-medium text-black">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                />
              </div>
            </div>

            {/* More billing info */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-black">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>

            {/* New Fields: Zip Code, Country, Province */}
            <div className="mb-4">
              <label htmlFor="zipCode" className="block text-sm font-medium text-black">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Enter your zip code"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-black">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="province" className="block text-sm font-medium text-black">Province</label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                placeholder="Enter your province"
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 bg-white shadow-lg rounded-lg p-6">
          <h1 className="font-bold pb-3 text-black">Your Order</h1>

          {/* Loop through the cart items and display them */}
          <div className="mb-6">
            {cart.length === 0 ? (
              <p>No items in the cart.</p>
            ) : (
              cart.map((item) => (
                <div key={item._id} className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    {/* Displaying product image */}
                    <img
                      src={item.image ? urlFor(item.image).url() : '/path/to/placeholder-image.jpg'}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>{item.name} x {item.quantity}</span>
                  </div>
                  <span className="text-brown-600">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          {/* Subtotal */}
          <div className="flex justify-between font-semibold py-2">
            <span>Subtotal</span>
            <span className="text-brown-600">Rs. {subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping / Tax */}
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>Rs. 0.00</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Tax</span>
            <span>Rs. 0.00</span>
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-bold py-4 border-t mt-4">
            <span>Total</span>
            <span className="text-[#B88E2F]">Rs. {subtotal.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleConfirmOrder}
            className="w-full mt-6 bg-[#B88E2F] text-white py-3 rounded-lg text-xl font-semibold hover:from-brown-700 hover:to-brown-900 transition-all duration-300 ease-in-out"
          >
            Confirm Order
          </button>
        </div>
      </div>

      {/* Order Success Message */}
      {orderSuccess && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-4 px-8 rounded-lg shadow-lg flex items-center space-x-4 z-50">
          <AiOutlineCheckCircle size={32} />
          <span className="text-lg font-semibold">Thank you for your order! Your order is being succesfully placed.</span>
        </div>
        
      )}<Shopfive/>
    </div>
  );
};

export default Checkout;
