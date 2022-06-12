import React, { useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from '@heroicons/react/solid'
import { isFill } from '../../js/utils'
import BigPhoto from './BigPhoto'

export default function Modal({ photo, acc }) {
  const isOpen = isFill(photo)

  document.documentElement.classList.toggle('modal-is-open', isOpen)

  const handlePrev = () => {
    acc({ type: 'PREV_PHOTO' })
  }

  const handleNext = () => {
    acc({ type: 'NEXT_PHOTO' })
  }

  const handleClose = () => {
    acc({ type: 'MODAL_CLOSE' })
  }

  // Keybindings
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    isOpen && (
      <>
        <div className='Modal'>
          <BigPhoto photo={photo} />
          <XIcon className='Modal__close' onClick={handleClose} />
          <div className='Modal__arrow --left' onClick={handlePrev}>
            <ArrowLeftIcon />
          </div>
          <div className='Modal__arrow --right' onClick={handleNext}>
            <ArrowRightIcon />
          </div>
        </div>
        <div className='Modal__overlay' onClick={handleClose}></div>
      </>
    )
  )
}
