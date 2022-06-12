import React, { useState } from 'react'

export default function Albums({ albums, acc }) {
  const [rdn, setRnd] = useState(0)

  const handleClick = (albumID) => {
    acc({ type: 'SET_ALBUM', albumID: albumID })
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCover(album.photos[0].small)
  //   }, 1000)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <nav className='GalleryAlbums'>
      {albums.map((album) => {
        const cover = album.photos[rdn].small
        const date = new Date(album.date)

        return (
          <div
            key={album.id}
            className='rounded-xl p-4 mb-4 bg-neutral-900/50 hover:bg-neutral-900'
            onClick={() => handleClick(album.id)}>
            <img className='block mb-4' src={cover} alt='Album' />
            <div className='meta'>
              <p className='font-bold capitalize'>
                {date.toLocaleDateString('es-ES', { month: 'long' })} {date.getFullYear()}
              </p>
            </div>
          </div>
        )
      })}
    </nav>
  )
}
