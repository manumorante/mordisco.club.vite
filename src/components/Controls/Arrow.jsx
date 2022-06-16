import React from 'react'
import classNames from 'classnames'

export default function Arrow({ children, left, right, onClick }) {
  const linkClass = classNames(
    'cursor-pointer group absolute top-14 bottom-0 w-1/4 transition-colors flex items-end sm:items-center',
    {
      'left-0 justify-start': left,
      'right-0 justify-end': right,
    }
  )

  const iconClass = classNames('text-white w-10 sm:transition-all sm:opacity-0 group-hover:sm:opacity-90', {
    'mb-10 sm:mb-0 ml-10 sm:group-hover:-translate-x-2 ': left,
    'mb-10 sm:mb-0 mr-10 sm:group-hover:translate-x-2': right,
  })

  return (
    <div className={linkClass} onClick={onClick}>
      <div className={iconClass}>{children}</div>
    </div>
  )
}
