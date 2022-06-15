import React from 'react'

export default function PhotoBig({ photo }) {
  document.documentElement.classList.toggle('no-scroll', !!photo)
  if (!photo) return null

  return (
    <div className='PhotoBig absolute z-30 inset-0 bg-black/50'>
      <img className='w-full h-full object-contain' src={photo.big} alt='Photo' />
    </div>
  )
}
