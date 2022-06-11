import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import { isEmpty, isFill } from '../js/utils'

import Logo from '../components/Logo'
import { Albums, Gallery, Modal, BigPhoto } from '../components/Gallery'

import showStars from '../js/stars'

export default function Photos() {
  const { state, acc } = useApiContext()
  const { albumParam, photoParam } = useParams()

  useEffect(() => {
    if (!state.success) return

    acc({ type: 'SET', albumID: albumParam, photoID: photoParam })
  }, [state.success])

  useEffect(() => showStars(), [])

  return (
    <div className='Photos max-w-4xl mx-8 lg:mx-auto'>
      <Logo />

      {isEmpty(state.album) ? <Albums albums={state.albums} acc={acc} /> : <Gallery album={state.album} acc={acc} />}

      {/* <Modal isOpen={isFill(state.photo)} acc={acc}> */}
      <Modal isOpen={true} acc={acc}>
        <BigPhoto path={state.album.path} photo={state.photo} />
        <p>hoola</p>
      </Modal>

      <Logo />
    </div>
  )
}
