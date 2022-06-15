import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  return (
    <div className='Header relative z-10 pt-24 pb-12 flex flex-col gap-4 items-center justify-center'>
      <Link to='/'>
        <Logo />
      </Link>
      <nav className='flex gap-4 text-white/50 text-lg opacity-0 animate-in-delay'>
        <Link to='/'>Inicio</Link>
        <Link to='/photos'>Photos</Link>
      </nav>
    </div>
  )
}
