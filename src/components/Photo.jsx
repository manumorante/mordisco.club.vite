import React, { useEffect, useState } from 'react'
import Loading from './Loading'

export default function Photo(
  { path, photo } = { src: '', width: 3, height: 2 }
) {
  const [loading, setLoading] = useState()

  useEffect(() => {
    if (!photo || photo.file === '') return

    setLoading(true)
  }, [photo.file])

  return (
    <div
      className='Photo relative z-10 bg-slate-900/40 w-full h-full object-scale-down'
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
      {loading && <Loading />}
      <img
        className='rounded-sm w-full h-auto'
        src={`${path}/${photo.file}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
