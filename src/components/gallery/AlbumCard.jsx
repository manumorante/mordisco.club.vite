import React from 'react'
import { Link } from 'react-router-dom'
import { CameraIcon } from '@heroicons/react/outline'

export default function AlbumCard({ album }) {
  const date = new Date(album.date)

  return (
    <Link
      to={`/photos/${album.id}`}
      className='rounded-md p-4 sm:p-6 bg-black cursor-pointer'>
      <img className='w-full aspect-square object-cover mb-4' src={album.photos[0].small} alt='Cover' />

      <div className='flex justify-between items-center text-neutral-600'>
        <span className='font-light text-xl capitalize'>{date.toLocaleDateString('es-ES', { month: 'long' })}</span>
        <div className=' flex gap-2'>
          <span>{album.photos.length}</span>
          <CameraIcon className='w-6 h-6' />
        </div>
      </div>
    </Link>
  )
}
