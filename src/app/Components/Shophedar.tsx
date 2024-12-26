import React from 'react'

const Shophedar = () => {
  return (
<div className="relative w-full h-[316px]">
<img src="/images/shophedar.jpg" alt="wallpaper" className="absolute inset-0 w-full h-full object-cover"></img>   
<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-1">
  <img src="/images/shoplogo.png" alt="logo" width={77} height={77} />
      <h1 className="text-black text-4xl font-bold">Shop</h1>
      <p className="text-black text-lg">Home & Shop</p>
    </div>
  </div>
  
  )
}

export default Shophedar
