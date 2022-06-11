import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import Logo from '../components/Logo'
import Gallery from '../components/Gallery'
import Albums from '../components/Gallery/Albums'
import BigPhoto from '../components/BigPhoto'
import Modal from '../components/Modal'
import showStars from '../js/stars'
import { isEmpty } from '../js/utils'

export default function Photos() {
  const { state, dispatch } = useApiContext()
  const { albumParam, photoParam } = useParams()

  useEffect(() => {
    if (!state.hasAlbums) return

    dispatch({ type: 'SET', albumID: albumParam, photoID: photoParam })
  }, [state.hasAlbums])

  useEffect(() => showStars(), [])

  return (
    <div className='Photos max-w-4xl mx-8 lg:mx-auto'>
      <Logo />

      {isEmpty(state.album) ? (
        <Albums albums={state.albums} dispatch={dispatch} />
      ) : (
        <Gallery album={state.album} dispatch={dispatch} />
      )}

      <Modal isOpen={!isEmpty(state.photo)} dispatch={dispatch}>
        <BigPhoto path={state.album.path} photo={state.photo} />
      </Modal>

      <Logo />
    </div>
  )
}
