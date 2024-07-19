import React from "react";
import Link from "next/link";
import { company, contact, site, siteAbbreviation, socialLink, support } from "./index";

const Footer: React.FC = () => {
  return (

    <section className="border-t bg-gray-700 mx-auto ">
      <div className="h-1/2 w-full flex flex-wrap md:flex-row flex-col justify-between items-start py-20">
        <div className="py-5">
          <ul>
            <div className="max-w-[300px] space-y-3 pl-10">
              <p className="text-white text-sm pb-6">
                {site.description}
              </p>
            </div>
            <div className="flex gap-5 pb-5 pl-10">
              {
                socialLink.map((item, index) => (
                  <Link href={item.path} key={index} target="_blank" className="text-[#f2f2f2] cursor-pointer">
                    {item.icon}
                  </Link>
                ))
              }

            </div>
          </ul>
        </div>
        <div className="pl-10 p-5">
          <ul>
            <p className="text-white font-bold text-xl pb-6">Company</p>
            {
              company.map((item, index) => (
                <li className="text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="pl-10 p-5">
          <ul>
            <p className="text-white font-bold text-xl pb-6">Support</p>
            {
              support.map((item, index) => (
                <li className="text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="p-5 pl-10">
          <ul>
            <p className="text-white font-bold text-xl pb-6">Contact Us</p>
            {
              contact.map((item, index) => (
                <Link href={item.path} className="flex items-center gap-x-3 text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                  {item.icon}
                  <p>{item.name}</p>
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center px-1 xs:px-3 md:px-5 p-5 border-t border-white/30">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-[#f2f2f2] gap-y-1 text-xs md:text-sm">
          <p>© 2024 {siteAbbreviation} All rights reserved</p>

        </div>
      </div>
    </section>
  );
}
export default Footer;