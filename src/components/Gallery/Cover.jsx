import React from 'react'

export default function Cover({ album }) {
  const src = album.photos[0].small
  return (
    <div className='Cover'>
      <img className='Cover__img' src={src} alt='Album' />
    </div>
  )
}
