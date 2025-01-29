import { client } from "@/sanity/lib/client";
import groq from "groq";
import Image from "next/image";

interface Product {
  _id: string;
  id: string;
  _type: string;
  name: string;
  description: string;
  price: number;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  };
}

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        id,
        _type,
        name,
        description,
        price,
        slug,
        image {
            asset -> {
                url
            }
        }
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div className="text-center text-xl">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="flex justify-center">
          {product.image && product.image.asset.url && (
            <Image
              src={product.image.asset.url}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover rounded-xl shadow-lg"
            />
          )}
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
            {/* Add an Add to Cart button */}
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
          <div className="border-t pt-4 mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Product Details</h2>
            <p className="text-sm text-gray-500">ID: {product.id}</p>
            <p className="text-sm text-gray-500">Type: {product._type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
