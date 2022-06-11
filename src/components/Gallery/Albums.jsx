import React from 'react'

export default function Albums({ albums, dispatch }) {
  return (
    <nav className='GalleryAlbums'>
      {albums.map((album) => {
        return (
          <div
            key={album.id}
            className='p-10 bg-neutral-900/50 hover:bg-neutral-900'
            onClick={() =>
              dispatch({
                type: 'SELECT',
                albumIndex: album.id,
              })
            }>
            Album {album.id + 1}
          </div>
        )
      })}
    </nav>
  )
}
