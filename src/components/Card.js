import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
const Card = () => {
  return (
    <li className='p-[48px] bg-white w-[354px]'>
        <h2 className='mb-[10px] font-[600] text-[16px] leading-[28px]'>Full Stack Developer</h2>
        <p className='font-[400] text-[16px] leading-[24px] text-[#232536]'>Bengaluru · Full Time </p>
        <p className='font-[400] text-[16px] leading-[24px] text-[#232536] mb-[52px]'>$10K - $18K · No equity</p>
        <a className='flex items-center gap-[12px] text-[#5D5FEF]' href="">
        Apply Now
        <HiArrowLongRight/>
        </a>
    </li>
  )
}

export default Card