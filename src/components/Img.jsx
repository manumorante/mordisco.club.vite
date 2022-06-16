import React, { useState, useRef } from 'react'
import { useIntersection } from '../js/useIntersection'
import classNames from 'classnames'

export default function Img({ src, width, height, className, preload = false }) {
  const [loading, setLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState()
  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setImgSrc(src)
  })

  const handleLoad = () => {
    setLoading(false)
  }

  const imgClasses = classNames(
    { 'is-loaded': !loading, 'opacity-0': loading },
    'transition-opacity duration-500',
    className
  )

  return (
    <img
      ref={imgRef}
      className={imgClasses}
      width={width}
      height={height}
      src={preload ? src : imgSrc}
      onLoad={handleLoad}
    />
  )
}
