import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Logo from './app/Logo'
import Controls from './control/Controls'
import Img from './Img'

export default function Carousel({ album, photoID, onLoad }) {
  if (!album || !photoID) return null

  const ALBUM_URL = `/photos/${album.id}`
  const TOTAL = album.photos.length

  const carouselRef = React.createRef()
  const navigate = useNavigate()

  // This loading if for the current big photo
  const [loading, setLoading] = useState(true)
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

  const handleLoad = (id) => {
    if (currentPhoto === id) {
      setLoading(false)
      onLoad && onLoad()
    }
  }

  const headerClass = classNames(
    'fixed top-0 pt-8 w-full flex justify-center z-[11] transition-transform duration-500',
    {
      '-translate-y-full': loading,
    }
  )

  return (
    <div ref={carouselRef} className='Carousel fixed z-30 w-screen h-screen inset-0 py-10 bg-black/80 overflow-hidden'>
      <div style={carouselStyle} className='absolute z-20 top-0 left-0 flex transition-transform duration-500'>
        {album.photos.map((photo) => (
          <Img
            key={photo.id}
            src={photo.big}
            onLoad={() => handleLoad(photo.id)}
            className='w-screen h-screen sm:p-10 object-contain flex-shrink-0'
          />
        ))}
      </div>

      <div className={headerClass}>
        <Logo className='h-7' />
      </div>

      <div className='Blured fixed z-10 -inset-6 bg-black animate-fade-in'>
        <img className='w-full h-full object-cover blur-lg opacity-30' src={album.photos[currentPhoto].small} />
      </div>
      <Controls onNext={() => handleNext()} onPrev={() => handlePrev()} onClose={() => handleClose()} />
    </div>
  )
}
