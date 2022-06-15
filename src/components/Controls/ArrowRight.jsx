import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/outline'

export default function ArrowRight({ photoID }) {
  return (
    <Link
      to={`/#${photoID}`}
      className='group absolute top-14 right-0 bottom-0 w-1/4 transition-colors flex justify-end items-center'>
      <ArrowRightIcon className='text-white w-10 mr-10 transition-all opacity-0 group-hover:opacity-90 group-hover:translate-x-2' />
    </Link>
  )
}
