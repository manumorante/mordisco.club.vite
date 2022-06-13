import React, { useState, useRef } from 'react'
import { useIntersection } from '../../js/useIntersection'
import Loading from './Loading'

export default function Photo({ photo, acc }) {
  const [isInView, setIsInView] = useState(false)
  const [loading, setLoading] = useState(true)
  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setIsInView(true)
    setLoading(true)
  })

  return (
    <div ref={imgRef} className='GalleryPhoto'>
      <img
        width={photo.width}
        className='GalleryPhoto__img'
        style={{
          aspectRatio: `${photo.width} / ${photo.height}`,
          ...(loading && { opacity: 0 }),
        }}
        src={isInView ? photo.small : null}
        onLoad={() => setLoading(false)}
        onClick={() =>
          acc({
            type: 'SET_PHOTO',
            albumID: photo.albumID,
            photoID: photo.id,
          })
        }
      />
      {isInView && loading && <Loading />}
    </div>
  )
}
