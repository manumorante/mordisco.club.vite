import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Arrow from './Arrow'

export default function Left({ onClick }) {
  return (
    <Arrow
      linkClass='left-0 justify-start'
      iconClass='ml-10 sm:group-hover:-translate-x-2'
      onClick={onClick}>
      <ArrowLeftIcon />
    </Arrow>
  )
}
