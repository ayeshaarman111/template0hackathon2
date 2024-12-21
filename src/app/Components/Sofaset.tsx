import React from 'react'

const Sofaset = () => {
  return (
    <div className="bg-[#FFF9E5] py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="flex flex-col items-center">
          <img
            src="/sofa7.png"
            alt="Side Table"
            className="w-full h-full object-cover"
          />
        </div>
  
        
        <div className="flex flex-col items-center">
          <h3 className="mt-10 text-lg font-semibold">New Arrivals</h3>
          <h1 className='flex items-center text-4xl font-bold mt-2'>Asgaard Sofa</h1>
          <button className='flex items-center font-medium text-sm mt-4  outline '>Order Now</button>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sofaset
