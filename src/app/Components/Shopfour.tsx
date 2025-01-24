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
  imagePath: any;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
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
    return <div>Loading...</div>;  // You can show a loading message or spinner while the data is being fetched
  }

  return (
    <main>
      <div className="bg-pink-100">
        <h1 className="text-4xl font-bold text-center p-10">Products</h1>
        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products.map((product) => (
              <li key={product._id}>
                <Link href={`/product/${product._id}`}>
                  {/* Generate the image URL using the urlFor function */}
                  <Image
                    className="relative h-60 w-22 object-cover rounded-t-xl"
                    src={product?.imagePath} // Using urlFor to generate the image URL
                    alt={product.name}
                    width={300}
                    height={200}
                  />
                </Link>

                <div className="px-4 py-3 w-72">
                  <h2 className="text-orange-600 font-bold text-2xl">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <p className="text-xl font-bold text-gray-700">
                    Price: ${product.price}
                  </p>
                  <div className="flex flex-col text-blue-700 p-2 rounded-lg">
                    <p>Category: {product.category}</p>
                    <div className="font-bold border p-2 hover:bg-black hover:text-white rounded-lg">
                      <Link href={""}>
                        <button onClick={showAlert}>Add To Cart</button>
                      </Link>
                    </div>
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
