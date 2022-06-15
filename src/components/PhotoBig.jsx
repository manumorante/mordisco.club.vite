import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function PhotoBig({ photo }) {
  document.body.classList.toggle('no-scroll', !!photo)
  if (!photo) return null

  return (
    <div className='PhotoBig fixed z-30 inset-0 flex justify-center items-center'>
      <img
        className='relative z-10 portrait:w-full portrait:h-auto landscape:h-full landscape:w-auto'
        src={photo.big}
        alt='Photo'
      />
      <Link to={`/photos/${photo.albumID}`}>
        <XIcon className='absolute z-20 top-6 right-6 w-8 h-8 text-white cursor-pointer' />
        <div className='absolute inset-0 z-0 bg-black/60'></div>
      </Link>
    </div>
  )
}
