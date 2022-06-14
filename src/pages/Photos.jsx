import React, { useEffect, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import { isEmpty } from '../js/utils'
import { Masonry } from 'masonic'

import Logo from '../components/Logo'
import Albums from '../components/Gallery/Albums'
import Photo from '../components/Gallery/Photo'
import Modal from '../components/Gallery/Modal'

const Starfall = lazy(() => import('../components/Starfall'))

export default function Photos() {
  const { state, acc } = useApiContext()
  const { albumParam, photoParam } = useParams()

  // Show Album or Photo if they are passed in the URL
  useEffect(() => {
    if (!state.success) return

    acc({ type: 'SET', albumID: albumParam, photoID: photoParam })
  }, [albumParam, photoParam])

  return (
    <div className='Photos'>
      <Logo />

      {isEmpty(state.album) ? (
        <Albums albums={state.albums} acc={acc} />
      ) : (
        <Masonry
          items={state.album.photos}
          columnGutter={24}
          columnWidth={state.column}
          overscanBy={5}
          render={Photo}
        />
      )}

      <Modal photo={state.photo} acc={acc} />

      <Logo />

      <Suspense fallback={<div>Loading...</div>}>
        <Starfall />
      </Suspense>
    </div>
  )
}
