import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, albumIndex, dispatch }) {
  const colWidth = 285
  const handleClick = (photoIndex) => {
    history.pushState(null, '', '/photos/' + albumIndex + '/' + photoIndex)
    dispatch({
      type: 'SET_PHOTO',
      albumIndex: albumIndex,
      photoIndex: photoIndex,
    })
  }

  return (
    <div className='Gallery'>
      {album.photos.map((photo, i) => {
        // Width will be the width of the column and height is
        // calculated proportionally to the new width.
        const width = colWidth
        const height = Math.floor((photo.height * colWidth) / photo.width)

        return (
          <GalleryPhoto
            key={`g-${i}`}
            src={`${album.path}/s/${photo.file}`}
            width={width}
            height={height}
            index={i}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
