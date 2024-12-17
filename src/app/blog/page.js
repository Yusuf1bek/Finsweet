import React from 'react'
import personImg from "@/assets/images/person-img.svg"
import blogImg from "@/assets/images/blog-img.png"
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import companyShape from "@/assets/images/company-shape.svg"
const Blog = () => {
  return (
    <section className='py-[96px]'>
      <div className='container flex items-start gap-[213px]'>
          <div className='w-[624px]'>
              <strong className='font-[500] text-[14px] leading-[20px] uppercase mb-[24px]'>TREnding</strong>
              <h2 className='font-[600] text-[48px] leading-[58px] mb-[24px]'>Breaking the code How did we build our Figma plugin </h2>
              <p className='font-[400] text-[16px] leading-[24px] mb-[24px] text-[#232536]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
              <a className='font-[500] text-[16px] leading-[24px] mb-[40px] flex items-center gap-[12px]' href="">
                Read More
              <HiArrowLongRight/>
              </a>
            <div className='flex  gap-[15px] mb-[49px]'>
              <Image src={personImg} alt='Avatar-Img'/>
              <p className='font-[400] text-[16px] leading-[24px]'>Andrew Jonson</p>
              <span className='text-[#CCCCCC]'>|</span>
              <p className='text-[#232536] font-[400] text-[16px] leading-[24px]'>Posted on 27th January 2021</p>
            </div>
            <Image src={blogImg} alt='blog-img'/>
          </div>
          <div className='w-[515px] bg-[#FFDFC6] p-[72px] relative'>
            <Image className='absolute top-0 right-0' src={companyShape} alt='shape-img'/>
            <ul>
              <li>
                <h3 className='font-[600] text-[24px] leading-[36px] mb-[16px]'>Great design expectations prejudice in digital products in Next Year</h3>
                <div className='flex items-center gap-2 mb-[48px]'>
                  <Image src={personImg} alt='Avatar-Img'/>
                  <div className='flex flex-col'>
                    <p className='font-[400] text-[16px] leading-[24px] text-[#232536]'>Andrew Jonson</p>
                    <p className='font-[500] text-[14px] leading-[20px] text-[#232536]'>Jan 19, 2021</p>
                  </div>
                </div>
              </li>
              <li>
                <h3 className='font-[600] text-[24px] leading-[36px] mb-[16px]'>Great design expectations prejudice in digital products in Next Year</h3>
                <div className='flex items-center gap-2 mb-[48px]'>
                  <Image src={personImg} alt='Avatar-Img'/>
                  <div className='flex flex-col'>
                    <p className='font-[400] text-[16px] leading-[24px] text-[#232536]'>Andrew Jonson</p>
                    <p className='font-[500] text-[14px] leading-[20px] text-[#232536]'>Jan 19, 2021</p>
                  </div>
                </div>
              </li>
              <li>
                <h3 className='font-[600] text-[24px] leading-[36px] mb-[16px]'>Great design expectations prejudice in digital products in Next Year</h3>
                <div className='flex items-center gap-2 mb-[48px]'>
                  <Image src={personImg} alt='Avatar-Img'/>
                  <div className='flex flex-col'>
                    <p className='font-[400] text-[16px] leading-[24px] text-[#232536]'>Andrew Jonson</p>
                    <p className='font-[500] text-[14px] leading-[20px] text-[#232536]'>Jan 19, 2021</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Blog