import React from 'react'
import Photo from './Photo'

export default function Gallery({ album, dispatch }) {
  return (
    <div className='masonry'>
      {album.photos.map((photo, index) => {
        const { cols = 2 } = photo
        return (
          <div key={`g-${index}`} className={`col col--${cols}x`}>
            <Photo path={album.path} photo={photo} dispatch={dispatch} />
          </div>
        )
      })}
    </div>
  )
}
