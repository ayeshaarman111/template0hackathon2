import React from 'react'


const Hero = () => {
  return (
<div className="flex bg-[#FBEBB5] items-center w-full h-auto md:h-[579px] mx-auto px-4 py-8 md:px-8 md:py-0 md:justify-evenly flex-col md:flex-row">
  {/* Left Content */}
  <div className="w-full md:w-[50%] text-center md:text-left">
    <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold">
      Roket Single <br /> Seater
    </h1>
    <div className="mt-7">
      <button className="flex mx-auto md:mx-0 font-medium underline">
        Shop Now
      </button>
    </div>
  </div>

  {/* Right Content */}
  <div className="w-full md:w-[50%] flex justify-center items-center mt-8 md:mt-0">
    <img
      src="/images/sofa.png"
      alt="sofa"
      className="max-w-full h-auto md:h-[400px] md:w-[540px] object-contain"
    />
  </div>
</div>

  )
}

export default Hero
