import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { data } from '../../data'
import Logo from '../components/Logo'
import coverImg from '../img/mordisco-club-people.jpg'

export default function Photos() {
  const { albumParam } = useParams()
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [album, setAlbum] = useState()

  useEffect(() => {
    let albumData
    try {
      albumData = data[albumParam]
    } catch (error) {
      console.log(error)
      return false
    }

    setAlbum(albumData)
  }, [albumParam])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  if (!album) return <div>Loading ...</div>

  return (
    <div className='Photos h-full'>
      <div className='relative z-20 w-full h-full flex items-center justify-center'>
        <Logo />
      </div>

      <div className='Overlay absolute inset-0 z-10 bg-black opacity-50'></div>

      <div className='Cover absolute inset-0 z-0'>
        <img
          className='w-full h-full object-cover'
          src={coverImg}
          alt='People'
        />
      </div>
      <Gallery photos={album} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={album.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
