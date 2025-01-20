'use client';
import Browse from "@/components/Browse";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Rating from "@/components/Rating";
import ProductCards from "./Products/page";
import { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


export default function Home() {
  const [product,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
    async function fetchproducts(){
     const fetchedProduct:Product[]= await client.fetch(allProducts);
     setProduct(fetchedProduct);
    }
    fetchproducts();
  },[])
  return (
  <>
  <Hero/>
  <Products/>
  <Browse/>


    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-mono font-bold mb-6  text-center"> Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {product.map((product)=>(
        <div key={product._id} className="flex justify-center border rounded-ld shadow-md p-4 m-2 hover:shadow-lg transition duration-300"> 
          {product.image && (
            <Image src={urlFor(product.image).url()} alt={product.name} width={300} height={300}/>
          )}
          <h1 className="text-lg font-mono font-semibold mt-4">   {product.name}</h1>
          <p className="text-gray-500 mt-2">{product.price}</p>
        </div>
     ))}
    </div>
    </div>


  <Rating/>
  <ProductCards/>
  </>
  );
}
