import React from 'react'
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa6";
import Link from 'next/link';

const Products = () => {
  return (
    <>
      <br /><br />
      <h1 className='flex justify-center font-bold text-5xl '>NEW ARRIVALS</h1><br /><br />
      <div className="flex flex-wrap justify-center gap-4 px-2 w-full">

        <Link href={'/ProductDetails'}>
          <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
            <Image src={'/images/product1.png'} alt='product1' width={295} height={298} className='rounded-[20px]' />
            <br />
            <h4 className='font-bold text-xl leading-[27px]'>T-SHIRT WITH TAPE DETAILS</h4>
            <span className="flex w-[150px] h-[19px] gap-[13px]">
              <FaRegStar className='text-[#FFC633]' />
              <FaRegStar className='text-[#FFC633]' />
              <FaRegStar className='text-[#FFC633]' />
              <FaRegStar className='text-[#FFC633]' />
              <span>4.5/5</span>
            </span>
            <h3 className='flex-col text-2xl'>$120</h3>
          </div>
        </Link>

        <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
          <Image src={'/images/product2.png'} alt='product2' width={295} height={298} className='rounded-[20px]' />
          <br />
          <h4 className='font-bold text-xl leading-[27px]'>SKINNY FIT JEANS</h4>
          <span className="flex w-[150px] h-[19px] gap-[13px]">
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <span>3.5/5</span>
          </span>
          <div className='flex gap-3'>
            <h3 className='flex-col text-2xl'>$240</h3>
            <h3 className='flex-col text-2xl text-gray-500'>$260</h3>
            <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
          </div>
        </div>

        <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
          <Image src={'/images/product3.png'} alt='product3' width={295} height={298} className='rounded-[20px]' />
          <br />
          <h4 className='font-bold text-xl leading-[27px]'>CHECKERED SHIRT</h4>
          <span className="flex w-[150px] h-[19px] gap-[13px]">
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <span>4.5/5</span>
          </span>
          <h3 className='flex-col text-2xl'>$180</h3>
        </div>

        <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
          <Image src={'/images/product4.png'} alt='product4' width={295} height={298} className='rounded-[20px]' />
          <br />
          <h4 className='font-bold text-xl leading-[27px]'>SLEEVE STRIPED T-SHIRT</h4>
          <span className="flex w-[150px] h-[19px] gap-[13px]">
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <span>4.5/5</span>
          </span>
          <div className='flex gap-3'>
            <h3 className='flex-col text-2xl'>$130</h3>
            <h3 className='flex-col text-2xl text-gray-500'>$160</h3>
            <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <div className="flex justify-center">
        {/* <button className='rounded-[62px] h-[52px] w-[218px] border-gray-500 border'>View All</button> */}
        <Link href={'/Category'}> <button className='rounded-[62px] hover:bg-slate-200  h-[52px] w-[218px] border-gray-500 border'>View All</button></Link>
      </div>

      <br /><br /><br />

      <h1 className='flex justify-center font-bold text-5xl '>TOP SELLING</h1><br /><br />
      <div className="flex flex-wrap justify-center gap-4 px-2 w-full">

        <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
          <Image src={'/images/product5.png'} alt='product5' width={295} height={298} className='rounded-[20px]' />
          <br />
          <h4 className='font-bold text-xl leading-[27px]'>VERTICAL STRIPED SHIRT</h4>
          <span className="flex w-[150px] h-[19px] gap-[13px]">
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <span>5.0/5</span>
          </span>
          <div className='flex gap-3'>
            <h3 className='flex-col text-2xl'>$212</h3>
            <h3 className='flex-col text-2xl text-gray-500'>$232</h3>
            <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
          </div>
        </div>

        <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
          <Image src={'/images/product6.png'} alt='product6' width={295} height={298} className='rounded-[20px]' />
          <br />
          <h4 className='font-bold text-xl leading-[27px]'>COURAGE GRAPHIC T-SHIRT</h4>
          <span className="flex w-[150px] h-[19px] gap-[13px]">
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <FaRegStar className='text-[#FFC633]' />
            <span>4.0/5</span>
          </span>
          <h3 className='flex-col text-2xl'>$145</h3>
        </div>

       {/* Product 7 */}
  <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
    <Image src={'/images/product7.png'} alt='product1' width={295} height={298} className='rounded-[20px]' />
    <br />
    <h4 className='font-bold text-xl leading-[27px] text-center'>LOOSE FIT BERMUDA SHORTS</h4>
    <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <span>3.0/5</span>
    </span>
    <h3 className='flex-col text-2xl text-center'>$80</h3>
  </div>

  {/* Product 8 */}
  <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
    <Image src={'/images/product8.png'} alt='product2' width={295} height={298} className='rounded-[20px]' />
    <br />
    <h4 className='font-bold text-xl leading-[27px] text-center'>FADED SKINNY JEANS</h4>
    <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <span>4.5/5</span>
    </span>
    <h3 className='flex-col text-2xl text-center'>$210</h3>
  </div>
</div>

<br /><br /><br /><br /><br /><br />

<div className="flex justify-center">
<Link href={'/Category'}> <button className='rounded-[62px] hover:bg-slate-200  h-[52px] w-[218px] border-gray-500 border'>View All</button></Link>
</div>

<br /><br /><br />



</>
  )
}

export default Products


