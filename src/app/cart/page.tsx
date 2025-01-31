'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';  // Import the useCart hook
import { urlFor } from "@/sanity/lib/image";  // Import the urlFor function to get image URLs
import { AiOutlineCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai';  // Icons for success and cart
import Link from 'next/link'; // Import Link for navigation

const CartPage = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();  // Access cart, remove, clear, and add functions
  const [removeMessage, setRemoveMessage] = useState(false); // State for remove message
  const [orderProcessing, setOrderProcessing] = useState(false); // State for order processing message
  const [orderSuccess, setOrderSuccess] = useState(false); // State for order success message
  const [emptyCartMessage, setEmptyCartMessage] = useState(false); // State for empty cart message

  // Function to handle increase quantity
  const handleIncrease = (item: any) => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  // Function to handle decrease quantity
  const handleDecrease = (item: any) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    }
  };

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    setRemoveMessage(true); // Show message when item is removed
    setTimeout(() => setRemoveMessage(false), 4000); // Hide message after 4 seconds
  };

  const handleCheckout = () => {
    setOrderProcessing(true); // Show "Processing" message when the user clicks checkout
    setTimeout(() => {
      clearCart(); // Clear the cart after processing
      setOrderProcessing(false); // Hide "Processing" message
      setOrderSuccess(true); // Show order success message
      setTimeout(() => setOrderSuccess(false), 5000); // Hide success message after 5 seconds
    }, 3000); // Simulate a 3-second processing time
  };

  // Show empty cart message only when the page loads and cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      setEmptyCartMessage(true); // Set empty cart message if no items in the cart
    } else {
      setEmptyCartMessage(false); // Hide if there are items
    }
  }, [cart]);

  return (
    <div className="bg-[#F7F7F7] min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Enhanced Cart Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#3E2723] drop-shadow-lg mb-3">
            Your Shopping Cart
          </h1>
          <p className="text-xl font-medium text-[#6A4C3C]">
            Check out your selected items and enjoy furniture shopping with Comfort Cove!
          </p>
          <div className="mt-5 text-[#D32F2F] text-xl">
            <span className="font-semibold">Relax,</span> your cart is in safe hands.
          </div>
        </div>

        {/* Show remove message when an item is removed */}
        {removeMessage && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center space-x-4 z-50 transition-all duration-500 ease-in-out scale-100 hover:scale-105">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <span className="text-lg font-semibold">Item removed from cart!</span>
          </div>
        )}

        {/* Show order processing message */}
        {orderProcessing && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center space-x-4 z-50 transition-all duration-500 ease-in-out scale-100 hover:scale-105">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <span className="text-lg font-semibold">Processing your order...</span>
          </div>
        )}

        {/* Show order success message */}
        {orderSuccess && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-6 px-10 rounded-2xl shadow-2xl flex items-center space-x-4 z-50 transition-all duration-500 ease-in-out scale-100 hover:scale-105">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <div className="text-lg font-semibold">
              <p>Thank you for your purchase!</p>
              <p className="text-sm mt-2">Your order is being processed, and you will receive an email confirmation soon.</p>
            </div>
          </div>
        )}

        {/* Show "Your Cart is Empty" message only when directly visiting the cart page and cart is empty */}
        {emptyCartMessage && !orderProcessing && !orderSuccess && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white py-6 px-10 rounded-2xl shadow-2xl flex items-center space-x-4 z-50 transition-all duration-500 ease-in-out scale-100 hover:scale-105">
            <AiOutlineShoppingCart size={32} className="text-white" />
            <div className="text-lg font-semibold">
              <p>Oh no! Your cart is empty.</p>
              <p className="text-sm mt-2">Add some products to your cart and continue shopping!</p>
            </div>
            {/* Go to Shop Button */}
            <Link href="/shop">
              <button
                className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
              >
                Go to Shop
              </button>
            </Link>
          </div>
        )}

        {/* If cart has items, display the cart content */}
        {cart.length > 0 && (
          <div className="space-y-8">
            {cart.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center border-t-4 border-[#6A4C3C]">
                <div className="flex items-center space-x-4">
                  {/* Image and Title */}
                  <img
                    src={item.image ? urlFor(item.image).url() : '/path/to/placeholder-image.jpg'}  // Use urlFor to get image URL
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg shadow-md border border-[#D32F2F]"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-[#3E2723]">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.name}</p>
                    <p className="text-lg font-bold text-[#D32F2F]">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="px-4 py-2 bg-[#6A4C3C] text-white rounded-lg hover:bg-[#8B5E3C] transition"
                    >
                      -
                    </button>
                    <span className="text-xl text-[#3E2723]">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-4 py-2 bg-[#6A4C3C] text-white rounded-lg hover:bg-[#8B5E3C] transition"
                    >
                      +
                    </button>
                  </div>
                  {/* Total Price for this Item */}
                  <p className="text-lg font-semibold text-[#3E2723]">${item.price * item.quantity}</p>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="px-4 py-2 bg-[#D32F2F] text-white rounded-lg hover:bg-[#C2185B] transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Price for All Items */}
            <div className="flex justify-between items-center bg-white rounded-lg shadow-lg p-6 mt-6 border-t-4 border-[#6A4C3C]">
              <h3 className="text-xl font-bold text-[#3E2723]">Total Price</h3>
              <p className="text-2xl font-bold text-[#D32F2F]">
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>

            {/* Clear Cart and Checkout Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#6A4C3C] transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-3 bg-[#3E2723] text-white rounded-lg hover:bg-[#5D4037] transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
