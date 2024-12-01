// import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='flex justify-between items-center px-5 py-10 md:px-20 md:py-10'>
      <Link to={'/'} className='font-extrabold text-2xl md:text-3xl'>CodeMate</Link>
      <ul className='flex items-center gap-x-3 text-base '>
        <li><Link to={'/'}>Home</Link></li>
        <li className='transform transition-transform duration-300 hover:scale-110 hover:shadow-lg'>
          <Link  to={'/code'} className='bg-gray-900 font-semibold text-white rounded-full px-4 py-2 ease-in-out hover:bg-black hover:shadow-[0_0_10px_3px_rgba(255,255,0,1)]'> Get Started! </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header