import React from 'react'
import Photo from './Photo'

export default function ListSimple({ photos }) {
  return (
    <div className='ListSimple mx-6 grid landscape:grid-cols-2 gap-7'>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          data={{
            id: photo.id,
            albumID: photo.id,
            small: photo.small,
            width: photo.width,
            height: photo.height,
          }}
        />
      ))}
    </div>
  )
}
