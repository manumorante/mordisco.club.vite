import React, { useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'

export default function Modal({ children, isOpen, acc }) {
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
          {children}
          <XIcon className='Modal__close' onClick={handleClose} />
        </div>
        <div className='Modal__overlay' onClick={handleClose}></div>
      </>
    )
  )
}
