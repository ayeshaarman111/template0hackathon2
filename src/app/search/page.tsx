'use client';

import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Search icon
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Define product type
type Product = {
  _id: string;
  name: string;
  image: any;
  description: string;
  price: number;
  slug: { current: string } | null;
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');  // Search query state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);  // Filtered products based on search query
  const [loading, setLoading] = useState<boolean>(true);  // Loading state for products
  const [allProducts, setAllProducts] = useState<Product[]>([]);  // All products fetched from Sanity

  // Fetch products from Sanity on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await client.fetch('*[_type == "product"]');
        setAllProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  const handleSearch = () => {
    if (!searchQuery) {
      setFilteredProducts(allProducts);  // Show all products if no search query
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Handle change in search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Trigger search when Enter is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;  // Show loading state
  }

  return (
    <main className="bg-gradient-to-r from-pink-300 via-indigo-400 to-purple-500 min-h-screen py-10">
      {/* Search bar */}
      <div className="max-w-lg mx-auto mb-10 p-5 bg-white rounded-lg shadow-lg flex items-center space-x-3">
        <AiOutlineSearch size={24} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}  // Detect Enter key press
          className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h1 className="text-4xl font-bold text-white text-center p-10 drop-shadow-md">Search Results</h1>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 px-5">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-xl text-gray-700">No products found. Try searching for something else.</div>
        ) : (
          filteredProducts.map((product) => (
            <li key={product._id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg bg-white overflow-hidden">
              {product.slug && product.slug.current ? (
                <Link href={`/product/${product.slug.current}`}>
                  <div className="relative h-60 w-82 flex justify-center items-center overflow-hidden rounded-t-xl">
                    <Image
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                      src={urlFor(product?.image).url()}
                      alt={product.name}
                      width={288}
                      height={180}
                    />
                  </div>
                </Link>
              ) : (
                <div className="relative h-60 w-82 flex justify-center items-center overflow-hidden rounded-t-xl">
                  <Image
                    className="object-cover w-full h-full"
                    src="/path/to/placeholder-image.jpg"
                    alt="No product slug"
                    width={288}
                    height={180}
                  />
                </div>
              )}
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <p className="text-xl font-bold text-gray-900 mb-4">${product.price}</p>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {/* handle add to cart logic here */}}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))
        )}
      </div>
    </main>
  );
};

export default SearchPage;
