import React, { useState, useRef } from 'react'
import { useIntersection } from '../../js/useIntersection'
import Loading from './Loading'

export default function GalleryPhoto({ src, width, height, albumID, photoID, handleClick }) {
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
    <div ref={imgRef} className='GalleryPhoto'>
      <img
        width={width}
        height='auto'
        className='GalleryPhoto__img'
        style={{
          aspectRatio: `${width} / ${height}`,
          ...(loading && { opacity: 0 }),
        }}
        src={isInView ? src : null}
        onLoad={handleLoad}
        onClick={() => handleClick({ albumID, photoID })}
      />
      {isInView && loading && <Loading />}
    </div>
  )
}
