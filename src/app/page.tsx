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
import Link from "next/link";
import { addToCart } from "./actions/actions";
import Swal from "sweetalert2";
import {SessionProvider} from "next-auth/react"
import UserButton from "@/components/user-button";


export default function Home() {
  const [product,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
    async function fetchproducts(){
     const fetchedProduct:Product[]= await client.fetch(allProducts);
     setProduct(fetchedProduct);
    }
    fetchproducts();
  },[])

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
  <>
  <Hero/>
  <Products/>
  <Browse/>

<section id="latest-product">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl underline  font-mono font-bold mb-6  text-center"> Our Latest Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-3">
      {product.map((product)=>(
        <div key={product._id} className=" justify-center border w-[400px] h-[300px] rounded-ld shadow-md p-4 m-2 hover:shadow-lg transition duration-300"> 
          <Link href={`/product/${product.slug.current}`}>
          {product.image && (
            <Image src={urlFor(product.image).url()} alt={product.name} width={200} height={200}/>
          )}
          <h1 className="text-lg font-mono font-semibold mt-4">   {product.name}</h1>
          <p className="text-gray-500 mt-2">{product.price}</p>
          <button className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl 
          hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e)=>handleAddtoCart(e,product)}>ADD TO CART</button>
          </Link>
        </div>
     ))}
    </div>
    </div>
    </section>

  <Rating/>
  <ProductCards/>
  </>
  );
}
