import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='flex justify-between items-center px-20 py-10'>
      <Link to={'/'} className='font-bold text-3xl'>CodeMate</Link>
      <ul className='flex items-center gap-x-3 text-base '>
        <li><Link to={'/'}>Home</Link></li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Link  to={'/code'} className='bg-gray-900 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:shadow-[0_0_10px_3px_rgba(255,255,0,1)]'> Try Now ! </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header