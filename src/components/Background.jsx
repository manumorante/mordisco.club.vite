import React from 'react'

export default function Background() {
  return (
    <div className='fixed inset-0 -z-10 opacity-0 animate-fade-in'>
      <picture>
        <source media='(max-width: 768px)' srcSet='/img/bg.jpg' />
        <source media='(min-width: 769px)' srcSet='/img/bg-big.jpg' />
        <img className='w-full h-full object-cover opacity-50' src='/img/bg.jpg' alt='Background' />
      </picture>
    </div>
  )
}
