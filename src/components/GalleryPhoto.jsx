import React, { useState } from 'react'
import Loading from './Loading'

export default function GalleryPhoto({ path, photo, index, dispatch, style }) {
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    if (loading) return
    dispatch({ type: 'SET_PHOTO', photoIndex: index })
  }

  return (
    <div className='GalleryPhoto mm-masonry__item relative' style={style}>
      {loading && <Loading />}
      <img
        className='mm-masonry__img cursor-pointer'
        src={`${path}/${photo.file}`}
        onLoad={() => setLoading(false)}
        onClick={handleClick}
      />
    </div>
  )
}
