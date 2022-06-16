import React from 'react'
import { useKeys } from '../../js/useKeys'
import { XIcon } from '@heroicons/react/solid'
import Arrow from './Arrow'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { ArrowLeftIcon } from '@heroicons/react/outline'

export default function Controls({ onNext, onPrev, onClose }) {
  useKeys({
    ArrowLeft: onPrev && onPrev,
    ArrowRight: onNext && onNext,
    Escape: onClose && onClose,
  })

  return (
    <div className='Controls fixed inset-0 z-50'>
      {onPrev && (
        <Arrow left onClick={onPrev}>
          <ArrowLeftIcon />
        </Arrow>
      )}

      {onNext && (
        <Arrow right onClick={onNext}>
          <ArrowRightIcon />
        </Arrow>
      )}

      {onClose && (
        <div
          onClick={onClose}
          className='absolute top-2 right-2 p-3 rounded-full sm:hover:bg-white/10 cursor-pointer'>
          <XIcon className='w-8 h-8 text-white' />
        </div>
      )}
    </div>
  )
}
