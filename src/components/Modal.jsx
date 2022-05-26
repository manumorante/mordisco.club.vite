import React, { useEffect } from 'react'

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

  return (
    isOpen && (
      <>
        <div className='Modal pointer-events-none fixed z-30 inset-0 p-1 sm:p-6 grid place-content-center place-items-center'>
          {children}
        </div>
        <div
          className='overlay fixed z-20 inset-0 bg-black/60 backdrop-grayscale'
          onClick={() => {
            console.log('overlay close')
            dispatch({ type: 'MODAL_CLOSE' })
          }}></div>
      </>
    )
  )
}
