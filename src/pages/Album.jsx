import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import Carousel from '../components/Carousel'
import List from '../components/List'

export default function Album() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()
  const isOpen = !!photoID
  const album = state.albums[albumID]

  if (!album) return <div>Album not found</div>

  return (
    <>
      <List photos={album.photos} />
      {isOpen && <Carousel album={album} photoID={photoID} />}
    </>
  )
}
