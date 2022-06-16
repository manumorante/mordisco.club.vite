import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import Carousel from '../components/Carousel'

const Simple = lazy(() => import('../components/ListSimple'))
const Masonry = lazy(() => import('../components/ListMasonry'))

export default function Album() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()
  const [isOpen, setIsOpen] = useState(false)
  const [carouselLoading, setCarouselLoading] = useState(false)
  const album = state.albums[albumID]

  if (!album) return <div>Album not found</div>

  useEffect(() => {
    const _isOpen = !!photoID

    setIsOpen(_isOpen)
    setCarouselLoading(_isOpen)
  }, [photoID])

  return (
    <>
      {isOpen && <Carousel album={album} photoID={photoID} onLoad={() => setCarouselLoading(false)} />}

      <Suspense fallback={null}>
        {!isOpen && !carouselLoading && state.isMobile ? (
          <Simple photos={album.photos} />
        ) : (
          <Masonry photos={album.photos} />
        )}
      </Suspense>
    </>
  )
}
