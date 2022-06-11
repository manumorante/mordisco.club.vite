import React from 'react'

export default function Albums({ albums, dispatch }) {
  const handleClick = (albumID) => {
    dispatch({ type: 'SET_ALBUM', albumID: albumID })
  }

  return (
    <nav className='GalleryAlbums'>
      {albums.map((album) => {
        return (
          <div
            key={album.id}
            className='p-10 bg-neutral-900/50 hover:bg-neutral-900'
            onClick={() => handleClick(album.id)}>
            Album {album.id + 1}
          </div>
        )
      })}
    </nav>
  )
}
