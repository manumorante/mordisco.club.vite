import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  return (
    <div className='Header relative z-10 py-24 sm:py-20 flex justify-center'>
      <Link to='/'>
        <Logo />
      </Link>
      <Link to='/photos'>Photos</Link>
    </div>
  )
}
