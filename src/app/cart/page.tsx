'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';  
import { urlFor } from "@/sanity/lib/image";  
import { AiOutlineCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai';  
import Link from 'next/link'; 
import Shopfive from '../Components/Shopfive';

// Define the CartItem type
interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; 
  slug: { current: string } | null | undefined; // You can replace 'any' with a more specific type if you know the structure of the image.
}

const CartPage = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();  
  const [removeMessage, setRemoveMessage] = useState(false); 
  const [orderProcessing, ] = useState(false); 
  const [orderSuccess,] = useState(false); 
  const [emptyCartMessage, setEmptyCartMessage] = useState(false); 

  const handleIncrease = (item: CartItem) => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecrease = (item: CartItem) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    }
  };

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    setRemoveMessage(true); 
    setTimeout(() => setRemoveMessage(false), 4000); 
  };

  useEffect(() => {
    if (cart.length === 0) {
      setEmptyCartMessage(true);
    } else {
      setEmptyCartMessage(false);
    }
  }, [cart]);

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
          <h1 className="text-black text-4xl font-bold">
            <Link href="Cart">
              Cart
            </Link>
          </h1>
          
          {/* Home link */}
          <p className="text-black text-lg">
            <Link href="/">
              Home & Cart
            </Link>
          </p>
        </div>
      </div>

    <div className="bg-[#F7F7F7] min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3E2723] drop-shadow-lg mb-3">
            Your Shopping Cart
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#6A4C3C]">
            Check out your selected items and enjoy shopping with us!
          </p>
          <div className="mt-5 text-[#D32F2F] text-xl">
            <span className="font-semibold">Relax,</span> your cart is in safe hands.
          </div>
        </div>

        {removeMessage && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center space-x-4 z-50">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <span className="text-lg font-semibold">Item removed from cart!</span>
          </div>
        )}

        {orderProcessing && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center space-x-4 z-50">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <span className="text-lg font-semibold">Processing your order...</span>
          </div>
        )}

        {orderSuccess && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-6 px-10 rounded-2xl shadow-2xl flex items-center space-x-4 z-50">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <div className="text-lg font-semibold">
              <p>Thank you for your purchase!</p>
              <p className="text-sm mt-2">Your order is being processed, and you will receive an email confirmation soon.</p>
            </div>
          </div>
        )}

        {emptyCartMessage && !orderProcessing && !orderSuccess && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white py-6 px-10 rounded-2xl shadow-2xl flex items-center space-x-4 z-50">
            <AiOutlineShoppingCart size={32} className="text-white" />
            <div className="text-lg font-semibold">
              <p>Oh no! Your cart is empty.</p>
              <p className="text-sm mt-2">Add some products to your cart and continue shopping!</p>
            </div>
            <Link href="/shop">
              <button
                className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
              >
                Go to Shop
              </button>
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <div className="space-y-8">
            {cart.map((item: CartItem) => (
              <div key={item._id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center border-t-4 border-[#6A4C3C] space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image ? urlFor(item.image).url() : '/path/to/placeholder-image.jpg'}
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
                  <p className="text-lg font-semibold text-[#3E2723]">${item.price * item.quantity}</p>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="px-4 py-2 bg-[#D32F2F] text-white rounded-lg hover:bg-[#C2185B] transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center bg-white rounded-lg shadow-lg p-6 mt-6 border-t-4 border-[#6A4C3C]">
              <h3 className="text-xl font-bold text-[#3E2723]">Total Price</h3>
              <p className="text-2xl font-bold text-[#D32F2F]">
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between mt-6 flex-col sm:flex-row">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#6A4C3C] transition w-full sm:w-auto"
              >
                Clear Cart
              </button>

              {/* Use Link component to navigate to the checkout page */}
              <Link href="/Checkout">
                <button
                  className="px-6 py-3 bg-[#3E2723] text-white rounded-lg hover:bg-[#5D4037] transition mt-4 sm:mt-0 w-full sm:w-auto"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
        <Shopfive/>
      </div>
    </div>
  </div>
  );
};

export default CartPage;
