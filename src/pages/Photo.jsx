import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import Photo from '../components/Photo'

export default function PhotoPage() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()
  const album = state.albums[albumID]
  const photo = album.photos[photoID]

  if (!photo) return <div>Photo not found</div>

  return <Photo photo={photo} />
}
