import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useKeys } from '../../js/useKeys'
import { XIcon } from '@heroicons/react/solid'
import Arrow from './Arrow'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function Controls({ photo }) {
  const navigate = useNavigate()

  const albumUrl = `/photos/${photo.albumID}`
  const prevUrl = `${albumUrl}/${photo.id - 1}`
  const nextUrl = `${albumUrl}/${photo.id + 1}`

  useKeys({
    ArrowLeft: () => navigate(prevUrl),
    ArrowRight: () => navigate(nextUrl),
    Escape: () => navigate(albumUrl),
  })

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
