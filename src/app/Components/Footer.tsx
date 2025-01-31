import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
  <div className="container mx-auto px-2">
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div>
     
     <p className="text-gray-400">
       400 University Drive Suite 200<br/>
       Coral Gables, FL 35634 USA
     </p>
   </div>

    
   
      <div>
        <h3 className="text-lg font-medium text-gray-400 mb-4 ">Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline font-medium">Home</a></li>
          <li><a href="#" className="hover:underline font-medium">Shop</a></li>
          <li><a href="#" className="hover:underline font-medium">About</a></li>
          <li><a href="#" className="hover:underline font-medium">Contact</a></li>
        </ul>
      </div>

      <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-400 mb-4 ">Help</h3>
          <a href="#" className="block hover:underline font-medium">Payment Option</a>
          <a href="#" className="block hover:underline font-medium">Returns</a>
          <a href="#" className="block hover:underline font-medium">Privacy Policies</a>
          
        </div> 
     

      <div>
        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
        <form>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

     
     

      
    </div>

    <div className="mt-10 border-t border-gray-700 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
        
        
        <div className="text-black md:text-start">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
     </div>
     </div>
  </div>
</footer>

  )
}

export default Footer
