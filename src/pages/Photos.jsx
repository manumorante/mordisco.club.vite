import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Loading from '../components/Loading'
import { data } from '../../data'

export default function Photos() {
  const { albumParam, photoParam } = useParams()
  const [currentImage, setCurrentImage] = useState(false)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const validAlbum = (value, max) => {
      if (isNaN(value)) return 0
      if (value < 0) return 0
      if (value >= max) return max - 1
      return value
    }

    const validPhoto = (value, max) => {
      if (isNaN(value)) return -1
      if (value >= max) return max - 1
      return value
    }

    closeLightbox()

    // Set the album
    const totalAlbums = data.length
    const albumPos = validAlbum(albumParam, totalAlbums)
    const album = data[albumPos]
    setPhotos(album.photos)

    // Show photo?
    const totalPhotos = album.photos.length
    const photoPos = validPhoto(photoParam, totalPhotos)

    if (photoPos >= 0) {
      setCurrentImage(photoPos)
      setViewerIsOpen(true)
    }
  }, [])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
    window.history.pushState(null, null, `/photos/${albumParam}/${index}`)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(false)
    setViewerIsOpen(false)
  }

  if (!photos) return <Loading />

  return (
    <div className='Photos h-full'>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
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
