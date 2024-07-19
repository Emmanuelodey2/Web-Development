"use-client"

import React from "react";
import Link from "next/link";
import { nav } from './index'
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import MobileNav from "./MobileNav";
const Navbar: React.FC = () => {


  return (
    <div className="fixed bg-white/50 transition-all transition-delay-500 backdrop-blur-[8px] shadow w-full px-4 sm:px-8 lg:px-12 z-50 max-sm:pb-2">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="max-sm:hidden w-[40%] md:w-[45%] lg:w-[30%]">
          <Searchbar />
        </div>
        <ul className="flex items-center max-lg:hidden lg:gap-x-10 xl:gap-x-12">
          {
            nav.map((items, index) => (
              <li key={index} className="list-none font-bold max-xl:text-sm hover:text-primary justify-center items-center flex">
                <Link href={items.path}>
                  {items.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
      <div className="w-full px-4 flex items-center justify-center sm:hidden">
        <Searchbar />
      </div>
    </div>
  )
}
export default Navbar;