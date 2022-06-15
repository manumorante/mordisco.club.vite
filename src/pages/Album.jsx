import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import PhotoBig from '../components/PhotoBig'
import Carousel from '../components/Carousel'

const Simple = lazy(() => import('../components/ListSimple'))
const Masonry = lazy(() => import('../components/ListMasonry'))

export default function Album() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()

  const album = state.albums[albumID]
  if (!album) return <div>Album not found</div>

  return (
    <>
      <PhotoBig photo={album.photos[photoID]} />
      {/* <Carousel album={album} photoID={photoID} /> */}

      <Suspense fallback={null}>
        {state.isMobile ? <Simple photos={album.photos} /> : <Masonry photos={album.photos} />}
      </Suspense>
    </>
  )
}
