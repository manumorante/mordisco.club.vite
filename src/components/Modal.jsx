import React, { useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'

export default function Modal({ children, isOpen, dispatch }) {
  document.documentElement.classList.toggle('modal-is-open', isOpen)

  // Keybindings
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') dispatch({ type: 'MODAL_CLOSE' })
      if (e.key === 'ArrowRight') dispatch({ type: 'NEXT_PHOTO' })
      if (e.key === 'ArrowLeft') dispatch({ type: 'PREV_PHOTO' })
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClose = () => {
    dispatch({ type: 'MODAL_CLOSE' })
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
