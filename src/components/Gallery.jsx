import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, albumIndex, dispatch }) {
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
        return (
          <GalleryPhoto
            key={`g-${i}`}
            src={`${album.path}/s/${photo.file}`}
            width={photo.width}
            height={photo.height}
            index={i}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
