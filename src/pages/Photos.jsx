import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setUrl } from '../js/tools'
import Gallery from '../components/Gallery'
import Photo from '../components/Photo'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import { data } from '../../data'

export default function Photos() {
  const { albumParam, photoParam } = useParams()
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState({})
  const [photos, setPhotos] = useState([])

  // Esta funcion es para llmar a setCurrentPhoto con ajustes
  function handleSetCurrentPhoto(pos) {
    const newPhoto = photos[pos]
    const newCurrentPhoto = {
      pos: pos,
      src: newPhoto.src,
      width: newPhoto.width,
      height: newPhoto.height,
    }
    setCurrentPhoto(newCurrentPhoto)
    setViewerIsOpen(true)
    setUrl(albumParam, pos)
  }

  const nextPhoto = () => {
    const pos = Number(currentPhoto.pos) + 1
    handleSetCurrentPhoto(pos)
  }

  const prevPhoto = () => {
    const pos = Number(currentPhoto.pos) - 1
    handleSetCurrentPhoto(pos)
  }

  // Open
  const openPhoto = (photo) => {
    setCurrentPhoto(photo)
    setViewerIsOpen(true)
    setUrl(albumParam, photo.pos)
  }

  // Close
  const closePhoto = () => {
    setCurrentPhoto({})
    setViewerIsOpen(false)
    setUrl(albumParam)
  }

  // Data -> setPhotos
  useEffect(() => {
    if (!data || data.length === 0 || isNaN(albumParam)) return

    setPhotos(data[albumParam].photos)
  }, [data, albumParam])

  // Photos -> setCurrentPhoto
  useEffect(() => {
    if (!photos || photos.length === 0 || isNaN(photoParam)) return

    handleSetCurrentPhoto(photoParam)
  }, [photos, photoParam])

  // Keybindings
  useEffect(() => {
    if (!currentPhoto || currentPhoto == {}) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closePhoto()
      if (event.key === 'ArrowRight') nextPhoto()
      if (event.key === 'ArrowLeft') prevPhoto()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentPhoto])

  if (photos.length <= 0) return <Loading />

  return (
    <div className='Photos'>
      <Gallery photos={photos} onClick={openPhoto} />
      <Modal visible={viewerIsOpen} onClose={closePhoto}>
        <Photo photo={currentPhoto} />
      </Modal>
    </div>
  )
}
