import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Controls from './controls/Controls'
import Img from './Img'

export default function Carousel({ album, photoID, onLoad }) {
  // El Carousel se pinta si hay photoID y bloquea el scroll
  document.body.classList.toggle('no-scroll', !!photoID)

  if (!album || !photoID) return null

  const ALBUM_URL = `/photos/${album.id}`
  const TOTAL = album.photos.length

  const carouselRef = React.createRef()
  const navigate = useNavigate()
  const [currentPhoto, setCurrentPhoto] = useState(parseInt(photoID))
  const [carouselStyle, setCarouselStyle] = useState({
    transform: 'translateX(0)',
  })

  // Show the proper photo from the url
  useEffect(() => {
    goToPhoto(parseInt(photoID))
  }, [photoID])

  const handleNext = () => {
    if (currentPhoto === TOTAL - 1) return false

    const photoID = currentPhoto + 1
    goToPhoto(photoID)
    navigate(`${ALBUM_URL}/${photoID}`)
  }

  const handlePrev = () => {
    if (currentPhoto === 0) return false

    const photoID = currentPhoto - 1
    goToPhoto(photoID)
    navigate(`${ALBUM_URL}/${photoID}`)
  }

  const handleClose = () => {
    navigate(ALBUM_URL)
  }

  const carouselWidth = () => {
    const carousel = carouselRef.current
    const { width } = carousel.getBoundingClientRect()
    return width
  }

  const goToPhoto = (photoID) => {
    const width = carouselWidth()
    const translateX = -width * photoID
    setCurrentPhoto(photoID)

    setCarouselStyle({
      transform: `translateX(${translateX}px)`,
    })
  }

  return (
    <div ref={carouselRef} className='Carousel fixed z-30 w-screen h-screen inset-0 py-10 bg-black/80 overflow-hidden'>
      <div style={carouselStyle} className='List absolute top-0 left-0 flex transition-transform duration-500'>
        {album.photos.map((photo) => (
          <Img key={photo.id} src={photo.big} className='w-screen h-screen sm:p-10 object-contain flex-shrink-0' />
        ))}
      </div>

      <Controls onNext={() => handleNext()} onPrev={() => handlePrev()} onClose={() => handleClose()} />
    </div>
  )
}
