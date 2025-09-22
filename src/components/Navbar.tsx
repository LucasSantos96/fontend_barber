import React from 'react'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'
const Navbar = () => {
  return (
    <nav className='py-2 bg-blue-400 text-white font-semibold flex gap-4 justify-center'>
        <Link href={'/'}>Home</Link>
        <Link href={'/addplan'} className='flex items-center gap-1'> <span className='bg-gray-400 rounded-full '><FiPlus/></span> Plano</Link>

    </nav>
  )
}

export default Navbar