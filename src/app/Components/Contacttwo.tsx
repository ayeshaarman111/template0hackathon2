import React from 'react'

const Contacttwo = () => {
  return (
    <div className="relative w-full h-[316px]">
    <img src="/shophedar.jpg" alt="wallpaper" className="absolute inset-0 w-full h-full object-cover"></img>   
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-1">
      <img src="shoplogo.png" alt="logo" width={77} height={77} />
          <h1 className="text-black text-4xl font-bold">Contact</h1>
          <p className="text-black text-lg">Home & Contact</p>
        </div>
      </div>
  )
}

export default Contacttwo
