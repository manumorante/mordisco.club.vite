import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../context/ApiContext'
import Logo from '../components/Logo'
import Gallery from '../components/Gallery'
import Photo from '../components/Photo'
import Modal from '../components/Modal'

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

  return (
    <div className='Photos'>
      <div className='p-12 flex justify-center mx-auto'>
        <Logo />
      </div>

      {state.hasAlbums && (
        <div>
          <h4>Albums</h4>

          <nav>
            {state.albums.map((album, index) => (
              <div
                key={`a-${index}`}
                className='text-white cursor-pointer p-2'
                onClick={() => {
                  dispatch({ type: 'SELECT', albumIndex: index })
                }}>
                {album.path}
              </div>
            ))}
          </nav>
        </div>
      )}

      {state.hasAlbum && <Gallery album={state.album} dispatch={dispatch} />}

      <Modal isOpen={state.hasPhoto} dispatch={dispatch}>
        <Photo path={state.album.path} photo={state.photo} />
      </Modal>

      <div className='p-12 flex justify-center mx-auto'>
        <Logo />
      </div>
    </div>
  )
}
