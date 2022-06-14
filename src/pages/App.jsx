import React from 'react'
import Logo from '../components/Logo'

import coverImg from '../img/mordisco-club-people.jpg'

export default function App() {
  return (
    <div className='Home h-full'>
      <div className='relative z-20 w-full h-full flex items-center justify-center'>
        <Logo />
      </div>

      <div className='Overlay absolute inset-0 z-10 bg-black opacity-50'></div>

      <div className='Cover absolute inset-0 z-0'>
        <img
          className='w-full h-full object-cover'
          src={coverImg}
          alt='People'
        />
      </div>
    </div>
  )
}
