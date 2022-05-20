import React from 'react'

export default function Modal({ children, visible, onClose }) {
  document.documentElement.classList.toggle('modal-is-open', visible)

  return (
    visible && (
      <div className='Modal fixed inset-0 p-6 backdrop-grayscale  grid place-content-center'>
        <div className='z-10 shadow-2xl shadow-black'>{children}</div>
        <div className='bg-black/60 fixed z-0 inset-0' onClick={onClose}></div>
      </div>
    )
  )
}
