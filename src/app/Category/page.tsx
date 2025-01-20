// import React from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { HiAdjustmentsVertical } from "react-icons/hi2";
// import { TiTick } from "react-icons/ti";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import Image from "next/image";
// import { FaRegStar } from "react-icons/fa";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// const Category = () => {
//   return (
//     <>
      
//       <div className="w-full mt-8 border-b-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>
//       <div className="flex gap-3 mt-4 px-4 sm:px-8 lg:px-16">
//         <p className="text-slate-500 flex items-center text-sm sm:text-base">
//           Home <IoIosArrowForward className="mx-1" />
//         </p>
//         <p className="text-sm sm:text-base">Casual</p>
//       </div>

//       <div className="flex flex-col  lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 mt-6">
       
//         <div className="w-full lg:w-[300px] h-[1220px] border border-gray-300 rounded-2xl p-4 space-y-6">
          
//           <div className="flex items-center justify-between">
//             <h4 className="font-bold text-lg sm:text-xl">Filters</h4>
//             <HiAdjustmentsVertical className="text-gray-400" />
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
         
//           <div className="space-y-4">
//             <h5 className="text-base font-bold">Categories</h5>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">T-shirts</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Shorts</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Shirts</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Hoodie</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
//           {/* Price Slider */}
//           <div>
//             <div className="flex justify-between items-center">
//               <h5 className="text-base font-bold">Price</h5>
//               <MdKeyboardArrowUp className="w-4 h-4" />
//             </div>
//             <div className="mt-2 relative">
//               <div className="w-full h-1 bg-gray-200 rounded-full">
//                 <div className="absolute left-1/4 right-1/4 h-1 bg-black rounded-full"></div>
//               </div>
//               <div className="flex justify-between text-sm mt-2">
//                 <span>$50</span>
//                 <span>$200</span>
//               </div>
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
         
//           <div>
//             <div className="flex justify-between items-center">
//               <h5 className="text-base font-bold">Colors</h5>
//               <MdKeyboardArrowUp className="w-4 h-4" />
//             </div>
//             <div className="grid grid-cols-5 gap-2 mt-3">
//               <div className="w-8 h-8 rounded-full border-2 bg-[#00C12B]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F50606]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F5DD06]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F57906]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#06CAF5]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#063AF5] flex items-center justify-center">
//                 <TiTick className="text-white" />
//               </div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#7D06F5]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F506A4]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#FFFFFF]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#000000]"></div>
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>

         
//           <div>
//             <div className="flex justify-between items-center">
//               <h5 className="text-base font-bold">Size</h5>
//               <MdKeyboardArrowUp className="w-4 h-4" />
//             </div>
//             <div className="flex flex-wrap gap-2 mt-3">
//               <span className="px-5 py-2 rounded-[62px] w-[106px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 XX-Small
//               </span>
//               <span className="px-3 w-[88px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 X-Small
//               </span>
//               <span className="px-4 w-[74px] h-[39px] py-2 rounded-[62px]  bg-gray-200  text-sm border text-gray-500">
//                 Small
//               </span>
//               <span className="px-4 py-2 rounded-[62px] w-[90px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 Medium
//               </span>
//               <span className="px-4 py-2 rounded-[62px] w-[76px] h-[39px] text-sm border  bg-black text-white">
//                 Large
//               </span>
//               <span className="px-3 py-2 rounded-[62px] w-[89px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 X-Large
//               </span>
//               <span className="px-4 py-2 rounded-[62px] w-[98px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 XX-Large
//               </span>
//               <span className="px-3 py-2 rounded-[62px] w-[97px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 3X-Large
//               </span>
//               <span className="px-4 py-2 rounded-[62px] w-[10 8px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 4 X-Large
//               </span>
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
//           <div className="flex items-center justify-between">
//             <h4 className="font-bold text-lg sm:text-xl">Dress Style</h4>
//             <MdKeyboardArrowUp />

//           </div>

         
//           <div className="space-y-4">
           
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Casual</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Formal</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Party</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Gym</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//           </div>
//           <button className='w-[247px] h-12 rounded-[62px] py-[10px] px-[54px] gap-3 bg-black text-white font-medium text-sm leading-[18.9px]'>Apply Filter</button>
//         </div>




        
//         <div className="flex-1">
//           <h3 className="font-bold text-2xl sm:text-3xl">Casual</h3>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-gray-500 text-sm sm:text-base">
//               Showing 1-9 of 100 Products
//             </p>
//             <p className="text-sm sm:text-base">
//               Sort by: <span className="font-medium text-black">Most Popular</span>
//             </p>
//           </div>

         
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category1.png"
//                 alt="Product 1"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Gradient Graphic T-shirt</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">3.5/5</span>
//               </div>
//               <div className="text-2xl font-bold">$145</div>
//             </div>
           
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category2.png"
//                 alt="Product 2"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Polo with Tipping Details</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">4.5/5</span>
//               </div>
//               <div className="text-2xl font-bold">$180</div>
//             </div>
           
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category3.png"
//                 alt="Product 3"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Black Striped T-shirt</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">5.0/5</span>
//               </div>
              
//               <div className="flex flex-wrap items-center gap-3 mb-10">
//   <h3 className="text-xl sm:text-2xl font-bold">$120</h3>
//   <h3 className="text-xl sm:text-2xl text-gray-500">$150</h3>
//   <span className="
//     bg-pink-300 
//     w-[58px] 
//     h-7 
//     flex items-center justify-center 
//     py-[3px] px-[9px] 
//     text-xs sm:text-sm 
//     text-red-500 
//     rounded-full
//   ">
//     -30%
//   </span>
// </div>

             
//             </div>
           
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category4.png"
//                 alt="Product 4"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">SKINNY FIT JEANS</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">3.5/5</span>
//               </div>
//               <div className="flex flex-wrap items-center gap-3 mb-10">
//   <h3 className="text-xl sm:text-2xl font-bold">$240</h3>
//   <h3 className="text-xl sm:text-2xl text-gray-500">$260</h3>
//   <span className="
//     bg-pink-300 
//     w-[58px] 
//     h-7 
//     flex items-center justify-center 
//     py-[3px] px-[9px] 
//     text-xs sm:text-sm 
//     text-red-500 
//     rounded-full
//   ">
//     -20%
//   </span>
// </div>

//             </div>
           
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category5.png"
//                 alt="Product 5"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Cheackered Shirt</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">4.5/5</span>
//               </div>
//               <div className="text-2xl font-bold">$180</div>
//             </div>
           
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category6.png"
//                 alt="Product 6"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Sleeve Striped T-shirt</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">5.0/5</span>
//               </div>
//               <div className="flex flex-wrap items-center gap-3 mb-10">
//   <h3 className="text-xl sm:text-2xl font-bold">$130</h3>
//   <h3 className="text-xl sm:text-2xl text-gray-500">$160</h3>
//   <span className="
//     bg-pink-300 
//     w-[58px] 
//     h-7 
//     flex items-center justify-center 
//     py-[3px] px-[9px] 
//     text-xs sm:text-sm 
//     text-red-500 
//     rounded-full
//   ">
//     -30%
//   </span>
// </div>

//             </div>
          
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category7.png"
//                 alt="Product 7"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Verticle Striped Shirt</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">5.0/5</span>
//               </div>
//               <div className="flex flex-wrap items-center gap-3 mb-10">
//   <h3 className="text-xl sm:text-2xl font-bold">$212</h3>
//   <h3 className="text-xl sm:text-2xl text-gray-500">$232</h3>
//   <span className="
//     bg-pink-300 
//     w-[58px] 
//     h-7 
//     flex items-center justify-center 
//     py-[3px] px-[9px] 
//     text-xs sm:text-sm 
//     text-red-500 
//     rounded-full 
//   ">
//     -20%
//   </span>
// </div>

//             </div>
          
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category8.png"
//                 alt="Product 8"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Courage Graphic T-shirt</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">4.0/5</span>
//               </div>
//               <div className="text-2xl font-bold">$145</div>
//             </div>
          
//             <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
//               <Image
//                 src="/images/category9.png"
//                 alt="Product 9"
//                 width={295}
//                 height={298}
//                 className="rounded-lg"
//               />
//               <h4 className="font-bold text-lg">Loose Fit Bermuda Shorts</h4>
//               <div className="flex items-center gap-1 text-yellow-400">
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <FaRegStar />
//                 <span className="text-sm text-gray-500">3.0/5</span>
//               </div>
//               <div className="text-2xl font-bold">$80</div>
//             </div>
//           </div>
//           <br />
//           <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 relative">
 
//   <div className="flex items-center h-9 rounded-lg border border-gray-400 py-2 px-4 gap-2">
//     <FaArrowLeftLong />
//     <p className="font-medium text-sm leading-[20px]">Previous</p>
//   </div>

  
//   <div className="flex flex-wrap justify-center gap-2">
//     <span className="w-10 h-10 rounded-lg p-2 bg-slate-100 font-medium text-sm flex items-center justify-center">1</span>
//     <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">2</span>
//     <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">3</span>
//     <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">...</span>
//     <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">8</span>
//     <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">9</span>
//     <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">10</span>
//   </div>

  
//   <div className="flex items-center h-9 rounded-lg border border-gray-400 py-2 px-4 gap-2">
//     <p className="font-medium text-sm leading-[20px]">Next</p>
//     <FaArrowRightLong />
//   </div>
// </div>

//         </div>
//       </div>



// <br />
//     </>
//   );
// };

// export default Category; 



// import React from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { HiAdjustmentsVertical } from "react-icons/hi2";
// import { TiTick } from "react-icons/ti";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import Image from "next/image";
// import { FaRegStar } from "react-icons/fa";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// const Category = () => {
//   // Product data as an array of objects
//   const products = [
//     {
//       id: 1,
//       image: "/images/category1.png",
//       title: "Gradient Graphic T-shirt",
//       rating: 3.5,
//       price: 145,
//       oldPrice: null,
//       discount: null,
//     },
//     {
//       id: 2,
//       image: "/images/category2.png",
//       title: "Polo with Tipping Details",
//       rating: 5.0,
//       price: 180,
//       oldPrice: null,
//       discount: null,
//     },
//     {
//       id: 3,
//       image: "/images/category3.png",
//       title: "Black Striped T-shirt",
//       rating: 5.0,
//       price: 120,
//       oldPrice: 150,
//       discount: 30,
//     },
//     {
//       id: 4,
//       image: "/images/category4.png",
//       title: "SKINNY FIT JEANS",
//       rating: 3.5,
//       price: 240,
//       oldPrice: 260,
//       discount: 20,
//     },
//     {
//       id: 5,
//       image: "/images/category5.png",
//       title: "Cheackered Shirt",
//       rating: 4.5,
//       price: 180,
//       oldPrice: null,
//       discount: null,
//     },
//     {
//       id: 6,
//       image: "/images/category6.png",
//       title: "Sleeve Striped T-shirt",
//       rating: 5.0,
//       price: 130,
//       oldPrice: 160,
//       discount: 30,
//     },
//     {
//       id: 7,
//       image: "/images/category7.png",
//       title: "Verticle Striped Shirt",
//       rating: 5.0,
//       price: 212,
//       oldPrice: 232,
//       discount: 20,
//     },
//     {
//       id: 8,
//       image: "/images/category8.png",
//       title: "Courage Graphic T-shirt",
//       rating: 4.0,
//       price: 145,
//       oldPrice: null,
//       discount: null,
//     },
//     {
//       id: 9,
//       image: "/images/category9.png",
//       title: "Loose Fit Bermuda Shorts",
//       rating: 3.0,
//       price: 80,
//       oldPrice: null,
//       discount: null,
//     },
//   ];

//   return (
//     <>
//       <div className="w-full mt-8 border-b-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>
//       <div className="flex gap-3 mt-4 px-4 sm:px-8 lg:px-16">
//         <p className="text-slate-500 flex items-center text-sm sm:text-base">
//           Home <IoIosArrowForward className="mx-1" />
//         </p>
//         <p className="text-sm sm:text-base">Casual</p>
//       </div>

//       <div className="flex flex-col  lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 mt-6">
       
//         <div className="w-full lg:w-[300px] h-[1220px] border border-gray-300 rounded-2xl p-4 space-y-6">
          
//           <div className="flex items-center justify-between">
//             <h4 className="font-bold text-lg sm:text-xl">Filters</h4>
//             <HiAdjustmentsVertical className="text-gray-400" />
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
         
//           <div className="space-y-4">
//             <h5 className="text-base font-bold">Categories</h5>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">T-shirts</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Shorts</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Shirts</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-slate-500 text-sm sm:text-base">Hoodie</p>
//               <IoIosArrowForward className="text-gray-500" />
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
//           {/* Price Slider */}
//           <div>
//             <div className="flex justify-between items-center">
//               <h5 className="text-base font-bold">Price</h5>
//               <MdKeyboardArrowUp className="w-4 h-4" />
//             </div>
//             <div className="mt-2 relative">
//               <div className="w-full h-1 bg-gray-200 rounded-full">
//                 <div className="absolute left-1/4 right-1/4 h-1 bg-black rounded-full"></div>
//               </div>
//               <div className="flex justify-between text-sm mt-2">
//                 <span>$50</span>
//                 <span>$200</span>
//               </div>
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
         
//           <div>
//             <div className="flex justify-between items-center">
//               <h5 className="text-base font-bold">Colors</h5>
//               <MdKeyboardArrowUp className="w-4 h-4" />
//             </div>
//             <div className="grid grid-cols-5 gap-2 mt-3">
//               <div className="w-8 h-8 rounded-full border-2 bg-[#00C12B]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F50606]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F5DD06]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F57906]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#06CAF5]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#063AF5] flex items-center justify-center">
//                 <TiTick className="text-white" />
//               </div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#7D06F5]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#F506A4]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#FFFFFF]"></div>
//               <div className="w-8 h-8 rounded-full border-2 bg-[#000000]"></div>
//             </div>
//           </div>
//           <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>

         
//           <div>
//             <div className="flex justify-between items-center">
//               <h5 className="text-base font-bold">Size</h5>
//               <MdKeyboardArrowUp className="w-4 h-4" />
//             </div>
//             <div className="flex flex-wrap gap-2 mt-3">
//               <span className="px-5 py-2 rounded-[62px] w-[106px] h-[39px] text-sm border bg-gray-200 text-gray-500">
//                 XX-Small
//               </span>
//               <span className="px-3 w-[88px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 X-Small
//               </span>
//               <span className="px-3 w-[88px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 Small
//               </span>
//               <span className="px-4 w-[100px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 Medium
//               </span>
//               <span className="px-4 w-[100px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 Large
//               </span>
//               <span className="px-4 w-[100px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 X-Large
//               </span>
//               <span className="px-4 w-[100px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
//                 XX-Large
//               </span>
//             </div>
//           </div>
//         </div>
        
//         <div className="w-full lg:w-[1000px]">
//           <div className="flex justify-between items-center">
//             <h3 className="text-2xl font-bold">Casual</h3>
//             <div className="flex items-center gap-3">
//               <p className="text-gray-600 text-sm">Sort By</p>
//               <select className="border-gray-300 border p-2 rounded-md text-sm">
//                 <option>Recommended</option>
//                 <option>Price</option>
//                 <option>Popular</option>
//               </select>
//               <FaArrowLeftLong className="w-5 h-5 text-gray-600" />
//               <FaArrowRightLong className="w-5 h-5 text-gray-600" />
//             </div>
//           </div>
//           <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-6">
//             {products.map((product) => (
//               <div key={product.id} className="border p-4 rounded-2xl">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={300}
//                   height={300}
//                   className="w-full h-[300px] object-cover rounded-2xl"
//                 />
//                 <h4 className="text-lg font-semibold mt-4">{product.title}</h4>
//                 <div className="flex items-center mt-2">
//                   <FaRegStar className="text-yellow-400" />
//                   <FaRegStar className="text-yellow-400" />
//                   <FaRegStar className="text-yellow-400" />
//                   <FaRegStar className="text-yellow-400" />
//                   <FaRegStar className="text-gray-300" />
//                   <span className="text-xs text-gray-400 ml-2">{product.rating}</span>
//                 </div>
//                 <div className="mt-2">
//                   {product.oldPrice ? (
//                     <>
//                       <span className="text-sm font-semibold text-gray-600">
//                         ${product.oldPrice}
//                       </span>
//                       <span className="text-lg font-semibold text-black ml-2">
//                         ${product.price}
//                       </span>
//                     </>
//                   ) : (
//                     <span className="text-lg font-semibold text-black">
//                       ${product.price}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
// <br />
//       <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 relative">
 
//    <div className="flex items-center h-9 rounded-lg border border-gray-400 py-2 px-4 gap-2">
//       <FaArrowLeftLong />
//       <p className="font-medium text-sm leading-[20px]">Previous</p>
//     </div>
 
   
//     <div className="flex flex-wrap justify-center gap-2">
//       <span className="w-10 h-10 rounded-lg p-2 bg-slate-100 font-medium text-sm flex items-center justify-center">1</span>
//       <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">2</span>
//       <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">3</span>
//       <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">...</span>
//       <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">8</span>
//       <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">9</span>
//       <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">10</span>
//     </div>
 
   
//    <div className="flex items-center h-9 rounded-lg border border-gray-400 py-2 px-4 gap-2">
//       <p className="font-medium text-sm leading-[20px]">Next</p>
//       <FaArrowRightLong />
//     </div>
//   </div>
 
       

//     <br />  
//     </>
//   );
// };

// export default Category;




import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
// Keep other imports as is

const Category = () => {
  const products = [
    {
      id: 1,
      image: "/images/category1.png",
      title: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: 145,
      oldPrice: null,
      discount: null,
    },
    {
      id: 2,
      image: "/images/category2.png",
      title: "Polo with Tipping Details",
      rating: 5.0,
      price: 180,
      oldPrice: null,
      discount: null,
    },
    {
      id: 3,
      image: "/images/category3.png",
      title: "Black Striped T-shirt",
      rating: 5.0,
      price: 120,
      oldPrice: 150,
      discount: 30,
    },
    {
      id: 4,
      image: "/images/category4.png",
      title: "SKINNY FIT JEANS",
      rating: 3.5,
      price: 240,
      oldPrice: 260,
      discount: 20,
    },
    {
      id: 5,
      image: "/images/category5.png",
      title: "Cheackered Shirt",
      rating: 4.5,
      price: 180,
      oldPrice: null,
      discount: null,
    },
    {
      id: 6,
      image: "/images/category6.png",
      title: "Sleeve Striped T-shirt",
      rating: 5.0,
      price: 130,
      oldPrice: 160,
      discount: 30,
    },
    {
      id: 7,
      image: "/images/category7.png",
      title: "Verticle Striped Shirt",
      rating: 5.0,
      price: 212,
      oldPrice: 232,
      discount: 20,
    },
    {
      id: 8,
      image: "/images/category8.png",
      title: "Courage Graphic T-shirt",
      rating: 4.0,
      price: 145,
      oldPrice: null,
      discount: null,
    },
    {
      id: 9,
      image: "/images/category9.png",
      title: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: 80,
      oldPrice: null,
      discount: null,
    },
  ];

  return (
    <>
      {/* Other parts of the component remain the same */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-6">
        {products.map((product) => (
          <Link href={`/category/${product.id}`} key={product.id}>
            <div className="border p-4 rounded-2xl cursor-pointer hover:shadow-lg transition">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-[300px] object-cover rounded-2xl"
              />
              <h4 className="text-lg font-semibold mt-4">{product.title}</h4>
              <div className="flex items-center mt-2">
                <FaRegStar className="text-yellow-400" />
                <FaRegStar className="text-yellow-400" />
                <FaRegStar className="text-yellow-400" />
                <FaRegStar className="text-yellow-400" />
                <FaRegStar className="text-gray-300" />
                <span className="text-xs text-gray-400 ml-2">
                  {product.rating}
                </span>
              </div>
              <div className="mt-2">
                {product.oldPrice ? (
                  <>
                    <span className="text-sm font-semibold text-gray-600">
                      ${product.oldPrice}
                    </span>
                    <span className="text-lg font-semibold text-black ml-2">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-semibold text-black">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
