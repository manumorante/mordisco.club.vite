import React, { useState, useRef } from 'react'
import { useIntersection } from '../js/useIntersection'

export default function GalleryPhoto({
  src,
  width,
  height,
  index,
  handleClick,
}) {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setIsInView(true)
  })

  return (
    <div
      ref={imgRef}
      className='GalleryPhoto mm-masonry__item relative'
      style={{ '--w': width, '--h': height }}>
      {isInView && (
        <img
          className='mm-masonry__img cursor-pointer'
          src={src}
          onClick={() => handleClick(index)}
        />
      )}
    </div>
  )
}
