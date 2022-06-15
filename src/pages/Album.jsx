// Tener en cuenta isMobile
// <Masonry items={album.photos} columnGutter={24} columnWidth={288} overscanBy={5} render={PhotoMasonry} />

import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import Photo from '../components/Photo.jsx'
import PhotoBig from '../components/PhotoBig'

export default function Album() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()

  const album = state.albums[albumID]
  if (!album) return <div>Album not found</div>

  return (
    <>
      <PhotoBig photo={album.photos[photoID]} />

      <div className='Album mx-6 grid landscape:grid-cols-2 gap-7'>
        {album.photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  )
}
