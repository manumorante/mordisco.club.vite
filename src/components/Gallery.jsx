import React from 'react'
import { randomizeArray } from '../js/utils'
import Photo from './Photo'

export default function Gallery({ album, dispatch }) {
  const photos = randomizeArray(album.photos)

  return (
    <div className='masonry'>
      {photos.map((photo, index) => {
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
