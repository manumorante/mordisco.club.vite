import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import PhotoBig from '../components/PhotoBig'

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

      <Suspense fallback={null}>
        {state.isMobile ? <Simple photos={album.photos} /> : <Masonry photos={album.photos} />}
      </Suspense>
    </>
  )
}
