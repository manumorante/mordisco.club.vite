import React from 'react'
import { Link } from 'react-router-dom'
import { XIcon } from '@heroicons/react/solid'
import Arrow from './Arrow'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function Controls({ photo }) {
  const prevUrl = `/photos/${photo.albumID}/${photo.id - 1}`
  const nextUrl = `/photos/${photo.albumID}/${photo.id + 1}`

  return (
    <div className='Controls absolute inset-0 z-20'>
      <Arrow left url={prevUrl}>
        <ArrowLeftIcon />
      </Arrow>

      <Arrow right url={nextUrl}>
        <ArrowRightIcon />
      </Arrow>

      <Link
        className='block absolute top-2 right-2 p-3 rounded-full sm:hover:bg-white/10'
        to={`/photos/${photo.albumID}`}>
        <XIcon className='w-8 h-8 text-white' />
      </Link>
    </div>
  )
}
