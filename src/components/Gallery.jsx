import React from 'react'
import Photo from './Photo'

export default function Gallery({ album, dispatch }) {
  return (
    <div className='Gallery px-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5'>
      {album.photos.map((photo, index) => (
        <div
          key={`g-${index}`}
          className='w-full h-auto cursor-pointer md:hover:outline md:hover:outline-1 md:hover:outline-pink-500 transition-all'
          onClick={() => {
            dispatch({ type: 'SET_PHOTO', photoIndex: index })
          }}>
          <Photo path={album.path} photo={photo} />
        </div>
      ))}
    </div>
  )
}
