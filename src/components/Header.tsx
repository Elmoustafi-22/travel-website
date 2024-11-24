import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='fixed bg-black bg-opacity-50 top-0 right-0 left-0 py-4 z-50'>
      <nav className='flex gap-10 justify-center items-center'>
        <Link 
          href="#" 
          className='uppercase font-semibold font-body text-white px-5 py-1 rounded-2xl shadow-xl hover:bg-green transition duration-200'
        >
          Home
        </Link>
        <Link 
          href="#" 
          className='uppercase font-semibold font-body text-white px-5 py-1 rounded-2xl shadow-xl hover:bg-green transition duration-200'
        >
          About
        </Link>
        <Link 
          href="#" 
          className='uppercase font-semibold font-body text-white px-5 py-1 rounded-2xl shadow-xl hover:bg-green transition duration-200'
        >
          Gallery
        </Link>
        <Link 
          href="#" 
          className='uppercase font-semibold font-body text-white px-5 py-1 rounded-2xl shadow-xl hover:bg-green transition duration-200'
        >
          Packages
        </Link>
        <Link 
          href="#" 
          className='uppercase font-semibold font-body text-white px-5 py-1 rounded-2xl shadow-xl hover:bg-green transition duration-200'
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
