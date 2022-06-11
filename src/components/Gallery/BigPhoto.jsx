import React, { useState } from 'react'
import Loading from './Loading'

export default function BigPhoto({ path, photo }) {
  const [loading, setLoading] = useState(true)

  return (
    <div className='BigPhoto'>
      {loading && <Loading />}
      {loading && (
        <img className='BigPhoto__img' src={`${path}/s/${photo.file}`} />
      )}
      <img
        className='BigPhoto__img'
        src={`${path}/${photo.file}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
