import Image from "next/image"
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        width={100}
        height={100}
        className="w-20 h-20"
        src="/assets/MS.png"
        alt="logo"
      />
      <Image
        width={110}
        height={110}
        className="object-contain -ml-3"
        src="/assets/watermark 1.png"
        alt="logo name" />
    </div>
  )
}

export default Logo
