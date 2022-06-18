import React from 'react'
import { Link } from 'react-router-dom'
import useStickyHeader from '../../js/useStickyHeader'
import classNames from 'classnames'
import Logo from './Logo'

export default function Header() {
  const { headerRef, isSticky } = useStickyHeader()

  const className = classNames(
    'Header',
    'sticky top-0 z-10',
    'transition-all duration-500 ease-in-out',
    'bg-gradient-to-b from-black',
    'flex flex-col gap-4 items-center justify-center',
    {
      'backdrop-blur-md': isSticky,
      'py-24': !isSticky,
      'py-8': isSticky,
    }
  )

  const logoClass = classNames('transition-all duration-500 ease-in-out', {
    'h-9': !isSticky,
    'h-7': isSticky,
  })

  return (
    <div ref={headerRef} className={className}>
      <Link to='/'>
        <Logo className={logoClass} />
      </Link>

      {!isSticky && (
        <nav className='flex gap-4 text-white/50 text-lg opacity-0 animate-in-delay'>
          <Link to='/'>Inicio</Link>
          <Link to='/photos'>Photos</Link>
        </nav>
      )}
    </div>
  )
}
