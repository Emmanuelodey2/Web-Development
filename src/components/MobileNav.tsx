import Logo from "@/components/Logo"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import React from 'react'
import Link from "next/link"
import { nav } from "."


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-2 hover:bg-accent rounded-xl">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="bg-background dark:bg-brandBg border-none px-4 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-between h-full py-12">
          <div className="w-full flex flex-col items-center gap-y-5">
            <SheetClose>
              <Logo />
            </SheetClose>
            <div className="w-full flex flex-col items-start justify-left text-lg md:text-xl">
              {
                nav.map((item, index) => (
                  <SheetClose key={index} asChild className="w-full">
                    <Link href={item.path} className="w-full p-5 rounded-full text-brandText font-semibold hover:text-primary transition-all">
                      {item.name}
                    </Link>
                  </SheetClose>
                ))
              }
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
