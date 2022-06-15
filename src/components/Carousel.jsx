import React from 'react'
import Controls from './controls/Controls'

export default function Carousel({ album, photoID }) {
  if (!album) return null
  const currentPhoto = album.photos[photoID] || album.photos[0]
  document.body.classList.toggle('no-scroll', !!currentPhoto)

  return (
    <div className='Carousel fixed z-30 inset-0 flex justify-center items-center bg-black/60'>
      {album.photos.map((photo, index) => (
        <div key={index} className='w-96 h-96'>
          <img src={photo.big} alt='Photo' className='w-full h-full object-contain' />
        </div>
      ))}

      <img
        className='relative z-10 portrait:w-full portrait:h-auto landscape:h-full landscape:w-auto'
        src={photo.big}
        alt='Photo'
      />
      <Controls photo={photo} />
    </div>
  )
}
