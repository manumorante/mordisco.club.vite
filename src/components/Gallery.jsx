import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, dispatch }) {
  const colWidth = 285

  const handleClick = (index) => {
    dispatch({ type: 'SET_PHOTO', photoIndex: index })
  }

  return (
    <div className='Gallery mm-masonry'>
      {album.photos.map((photo, index) => {
        // Width will be the width of the column and height is
        // calculated proportionally to the new width.
        const width = colWidth
        const height = (photo.height * colWidth) / photo.width

        return (
          <GalleryPhoto
            key={`g-${index}`}
            src={`${album.path}/s/${photo.file}`}
            width={width}
            height={height}
            index={index}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
