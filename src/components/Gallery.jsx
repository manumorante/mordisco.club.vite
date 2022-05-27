import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, dispatch }) {
  return (
    <div className='Gallery mm-masonry'>
      {album.photos.map((photo, index) => {
        return (
          <GalleryPhoto
            key={`g-${index}`}
            path={`${album.path}/s`}
            photo={photo}
            index={index}
            dispatch={dispatch}
            style={{
              '--w': photo.width,
              '--h': photo.height,
            }}
          />
        )
      })}
    </div>
  )
}
