import React from 'react'

export default function Logo() {
  return (
    <div className='Logo flex gap-2 items-center text-xl sm:text-3xl text-white tracking-tight'>
      <span>Mordisco</span>
      <span className='rotate-45 w-8 h-8 bg-white '>
        <div className='-rotate-45 flex justify-center items-center w-full h-full text-gray-600 text-center text-xs leading-none'>
          {`CL
          UB`}
        </div>
      </span>
    </div>
  )
}
