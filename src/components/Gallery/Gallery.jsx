import React from 'react'
import Photo from './Photo'
import Phrase from './Phrase'

export default function Gallery({ album, acc }) {
  return (
    <div className='Gallery'>
      {album.photos.map((photo, i) => {
        return (
          <div key={`item-${i}`}>
            <Photo photo={photo} acc={acc} />
            <Phrase />
          </div>
        )
      })}
    </div>
  )
}
