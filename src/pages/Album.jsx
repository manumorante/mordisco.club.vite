// Tener en cuenta isMobile
// <Masonry items={album.photos} columnGutter={24} columnWidth={288} overscanBy={5} render={PhotoMasonry} />

import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import Photo from '../components/Photo.jsx'

export default function Album() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()
  const album = state.albums[albumID]

  if (!album) return <div>Album not found</div>

  const photo = album.photos[photoID]

  document.documentElement.classList.toggle('modal-is-open', !!photo)

  return (
    <>
      {/* Big photo to new component */}
      {photo && (
        <div className='Photo absolute z-30 inset-0 bg-black/50'>
          <img className='w-full h-full object-contain' src={photo.big} alt='Photo' />
        </div>
      )}
      {/* Big photo to new component */}

      <div className='Album mx-6 sm:mx-auto flex flex-col gap-6'>
        {album.photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />
        })}
      </div>
    </>
  )
}
