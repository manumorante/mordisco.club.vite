import React from 'react'

export default function Loading() {
  return (
    <div className='absolute opacity-0 animate-in-delay inset-0 m-auto grid place-content-center bg-black/60'>
      <div className='loading'></div>
    </div>
  )
}
