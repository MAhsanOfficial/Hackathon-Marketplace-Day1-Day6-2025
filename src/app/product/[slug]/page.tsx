import React from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type=="products" && slug.current==$slug][0]{
      _id,
      name,
      _type,
      price,
      image
    }`,
    { slug }
  );
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = params; // Remove await here
  const product = await getProduct(slug);


  const handleAddtoCart = (e:React.MouseEvent,product:Product) => {
      e.preventDefault();
      Swal.fire({
        position:'top-right',
        icon:'success',
        title:`${product.name} Added To Cart`,
        showConfirmButton:false,
        timer:2000
      })
      addToCart(product);
    }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product?.name}
              width={500}
              height={500}
              className="border shadow-lg rounded-lg"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-mono underline text-yellow-500 font-bold">{product.name}</h1>
          <h1 className="text-2xl font-mono  text-slate-300-500 font-bold">This Product Is Comming Soon in Market</h1>
          
          <p className="text-2xl text-slate-500 font-mono">{product.price}</p>
            <p className="text-1xl underline font-mono">{product.description}</p>

            <button className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl 
          hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e)=>handleAddtoCart(e,product)}>ADD TO CART</button>
            <Link href={'/Cart'} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl 
          hover:scale-110 transition-transform duration-300 ease-in-out">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;