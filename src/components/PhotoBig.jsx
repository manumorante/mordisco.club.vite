import React from 'react'
import Controls from './Controls/Controls'

export default function PhotoBig({ photo }) {
  document.body.classList.toggle('no-scroll', !!photo)
  if (!photo) return null

  return (
    <div className='PhotoBig fixed z-30 inset-0 flex justify-center items-center bg-black/60'>
      <img
        className='relative z-10 portrait:w-full portrait:h-auto landscape:h-full landscape:w-auto'
        src={photo.big}
        alt='Photo'
      />
      <Controls photo={photo} />
    </div>
  )
}
