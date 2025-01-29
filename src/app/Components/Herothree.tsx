'use client';

import { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Define the product type
type Product = {
  _id: string;
  name: string;
  image: any;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);  // State to hold featured products
  const [loading, setLoading] = useState<boolean>(true);  // Loading state

  // Fetch featured products on component mount (limit to the first 3)
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const featuredProductsData = await client.fetch('*[_type == "product" && isFeaturedProduct == true][0..2]'); // Fetch only first 3 featured products
        setProducts(featuredProductsData);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading Featured Products...</div>;  // Loading message
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-pink-300 via-indigo-400 to-purple-500">
      <div className="flex flex-col items-center justify-center py-5 px-3"> {/* Reduced padding */}
        <h1 className="text-3xl font-bold text-white text-center drop-shadow-md mb-6">Featured Products</h1> {/* Reduced header size */}

        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8"> {/* Reduced gap */}
          {products.map((product) => (
            <li key={product._id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg bg-white overflow-hidden">
              <Link href={`/product/${product._id}`}>
                {/* Product image */}
                <div className="relative h-52 w-72 flex justify-center items-center overflow-hidden rounded-t-xl"> {/* Reduced height */}
                  <Image
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                    src={urlFor(product?.image).url()} // Dynamically generated image URL
                    alt={product.name}
                    width={288}
                    height={180}
                  />
                </div>
              </Link>

              <div className="px-4 py-3"> {/* Reduced padding */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name || 'Unnamed Product'}</h2> {/* Reduced font size */}
                <p className="text-gray-600 text-sm mb-3">{product.description || 'No description available.'}</p> {/* Reduced text size */}
                <p className="text-lg font-bold text-gray-900 mb-3">${product.price || 'N/A'}</p> {/* Reduced text size */}
                <p className="text-sm text-gray-500 mb-3">Category: {product.category || 'Uncategorized'}</p> {/* Reduced text size */}

                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out text-sm"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-6">
          <Link href="/Shopfour">
            <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
