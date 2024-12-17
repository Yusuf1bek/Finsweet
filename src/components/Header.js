import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconLogo from "@/assets/images/icon-log.svg"
const Header = () => {
  return (
    <>
      <header className='bg-[#232536] py-[20px]'>
        <div className='flex items-center justify-center gap-[660px]'>
        <Image src={IconLogo} alt='Icon Logo' width={122} height={24}/>
          <div className='flex items-center gap-6 font-[500] text-[16px] leading-[24px]'>
            <Link className='text-[#9A9BA2]  hover:text-white duration-300' href={"/"}>Home</Link>
            <Link className='text-[#9A9BA2]  hover:text-white duration-300' href={"/service"}>Service</Link>
            <Link className='text-[#9A9BA2]  hover:text-white duration-300' href={"/company"}>Company</Link>
            <Link className='text-[#9A9BA2]  hover:text-white duration-300' href={"/career"}>Career</Link>
            <Link className='text-[#9A9BA2]  hover:text-white duration-300' href={"/blog"}>Blog</Link>
          </div>
        </div>
      </header>
        <hr  className='text-[#2E3040]'/>
    </>
  )
}

export default Header