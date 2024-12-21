import React from 'react'



const Herothree = () => {
    return (
        <div className="bg-white w-full py-8">
        {/* Blog Title */}
        <div className="flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Top Picks For You</h1>
        </div>
      
        {/* Blog Subtitle */}
        <div className="flex items-center justify-center mt-4 px-4">
          <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
      
        {/* Blog Posts */}
        <div className="flex flex-col md:flex-row md:space-x-6 mt-8 space-y-8 md:space-y-0 justify-center items-center px-4">
          {/* Post 1 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/sofaone.png"
              alt="sofaone"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Trenton modular sofa_3
            </p>
            <button className="mt-2 font-medium">Rs. 25,000.00</button>
           
          </div>
      
          {/* Post 2 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/sofatwo.png"
              alt="sofatwo"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Granite dining table with dining chair
            </p>
            <button className="mt-2 font-medium ">Rs. 25,000.00</button>
           
          </div>
      
          {/* Post 3 */}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/sofathree.png"
              alt="sofathree"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Outdoor bar table and stool
            </p>
            <button className="mt-2 font-medium ">Rs. 25,000.00</button>



            
          </div>

         {/* post 4*/}
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/sofafour.png"
              alt="sofafour"
              className="rounded-lg w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-semibold">
            Plain console with teak mirror
            </p>
            <button className="mt-2 font-medium ">Rs. 25,000.00</button>



            
          </div>





        </div>
      
        {/* View All Link */}
        <div className="flex items-center justify-center mt-12">
          <h1 className="underline font-medium text-sm sm:text-base md:text-lg">
            View More
          </h1>
        </div>
      </div>
  )
}

export default Herothree
