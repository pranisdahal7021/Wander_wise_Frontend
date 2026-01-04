import React from 'react'
import CustomButton from '../common/CustomButton'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-20 py-4'>
        {/* Left Navbar */}
        <div>
            <h2 className='text-4xl font-semibold'>Wanderwise</h2>
        </div>
        {/* Right Navbar */}
        <div className='flex items-center gap-10'>
            <nav className='flex gap-6 [&>a]:text-2xl [&>a]:font-medium [&>a]:hover:text-red-600 [&>a]:hover:underline'>
                <a href="">Features</a>
                <a href="">About</a>
                <a href="">Famous Trips</a>
                <a href="">Contact</a>
            </nav>
            <div>
                <CustomButton text="sign in"/>
            </div>
        </div>
    </header>
  )
}

export default Navbar