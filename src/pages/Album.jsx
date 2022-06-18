import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiContext } from '../js/ApiContext'
import { List, Carousel, CarouselMobile } from '../components/gallery'

export default function Album() {
  const { albumID, photoID } = useParams()
  const { state } = useApiContext()
  const isOpen = !!photoID
  const album = state.albums[albumID]

  if (!album) return <div>Album not found</div>

  const photos = album.photos
  const quotes = state.quotes

  if (photos.length === 0) return <div>No photos found</div>
  if (quotes.length === 0) return <div>No quotes found</div>

  return (
    <>
      <List photos={photos} quotes={quotes} />
      {isOpen && !state.isMobile && <Carousel album={album} photoID={photoID} />}
      {isOpen && state.isMobile && <CarouselMobile album={album} photoID={photoID} />}
    </>
  )
}
