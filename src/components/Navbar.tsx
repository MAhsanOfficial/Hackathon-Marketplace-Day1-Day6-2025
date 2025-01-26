'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { RxCross2 } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io'
import { IoMenu } from "react-icons/io5";
import {SessionProvider} from "next-auth/react"
import UserButton from "@/components/user-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='bg-white shadow-sm border-b mx-auto flex flex-col'>
     
        <div className="bg-black text-white py-2 text-sm flex items-center px-8 w-full">
          <div className="text-center flex-1">
            Sign up and get 20% off your first order.
            <Link href={'/'} className='underline hover:text-gray-300'>Sign Up Now</Link>
          </div>

          <div className="flex gap-[2px] items-center">
            <RxCross2 width={24} height={24} className="text-[#FFFFFF] text-3xl" />
          </div>
        </div>

       
        <div className="flex justify-between items-center px-8 py-4 w-full">
         <Link href={'/'}> <h1 className='text-3xl font-black text-black px-10'>SHOP.CO</h1></Link>

          <nav className="hidden md:flex gap-4 items-center">
            <Link href={'/'} className='text-gray-600 hover:text-black flex'>
              Shop
              <IoIosArrowDown className='mt-1' />
            </Link>
            <Link href={'/#latest-product'} className='text-gray-600 hover:text-black'>On Sale</Link>
            <Link href={'/Category'} className='text-gray-600 hover:text-black'>New Arrivals</Link>
            <Link href={'/ProductDetails'} className='text-gray-600 hover:text-black'>Brands</Link>
          </nav>

         
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex w-[577px] h-12 items-center bg-gray-100 rounded-[62px] px-4 py-3">
              <CiSearch />
              <input type="text" placeholder='Search for products...?' className='outline-none bg-slate-100 text-sm' />
            </div>
          <Link href={'/Cart'}>  <HiOutlineShoppingCart className='w-5 h-5' /></Link>
            {/* <FaRegUserCircle className='w-5 h-5' /> */}
            <SessionProvider>
        <UserButton />
      </SessionProvider>
          </div>

          <button className="md:hidden text-black" onClick={toggleMenu}>
            {isMenuOpen ? <RxCross2 width={24} height={24} /> : <IoMenu width={24} height={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black text-white py-4 px-8">
            <nav className="flex flex-col gap-4">
              <Link href={'#'} className='text-gray-300 hover:text-white'>
                Shop
                <IoIosArrowDown className='inline' />
              </Link>
              <Link href={'#'} className='text-gray-300 hover:text-white'>On Sale</Link>
              <Link href={'#'} className='text-gray-300 hover:text-white'>New Arrivals</Link>
              <Link href={'#'} className='text-gray-300 hover:text-white'>Brands</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar;
