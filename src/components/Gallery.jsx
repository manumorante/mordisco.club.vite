import React from 'react'
import Photo from './Photo'

export default function Gallery({ album, dispatch }) {
  return (
    <div className='masonry'>
      {album.photos.map((photo, index) => {
        return (
          <div
            key={`g-${index}`}
            className='masonry__item'
            style={{
              '--img-w': photo.width,
              '--img-h': photo.height,
            }}>
            <Photo path={`${album.path}/s`} photo={photo} dispatch={dispatch} />
          </div>
        )
      })}
    </div>
  )
}
