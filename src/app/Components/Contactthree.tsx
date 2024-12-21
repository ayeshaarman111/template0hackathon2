import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

const Contactthree = () => {
  return (
    <div className="bg-white w-full py-12">
  {/* Blog Title */}
  <div className="text-center">
    <h1 className="text-2xl sm:text-3xl font-bold">Get In Touch With Us</h1>
    <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 px-4">
      For more information about our products & services, feel free to drop us an email. Our staff is always there to help you out. Don’t hesitate!
    </p>
  </div>

  {/* Main Container */}
  <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-12 mt-10 px-12 pt-10">
    {/* Contact Details */}
    <div className="w-full lg:w-1/2 space-y-8">
      {/* Address */}
      <div>
        <h2 className="flex items-center text-2xl font-semibold gap-3 text-gray-800">
          <IoLocationSharp /> Address
        </h2>
        <p className="text-gray-600 mt-2">236 5th SE Avenue, New York NY10000, United States</p>
      </div>

      {/* Phone */}
      <div className=''>
        <h2 className="flex items-center text-2xl font-semibold gap-3 text-gray-800">
          <FaPhoneAlt  /> Phone
        </h2>
        <p className="text-gray-600 mt-2">
          Mobile: +(84) 546-6789<br />
          Hotline: +(84) 456-6789
        </p>
      </div>

      {/* Working Time */}
      <div>
        <h2 className="flex items-center text-2xl font-semibold gap-3 text-gray-800">
          <GoClockFill  /> Working Time
        </h2>
        <p className="text-gray-600 mt-2">
          Monday-Friday: 9:00 - 22:00<br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="w-full lg:w-1/2 bg-[#FAF4F4]  p-6 rounded-lg shadow-md">
      <form action="/submit" method="POST" className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="This is optional"
            className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
          
            placeholder="Hi! I’d like to ask about..."
            className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-400 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Contactthree

