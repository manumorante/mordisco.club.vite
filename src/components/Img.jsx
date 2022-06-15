import React, { useState, useRef } from 'react'
import { useIntersection } from '../js/useIntersection'
import Spinner from './app/Spinner'
import classNames from 'classnames'

export default function Img({ src: srcParam, width, height, className }) {
  const [src, setSrc] = useState()
  const imgRef = useRef()
  const [loading, setLoading] = useState(true)

  useIntersection(imgRef, () => {
    setSrc(srcParam)
  })

  const imgClass = classNames('transition-opacity duration-2000', {
    'opacity-0': loading,
  })

  return (
    <div className={className} ref={imgRef}>
      <img className={imgClass} width={width} height={height} src={src} onLoad={() => setLoading(false)} />
      <Spinner showif={loading} />
    </div>
  )
}
