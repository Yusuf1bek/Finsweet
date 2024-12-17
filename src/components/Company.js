import Image from 'next/image'
import React from 'react'

import company1 from "@/assets/images/company-logo-1.svg"
import company2 from "@/assets/images/company-logo-2.svg"
import company3 from "@/assets/images/company-logo-3.svg"
import company4 from "@/assets/images/company-logo-4.svg"
import company5 from "@/assets/images/company-logo-5.svg"
const Company = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <div className='flex items-start flex-col'>
            <p className='font-[500] text-[14px] leading-[20px] text-[#9A9BA2]'>Our Clients</p>
            <h2 className='font-[500] text-[18px] leading-[28px] text-white'>We've Worked with</h2>
        </div>
        <Image src={company1} alt='Company-Logo'/>
        <Image src={company2} alt='Company-Logo'/>
        <Image src={company3} alt='Company-Logo'/>
        <Image src={company4} alt='Company-Logo'/>
        <Image src={company5} alt='Company-Logo'/>
    </div>
  )
} 

export default Company