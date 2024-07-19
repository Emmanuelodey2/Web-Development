import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';
import { services } from './index'

const Services: React.FC = () => {

  return (
    <div className="flex flex-col text-center items-center justify-center pl-20 pr-20">
      <div>
        <h2 data-aos="fade-down"
          className="text-4xl font-bold text-[#1e1e1e] mt-[200px] md:text-4xl">
          MenuTech For You
        </h2>
        <h4 data-aos="fade-down"
          data-aos-delay="300" className="text-xl text-[#f89222] justify-between mt-4 md:text-2xl font-semibold">
          Explore new features with the newly MenuTech
        </h4>

        <div className="w-full grid grid-cols-1 gap-x-40 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-right"
          data-aos-delay="500"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className={`w-[200px] h-32 ${service.bgColor} flex rounded-md items-center text-center justify-center mt-20 mb-4`}>
                <Icon className={`w-[100px] ${service.textColor} h-[100px]`} icon={service.icon} />
              </div>
              <h4 className="text-xl text-[#f89222] font-semibold md:text-2xl">{service.title}</h4>
              <p className="w-[360px] text-[#1e1e1e] text-sm md:text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        <Button
          data-aos="fade-down"
          data-aos-delay="200"
          className="rounded-full w-[200px] h-[50px] bg-[#f2f2f2] border-2 text-[#f15a2a] border-[#f89222] p-4 mb-10 mt-6">
          Explore Features
        </Button>
      </div>
    </div>
  );
};

export default Services;
