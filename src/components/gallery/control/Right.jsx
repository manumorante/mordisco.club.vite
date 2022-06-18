import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/outline'
import Arrow from './Arrow'

export default function Left({ onClick }) {
  return (
    <Arrow
      linkClass='right-0 justify-end'
      iconClass='mr-10 sm:group-hover:translate-x-2'
      onClick={onClick}>
      <ArrowRightIcon />
    </Arrow>
  )
}
