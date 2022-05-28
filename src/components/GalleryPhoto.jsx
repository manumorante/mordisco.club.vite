import React, { useState, useRef } from 'react'
import { useIntersection } from '../js/useIntersection'
import Loading from './Loading'

export default function GalleryPhoto({
  src,
  width,
  height,
  index,
  handleClick,
}) {
  const [isInView, setIsInView] = useState(false)
  const [loading, setLoading] = useState(true)
  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setIsInView(true)
    setLoading(true)
  })

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div
      ref={imgRef}
      className='GalleryPhoto mm-masonry__item relative'
      style={{ '--w': width, '--h': height }}>
      {isInView && (
        <>
          <img
            className='GalleryPhoto__img mm-masonry__img cursor-pointer'
            src={src}
            onLoad={handleLoad}
            onClick={() => handleClick(index)}
          />
          {loading && <Loading />}
        </>
      )}
    </div>
  )
}
