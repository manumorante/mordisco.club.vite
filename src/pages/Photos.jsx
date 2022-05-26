import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import Logo from '../components/Logo'
import Gallery from '../components/Gallery'
import Photo from '../components/Photo'
import Modal from '../components/Modal'
import Starback from 'starback'

export default function Photos() {
  const { state, dispatch } = useApiContext()
  const { albumParam, photoParam } = useParams()

  const canvas = document.getElementById('canvas')
  const starback = new Starback(canvas, {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    type: 'line',
    frequency: 400,
    slope: { x: -1, y: 10 },
    directionX: 2,
    speed: 30,
    spread: -10,
    randomOpacity: true,
    quantity: 20,
  })

  useEffect(() => {
    if (!state.hasAlbums) return
    dispatch({
      type: 'SELECT',
      albumIndex: albumParam,
      photoIndex: photoParam,
    })
  }, [state.hasAlbums])

  return (
    <div className='Photos w-full h-full px-6 mx-auto max-w-5xl'>
      <div className='py-12 flex justify-center mx-auto'>
        <Logo />
      </div>

      {/* {state.hasAlbums && <Albums dispatch={dispatch} albums={state.albums} />} */}
      {state.hasAlbum && <Gallery album={state.album} dispatch={dispatch} />}

      <Modal isOpen={state.hasPhoto} dispatch={dispatch}>
        <Photo path={state.album.path} photo={state.photo} active={true} />
      </Modal>

      <div className='py-12 flex justify-center mx-auto'>
        <Logo />
      </div>
    </div>
  )
}
