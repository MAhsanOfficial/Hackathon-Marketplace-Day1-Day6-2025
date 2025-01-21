
import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { RiAddLargeLine, RiDeleteBinFill } from "react-icons/ri";
import { CiPen } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const Cart = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full px-4 md:px-8 lg:px-10 mt-4">
        <div className="flex gap-2 items-center text-gray-500 text-sm md:text-base">
          <p>Home</p>
          <IoIosArrowForward />
          <p className="text-black">Cart</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold px-4 md:px-8 lg:px-10 mt-4">
        YOUR CART
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-10 mt-6">
        {/* Cart Items */}
        <div className="flex-1 border-[1px] rounded-[20px] space-y-6">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4  rounded-lg">
            <Image
              src="/images/category1.png"
              alt="Gradient Graphic T-shirt"
              width={124}
              height={124}
              className="rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-lg">Gradient Graphic T-shirt</h3>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-black">Large</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-black">White</span>
              </p>
              <p className="font-bold mt-2 text-xl">$145</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
              <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <span className="cursor-pointer">-</span>
                <span className="px-4">1</span>
                <RiAddLargeLine className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 rounded-lg">
            <Image
              src="/images/category5.png"
              alt="Checkered Shirt"
              width={124}
              height={124}
              className="rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-lg">Checkered Shirt</h3>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-black">Medium</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-black">Red</span>
              </p>
              <p className="font-bold mt-2 text-xl">$180</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
              <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <span className="cursor-pointer">-</span>
                <span className="px-4">1</span>
                <RiAddLargeLine className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>
          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4  rounded-lg">
            <Image
              src="/images/category4.png"
              alt="Skinny Fit Jeans"
              width={124}
              height={124}
              className="rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-lg">Skinny Fit Jeans</h3>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-black">Large</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-black">Blue</span>
              </p>
              <p className="font-bold mt-2 text-xl">$240</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
              <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <span className="cursor-pointer">-</span>
                <span className="px-4">1</span>
                <RiAddLargeLine className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] p-6 border rounded-lg h-[458px]">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-bold">$565</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Discount (-20%)</p>
            <p className="text-red-500 font-bold">-$113</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-500">Delivery Fee</p>
            <p className="font-bold">$15</p>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">$467</p>
          </div>

          {/* Promo Code */}
          <div className="flex mt-6">
            <div className="relative flex-1">
              <CiPen className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
              />
            </div>
            <button className="ml-2 bg-black text-white px-4 rounded-full">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-4 bg-black text-white py-3 rounded-full flex justify-center items-center gap-2">
            Go to Checkout <FaArrowRight />
          </button>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default Cart;
