import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Arrow({ children, left, right, url }) {
  const linkClass = classNames('group absolute top-14 bottom-0 w-1/4 transition-colors flex items-center', {
    'left-0': left,
    'right-0': right,
    'justify-start': left,
    'justify-end': right,
  })

  const iconClass = classNames('text-white w-10 sm:transition-all sm:opacity-0 group-hover:sm:opacity-90', {
    'ml-10': left,
    'mr-10': right,
    'sm:group-hover:-translate-x-2': left,
    'sm:group-hover:translate-x-2': right,
  })

  return (
    <Link to={url} className={linkClass}>
      <div className={iconClass}>{children}</div>
    </Link>
  )
}
