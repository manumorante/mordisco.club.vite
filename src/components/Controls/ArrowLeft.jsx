import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function ArrowLeft({ photoID }) {
  return (
    <Link
      to={`/#${photoID}`}
      className='group absolute top-14 left-0 bottom-0 w-1/4 transition-colors flex justify-start items-center'>
      <ArrowLeftIcon className='text-white w-10 ml-10 transition-all opacity-0 group-hover:opacity-90 group-hover:-translate-x-2' />
    </Link>
  )
}
