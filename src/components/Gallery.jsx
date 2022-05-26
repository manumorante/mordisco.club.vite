import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, dispatch }) {
  return (
    <div className='Gallery masonry'>
      {album.photos.map((photo, index) => {
        return (
          <GalleryPhoto
            key={`g-${index}`}
            path={`${album.path}/s`}
            photo={photo}
            index={index}
            dispatch={dispatch}
            style={{
              '--img-w': photo.width,
              '--img-h': photo.height,
            }}
          />
        )
      })}
    </div>
  )
}
