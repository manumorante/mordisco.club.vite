import React from 'react'
import GalleryPhoto from './GalleryPhoto'

export default function Gallery({ album, acc }) {
  const handleClick = ({ albumID, photoID }) => {
    acc({
      type: 'SET_PHOTO',
      albumID: albumID,
      photoID: photoID,
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
            albumID={album.id}
            photoID={i}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
