import React from 'react'
import Controls from './controls/Controls'
import Img from './Img'

export default function PhotoBig({ photo, onLoad }) {
  document.body.classList.toggle('no-scroll', !!photo)
  if (!photo) return null

  return (
    <div className='PhotoBig fixed z-30 inset-0 flex justify-center items-center bg-black/60'>
      <Img src={photo.big} onLoad={onLoad} />
      <Controls photo={photo} />
    </div>
  )
}
