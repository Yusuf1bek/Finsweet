import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import ImgShapes from "@/assets/images/shapes-btn.svg"
import HeroImg from "@/assets/images/hero-img.png"
import Company from "@/components/Company";
export default function Home() {
  return (
    <section className="bg-[#232536] pt-[96px] pb-[33px]">
      <div className="container">
        <div className=" flex items-center gap-[100px] mb-[188px]">
          <div className="w-[624px]">
            <h1 className="font-[600] text-[56px] leading-[68px] text-white">Transform Your Idea Into Reality with Finsweet</h1>
            <p className="font-[400] text-[16px] leading-[24px] text-[#A7A8AF] mt-[24px] mb-[24px]">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
              <Image src={ImgShapes} className="absolute" alt="btn-img"/>
              <button className="w-[180px] bg-[#444CFC] py-[10px] flex items-center gap-1 justify-center text-white">
                Request Quote
                <HiArrowLongRight/>
              </button>
          </div>
          <Image src={HeroImg} alt="Hero-Img"/>
        </div>
        <Company/>
      </div>
    </section>
  );
}
