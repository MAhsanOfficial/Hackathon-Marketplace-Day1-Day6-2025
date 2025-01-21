// import React from 'react'
// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../../types/products";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// interface ProductPageProps {
//     params:Promise<{slug:string}>;
// }
// async function getProduct(slug:string):Promise<Product> {
//    return client.fetch(
//     groq`*[_type=="products" && slug.current==$slug][0]{
//     _id,
//     name,
//     _type
//     price,
//     image
//     }`,{slug}
//    )

// }



// const ProductPage =async ({params}:ProductPageProps) => {
//     const {slug} =await params;
//     const product = await getProduct(slug);
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
// <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//     <div className="aspect-square ">
//         {product.image && (
//             <Image src={urlFor(product.image).url()} alt={product?.name} width={500} height={500} className=""/>
//         )}
//     </div>
//     <div className="flex flex-col gap-8 ">
//         <h1 className="text-4xl font-bold">{product.name}</h1>
//         <p className="text-1xl font-mono">{product.description}</p>
//         <p className="text-xl font-mono">{product.price}</p>
//     </div>
// </div>

//     </div>
//   )
// }

// export default ProductPage




import React from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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
            <button className="bg-blue-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
