import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, acc }) {
  return (
    <div className='Gallery'>
      {album.photos.map((photo) => (
        <GalleryPhoto key={photo.id} photo={photo} acc={acc} />
      ))}
    </div>
  )
}
