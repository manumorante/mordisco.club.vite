import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useIntersection } from '../js/useIntersection'
import Spinner from './Spinner'

export default function Photo({ photo }) {
  const [src, setSrc] = useState()
  const imgRef = useRef()
  const [loading, setLoading] = useState(true)

  // Check when photo is visible for the user and start to load it
  useIntersection(imgRef, () => {
    setSrc(photo.small)
  })

  return (
    <Link className='Photo relative opacity-0 animate-fade-in' to={`/photos/${photo.albumID}/${photo.id}`} ref={imgRef}>
      <img
        width={photo.width}
        height={photo.height}
        className=''
        style={{
          opacity: loading ? 0 : 1,
        }}
        src={src}
        onLoad={() => setLoading(false)}
      />
      <Spinner showif={loading} />
    </Link>
  )
}
