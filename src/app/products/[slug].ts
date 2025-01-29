// pages/products/[slug].js

import { groq } from 'next-sanity';
import { client } from '../../lib/sanity'; // Import your Sanity client
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductPage = ({ product }) => {
  const router = useRouter();

  // Show a loading state while waiting for the page to load
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image.url} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch all product slugs
  const allProducts = await client.fetch(
    groq`*[_type == "product"] { slug }`
  );

  // Get the paths for all the products
  const paths = allProducts.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: true, // Set to true if you want to fallback to loading state
  };
}

export async function getStaticProps({ params }) {
  // Fetch the product data based on the slug
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  // Pass the fetched product to the page
  return {
    props: { product },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
}

export default ProductPage;
