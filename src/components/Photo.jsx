import React, { useEffect, useState } from 'react'
import Loading from './Loading'

export default function Photo({ path, photo } = { src: '', width: 3, height: 2 }) {
  const [loading, setLoading] = useState()

  useEffect(() => {
    if (!photo || photo.file === '') return

    setLoading(true)
  }, [photo.file])

  return (
    <div
      className='Photo relative'
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
      {loading && <Loading />}
      <img
        className='rounded-sm object-scale-down'
        src={`/${path}/${photo.file}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
