import React from 'react'

export default function Background() {
  const [className, setClassName] = React.useState('opacity-0')
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <picture>
        <source media='(max-width: 768px)' srcSet='/img/bg.jpg' />
        <source media='(min-width: 769px)' srcSet='/img/bg-big.jpg' />
        <img
          className='w-full h-full object-cover opacity-50'
          src='/img/bg.jpg'
          alt='Background'
          onLoad={() => setClassName('animate-fade-in')}
        />
      </picture>
    </div>
  )
}
