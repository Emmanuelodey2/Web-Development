import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react'
const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover pb-32 pt-60 px-12 md:px-14 lg:px-20 bg-center items-center flex h-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/background.jpeg)', backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        data-aos="fade-left"
        data-aos-delay="800"
        className="fixed flex items-center justify-center top-40 right-0 bg-[#f2f2f2] w-16 h-16 md:w-32 md:h-32 rounded-full bg-opacity-80 z-10">
        <Icon className=" text-[#1e1e1e] relative top-1 md:h-12 md:w-32 w-8 h-8" icon="f7:phone-fill" />
      </div>
      <div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="absolute md:w-[80em] w-[65em] -left-[60%] max-sm:-left-[100%] top-0 sm:-left-[90%] sm:w-[70em] sm:h-full bg-[#F89222]  max-sm:w-[full] max-sm:h-full rounded-full bg-opacity-60 aspect-square lg:w-[130em] lg:h-full">
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          className="absolute max-lg:w-[50%] w-[65em] md:w-[70em] -left-[40%] max-sm:-left-[90%] sm:-left-[60%] sm:w-[50em] sm:h-full top-5 sm:top-0  bg-[#F89222]  max-sm:w-[full] max-sm:h-full rounded-full bg-opacity-70 aspect-square lg:w-[110em] lg:h-full">
        </div>
      </div>
      <div className="w-full md:w-[60%] sm:w-[70%] lg:w-[40%] z-10">
        <h6
          className="md:text-5xl lg:text-6xl text-4xl font-bold text-[#f2f2f2]"
          data-aos="fade-down"
          data-aos-delay="100"
        >Build Your Restaurant&apos;s Online Presence Effortlessly</h6>
        <p
          className="text:sm md:text-md font-semibold lg:text-lg text-[#f2f2f2] pt-10 pb-6"
          data-aos="fade-down"
          data-aos-delay="200">
          Welcome to MenuTech Solutions! Easily create a professional website for your restaurant to showcase your menu, accept reservations, and engage with customers online.
        </p>
        <div className="">
          <Button
            data-aos="fade-down"
            data-aos-delay="300"
            className="flex items-center rounded-full w-[200px] border-2 border-white justify-center bg-[#f89222] ">Get Started</Button>
        </div>
      </div>
    </div>

  )
}
export default Hero