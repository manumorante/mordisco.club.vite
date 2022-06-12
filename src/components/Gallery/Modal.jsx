import React, { useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { isFill } from '../../js/utils'
import BigPhoto from './BigPhoto'

export default function Modal({ photo, acc }) {
  const isOpen = isFill(photo)

  document.documentElement.classList.toggle('modal-is-open', isOpen)

  // Keybindings
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') acc({ type: 'MODAL_CLOSE' })
      if (e.key === 'ArrowRight') acc({ type: 'NEXT_PHOTO' })
      if (e.key === 'ArrowLeft') acc({ type: 'PREV_PHOTO' })
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClose = () => {
    acc({ type: 'MODAL_CLOSE' })
  }

  return (
    isOpen && (
      <>
        <div className='Modal'>
          <BigPhoto photo={photo} />
          <XIcon className='Modal__close' onClick={handleClose} />
        </div>
        <div className='Modal__overlay' onClick={handleClose}></div>
      </>
    )
  )
}
