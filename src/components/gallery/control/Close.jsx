import React from 'react'
import { XIcon } from '@heroicons/react/solid'

export default function Close({ onClick }) {
  return (
    <div
      className='fixed top-6 right-6 z-30 cursor-pointer group text-white w-8 h-8'
      onClick={onClick}>
      <XIcon className='w-8 h-8' />
    </div>
  )
}
