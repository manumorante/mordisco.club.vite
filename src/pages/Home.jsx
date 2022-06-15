import React from 'react'
// import coverImg from '../img/mordisco-club-people.jpg'
import coverImg from '../img/bg.jpg'

export default function Home() {
  return (
    <div className='fixed inset-0 z-0 opacity-0 animate-in-delay'>
      <img className='w-full h-full object-cover opacity-60' src={coverImg} alt='People' />
    </div>
  )
}
