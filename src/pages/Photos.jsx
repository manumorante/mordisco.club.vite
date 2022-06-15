import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import { isEmpty } from '../js/utils'

import Albums from '../components/Gallery/Albums'
import Gallery from '../components/Gallery'
import Modal from '../components/Gallery/Modal'

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
      {isEmpty(state.album) ? <Albums albums={state.albums} acc={acc} /> : <Gallery album={state.album} />}

      <Modal photo={state.photo} acc={acc} />
    </div>
  )
}
