import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DashBoard = () => {
  
  return (
    <>
      <div className="prose">
        <h1 className='text-blue-900'>
          Welcome to Code Mate 👋
        </h1>
      </div>
      <div>
        <h1 className='text-lg py-5'>Your previous queries  </h1>
        <div className="flex flex-col  gap-y-4 ">
          {
            Array(10).fill(null).map((item,key) => {
              return <Link to={`/code/${item}`} key={key} className=' justify-between px-4 py-3 w-full border rounded-lg flex items-center'>
                <h1 className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing jasdf j fsj gsdr wertert </h1>
                <button className='outline-none flex gap-x-2 items-center text-blue-600'>Read <FaArrowRight/></button>
                </Link>
            })
          }
        </div>
      </div>
    </>  
  )
}

export default DashBoard