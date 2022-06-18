import React from 'react'
import classNames from 'classnames'

export default function Arrow({ linkClass, iconClass, onClick }) {
  return (
    <div
      className={classNames(
        'cursor-pointer group absolute top-14 bottom-0 w-1/4 transition-colors flex items-end sm:items-center',
        linkClass
      )}
      onClick={onClick}>
      <div
        className={classNames(
          'text-white w-10 sm:transition-all sm:opacity-0 group-hover:sm:opacity-90 mb-10 sm:mb-0',
          iconClass
        )}>
        {children}
      </div>
    </div>
  )
}
