import React from 'react'
import { useCart } from '../context/CartContext'  // Import useCart to access the cart

const Checkout = () => {
  const { cart } = useCart();  // Get cart data from context

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='flex flex-col md:flex-row items-start justify-center w-full py-8'>
      <div className='w-full md:w-2/3 lg:w-1/2 px-4'>
        <h1 className='text-2xl font-bold text-black mb-6'>Billing details</h1>

        {/* Billing Details Form */}
        <div className='flex flex-col md:flex-row gap-4 mb-6'>
          <div className="mb-4 w-full md:w-1/2">
            <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
            <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3" />
          </div>

          <div className="mb-4 w-full md:w-1/2">
            <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
            <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3" />
          </div>
        </div>

        {/* More billing details fields... */}

      </div>

      {/* Cart Summary */}
      <div className='w-full md:w-1/3 lg:w-1/4 px-4'>
        <h1 className='font-bold pb-3'>Your Order</h1>
        
        {/* Loop through the cart items and display them */}
        <div className="mb-6">
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="flex justify-between py-2 border-b">
                <span>{item.name} x {item.quantity}</span>
                <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))
          )}
        </div>

        {/* Subtotal */}
        <div className="flex justify-between font-semibold py-2">
          <span>Subtotal</span>
          <span>Rs. {subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping / Tax (Optional) */}
        <div className="flex justify-between py-2">
          <span>Shipping</span>
          <span>Rs. 0.00</span> {/* You can add logic for shipping costs */}
        </div>

        <div className="flex justify-between py-2">
          <span>Tax</span>
          <span>Rs. 0.00</span> {/* You can add logic for taxes */}
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg font-bold py-4 border-t mt-4">
          <span>Total</span>
          <span>Rs. {subtotal.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg">Confirm Order</button>
      </div>
    </div>
  );
}

export default Checkout;
