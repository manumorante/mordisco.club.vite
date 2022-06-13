import React from 'react'
import { CalendarIcon, CameraIcon } from '@heroicons/react/outline'
import AlbumCover from './AlbumCover'

export default function Albums({ albums, acc }) {
  albums = albums.slice().reverse()

  const handleClick = (albumID) => {
    acc({ type: 'SET_ALBUM', albumID: albumID })
  }
  return (
    <nav className='GalleryAlbums max-w-xl mx-auto flex flex-col gap-8'>
      <p className='flex gap-2 justify-end items-center text-2xl text-neutral-700'>
        <CalendarIcon className='w-6 h-6' />
        <span className='font-light'>2022</span>
      </p>

      {albums.map((album) => {
        const date = new Date(album.date)

        return (
          <div
            key={album.id}
            className='GalleryAlbums__album rounded-xl p-6 sm:p-8 bg-slate-800 sm:hover:bg-neutral-900 transition-colors cursor-pointer'
            onClick={() => handleClick(album.id)}>
            <AlbumCover album={album} />

            <div className='meta flex justify-between items-center'>
              <span className='font-light text-2xl capitalize'>
                {date.toLocaleDateString('es-ES', { month: 'long' })}
              </span>
              <div className='text-slate-600 flex gap-2'>
                <span>{album.photos.length}</span>
                <CameraIcon className='w-6 h-6' />
              </div>
            </div>
          </div>
        )
      })}
    </nav>
  )
}
