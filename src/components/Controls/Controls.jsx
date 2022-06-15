import React from 'react'
import { Link } from 'react-router-dom'
import { XIcon } from '@heroicons/react/solid'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'

export default function Controls({ albumID }) {
  return (
    <div className='Controls absolute inset-0 z-20'>
      <ArrowLeft albumID={albumID} />
      <ArrowRight albumID={albumID} />

      <Link className='block absolute top-2 right-2 p-3 rounded-full sm:hover:bg-white/10' to={`/photos/${albumID}`}>
        <XIcon className='w-8 h-8 text-white' />
      </Link>
    </div>
  )
}
