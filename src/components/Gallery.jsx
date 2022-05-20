import React from 'react'
import Photo from './Photo'

export default function Gallery({ photos, onClick }) {
  return (
    <div className='Gallery grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5'>
      {photos.map((photo, index) => (
        <div
          key={`g-${index}`}
          className='w-full h-auto cursor-pointer'
          onClick={() => {
            onClick({ ...photo, pos: index })
          }}>
          <Photo photo={photo} />
        </div>
      ))}
    </div>
  )
}
