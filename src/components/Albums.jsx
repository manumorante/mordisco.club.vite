import React from 'react'

export default function Albums({ albums, dispatch }) {
  return (
    <div>
      <h4>Albums</h4>

      <nav>
        {albums.map((album, index) => (
          <div
            key={`a-${index}`}
            className='text-white cursor-pointer p-2'
            onClick={() => {
              dispatch({ type: 'SELECT', albumIndex: index })
            }}>
            {album.path}
          </div>
        ))}
      </nav>
    </div>
  )
}
