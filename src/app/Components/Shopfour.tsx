'use client';

import { useState, useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';  // Green checkmark icon
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useCart } from '../context/CartContext';  // Import the useCart hook

// Define the product type
type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  slug: { current: string } | null;
};


export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);  // State to hold products
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const { addToCart } = useCart();  // Get the addToCart function from CartContext
  const [showMessage, setShowMessage] = useState(false);  // State for the success message

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

  const handleAddToCart = (product: Product) => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,  // Ensure to pass the product image here
      slug: product.slug,
    });

    setShowMessage(true);  // Show success message
    setTimeout(() => setShowMessage(false), 4000);  // Hide message after 4 seconds
  };

  return (
    <main>
      <div className="bg-[#FAF4F4]  min-h-screen py-10">
        
        {/* Success message with higher z-index and larger size */}
        {showMessage && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center space-x-4 z-50 transition-all duration-500 ease-in-out scale-100 hover:scale-105">
            <AiOutlineCheckCircle size={32} className="text-white" />
            <span className="text-lg font-semibold">Item successfully added to cart!</span>
          </div>
        )}

        <h1 className="text-4xl font-bold text-black text-center p-10 drop-shadow-md">Our Featured Products</h1>

        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 px-5">
            {products.map((product) => (
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
                      onClick={() => handleAddToCart(product)}  // Add product to cart
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
