import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation

const Shophedar = () => {
  return (
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
          <Link href="shop">
            Shop
          </Link>
        </h1>
        
        {/* Home link */}
        <p className="text-black text-lg">
          <Link href="/">
            Home & Shop
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Shophedar;
