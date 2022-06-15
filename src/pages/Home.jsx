import React from 'react'
import coverImg from '../img/bg.jpg'

export default function Home() {
  return (
    <div className='fixed inset-0 z-0 opacity-0 animate-fade-in'>
      <img className='w-full h-full object-cover opacity-60' src={coverImg} alt='People' />
    </div>
  )
}
