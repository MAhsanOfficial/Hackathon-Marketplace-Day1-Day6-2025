'use client'
import React from "react";
import { useEffect,useState } from "react";
import Image from "next/image";
import sanityClient from "@sanity/client"
import product from "@/sanity/schemaTypes/product";
import { transaction } from "sanity/migrate";
import { transcode } from "buffer";
import { truncate } from "fs";
// import { SanityClient } from "sanity";




const sanity = sanityClient({
    projectId:"cwpgwasv",
    dataset:"production",
    apiVersion:"2023-01-01",
    useCdn:true
});
interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercent: number;
    imageUrl: string;
    productImage: {
        assest:{
            _ref:string;
        };
    };
    tags: string[];
}

const ProductCards= () => {
    const [products,setProducts] = useState<Product[]>([]);
    const [cart,setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try  {
            const query =  `
            *[type=="products"]{
            _id,
            price,
            description,
            discountPercent,
            "imageUrl":productImage.asset->url,
            tags
            }
            `;
            const data = await sanity.fetch(query);
            setProducts(data)
        }catch(error){
            console.log("Error Fetching Products",error)
        }
    };



    const addToCart = (product:Product)=> {
        setCart((prevCart)=>[...cart,product]);
        alert(`${product.title} Has been added to cart`)
    };
    useEffect(()=>{ 
    fetchProducts();
    },[])
    function truncateDescription(description: string): React.ReactNode | Iterable<React.ReactNode> {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="p-4">
            <h2 className="text-center text-gray-700 mt-4  mb-4 ">Products From API Data </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product)=>(
                    <div className="bg-slate-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300" key={product._id}>
  

<Image src={product.imageUrl} alt={product.title} width={300} height={300} className="w-full h-48 object-cover  rounded-md"/>

<div className="mt-4">
    <h2 className="text-lg font-semibold">{product.title}</h2>
    <p className="text-gray-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
    <div className="flex justify-between items-center mt-4">
        <div>
            <p className="text-slate-600 font-bold">{product.price}</p>
            {product.discountPercent>0 && (
                <p className="text-green-500 ">
                    {product.discountPercent}%OFF
                </p>
            )}
        </div>
    </div>


    <div className="mt-2 flex flex-wrap gap-2">
        {product.tags.map((tag,index)=>(
<span className="text-xs bg-gray-300 text-blue-500 rounded-full px-2 py-1" key={index} >
    {tag}
</span>
        ))}
    </div>

 
// Add to Cart Button


<button className="mt-4 w-full  bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-shadow duration-300 "onClick={()=>addToCart(product )}>Add To Card</button>

</div>

                    </div>
                ))}
            </div>



{/* Cart Summary */}
<div className="mt-8  bg-slate-300 p-6  rounded-md shadow-lg">
    <h2 className="text-lg font-bold text-red-600">Card Summary</h2>
    {cart.length>0 ? (
        <ul className="space-y-4 ">
           {cart.map((item,index)=>(
             <li key={index} className="flex justify-between bg-white shadow-md p-4 rounded-md items-center">


<div className="flex items-center gap-4">
    <p className="font-medium text-slate-800">{item.title}</p>
    <p className="text-blue-600 text-sm">{item.price.toFixed(2)}</p>
</div>

<Image src={item.imageUrl} alt={item.title} width={100} height={100} className="rounded-md"/>


                </li>
           ))}
        </ul>
    ):(
        <p className="text-black font-mono font-bold">Your Card Is Empty Please add Product</p>
    )}
</div>
        </div>
    )
}
export default ProductCards;
