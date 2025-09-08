import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-3 bg-black'>
      <h3>Hello adi</h3>
      <div className='flex gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/product'>Product</Link>
        <Link href='/playground'>Playground</Link>

      </div>
    </div>
  )
}

export default Navbar
