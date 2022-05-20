import React, { useEffect, useState } from 'react'
import Loading from './Loading'

export default function Photo({ photo } = { src: '', width: 3, height: 2 }) {
  const [loading, setLoading] = useState()

  useEffect(() => {
    if (!photo || photo.src === '') return

    setLoading(true)
  }, [photo.src])

  return (
    <div
      className='Photo relative'
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
      {loading && <Loading />}
      <img
        className='rounded-sm object-scale-down hover:outline hover:outline-1 hover:outline-pink-500 transition-all'
        src={photo.src}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
