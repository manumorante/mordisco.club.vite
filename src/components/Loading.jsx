import React from 'react'

export default function Loading() {
  return (
    <div className='w-full h-full absolute opacity-0 animate-in-delay grid place-content-center bg-black/60'>
      <div className='loading'></div>
    </div>
  )
}
