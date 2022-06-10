import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import Logo from '../components/Logo'
import Gallery from '../components/Gallery'
import BigPhoto from '../components/BigPhoto'
import Modal from '../components/Modal'
import showStars from '../js/stars'

export default function Photos() {
  const { state, dispatch } = useApiContext()
  const { albumParam, photoParam } = useParams()

  useEffect(() => {
    if (!state.hasAlbums) return

    dispatch({
      type: 'SELECT',
      albumIndex: albumParam,
      photoIndex: photoParam,
    })
  }, [state.hasAlbums])

  useEffect(() => showStars(), [])

  return (
    <div className='Photos max-w-4xl mx-6 lg:mx-auto'>
      <Logo />

      {state.albums.length > 0 &&
        state.albums.map((album) => {
          return (
            <a className='p-2 inline-block' key={album.id} href={`/photos/${album.id}`}>
              {album.id + 1}
            </a>
          )
        })}

      {state.hasAlbum && (
        <div>
          <Gallery
            album={state.album}
            albumIndex={state.album.id}
            dispatch={dispatch}
          />
        </div>
      )}

      <Modal isOpen={state.hasPhoto} dispatch={dispatch}>
        <BigPhoto path={state.album.path} photo={state.photo} />
      </Modal>

      <Logo />
    </div>
  )
}
