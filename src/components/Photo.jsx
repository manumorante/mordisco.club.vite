import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useIntersection } from '../js/useIntersection'
import Spinner from './Spinner'
import classNames from 'classnames'

export default function Photo({ data: { id, albumID, small, width, height } }) {
  const [src, setSrc] = useState()
  const imgRef = useRef()
  const [loading, setLoading] = useState(true)

  // Check when photo is visible for the user and start to load it
  useIntersection(imgRef, () => {
    setSrc(small)
  })

  const classes = classNames('img', {
    'opacity-0': loading,
  })

  return (
    <Link className='Photo' to={`/photos/${albumID}/${id}`} ref={imgRef}>
      <img className={classes} width={width} height={height} src={src} onLoad={() => setLoading(false)} />
      <Spinner showif={loading} />
    </Link>
  )
}
