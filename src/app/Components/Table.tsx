import React from 'react'

const Table = () => {
  return (
    <div className="bg-gray-50 py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="flex flex-col items-center">
          <img
            src="/sofa4.png"
            alt="Side Table"
            className="w-64 h-64 object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">Side table</h3>
          <a
            href="#"
            className="mt-2 text-sm text-gray-600 hover:text-gray-800 flex items-center"
          >
            View More
            <div
              className="ml-1 w-8 border-b border-black inline-block"
            ></div>
          </a>
        </div>
  
        
        <div className="flex flex-col items-center">
          <img
            src="sofa.png"
            alt="Sofa"
            className="w-64 h-64 object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold">Side table</h3>
          <a
            href="#"
            className="mt-2 text-sm text-gray-600 hover:text-gray-800 flex items-center"
          >
            View More
            <div
              className="ml-1 w-8 border-b border-black inline-block"
            ></div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table
