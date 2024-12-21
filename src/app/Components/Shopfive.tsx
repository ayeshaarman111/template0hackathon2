import React from 'react'

const Shopfive = () => {
  return (
    <div className="bg-[#FAF4F4] flex flex-wrap items-center justify-center md:justify-evenly w-full h-auto space-y-5 md:space-y-0 md:h-[270px] px-4 py-6">
    <div className="text-center md:text-left md:w-1/3">
      <h1 className="text-2xl font-semibold">Free Delivery</h1>
      <p className="text-[#9F9F9F] pt-3">For all orders over $50, consectetur adipiscing elit.</p>
    </div>
    <div className="text-center md:text-left md:w-1/3">
      <h1 className="text-2xl font-semibold">90 Days Return</h1>
      <p className="text-[#9F9F9F] pt-3">If goods have problems, consectetur adipiscing elit.</p>
    </div>
    <div className="text-center md:text-left md:w-1/3">
      <h1 className="text-2xl font-semibold">Secure Payment</h1>
      <p className="text-[#9F9F9F] pt-3">100% secure payment, consectetur adipiscing elit.</p>
    </div>
  </div>
  
  )
}

export default Shopfive
