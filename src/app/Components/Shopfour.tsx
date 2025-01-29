'use client';

import { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Define the product type, including the 'slug' field
type Product = {
  _id: string;
  name: string;
  image: any; // Image will be a reference
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
  slug: { current: string } | null; // Allow slug to be null
};

const showAlert = () => {
  alert("Product added to cart");
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);  // State to hold products
  const [loading, setLoading] = useState<boolean>(true);  // Loading state

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await client.fetch('*[_type == "product"]');
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;  // Show loading state
  }

  return (
    <main>
      <div className="bg-gradient-to-r from-pink-300 via-indigo-400 to-purple-500 min-h-screen py-10">
        <h1 className="text-4xl font-bold text-white text-center p-10 drop-shadow-md">Our Featured Products</h1>
        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 px-5">
            {products.map((product) => (
              <li key={product._id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg bg-white overflow-hidden">
                {/* Check if slug exists before linking */}
                {product.slug && product.slug.current ? (
                  <Link href={`/product/${product.slug.current}`}>
                    {/* Generate the image URL using the urlFor function */}
                    <div className="relative h-60 w-82 flex justify-center items-center overflow-hidden rounded-t-xl">
                      <Image
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                        src={urlFor(product?.image).url()} // Generate URL from image reference
                        alt={product.name}
                        width={288}  // Image width
                        height={180}  // Image height
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative h-60 w-82 flex justify-center items-center overflow-hidden rounded-t-xl">
                    {/* Fallback Image or Placeholder */}
                    <Image
                      className="object-cover w-full h-full"
                      src="/path/to/placeholder-image.jpg" // Provide a placeholder image if slug is missing
                      alt="No product slug"
                      width={288}  
                      height={180}  
                    />
                  </div>
                )}

                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name || 'Unnamed Product'}</h2>
                  <p className="text-gray-600 text-sm mb-4">{product.description || 'No description available.'}</p>
                  <p className="text-xl font-bold text-gray-900 mb-4">${product.price || 'N/A'}</p>
                  <p className="text-sm text-gray-500 mb-4">Category: {product.category || 'Uncategorized'}</p>

                  <div className="flex justify-center items-center">
                    <button
                      onClick={showAlert}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
