import Link from 'next/link'
import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full h-fit p-4 px-8 flex gap-4 items-center bg-white border-b shadow-sm sticky top-0 z-50'>
      <Link href="/" className='font-extrabold text-2xl flex items-center gap-2'><IoChevronBackSharp className='mr-4' /> STS <span className='text-blue-600'>Blogs</span></Link>
    </div>
  )
}

export default Navbar