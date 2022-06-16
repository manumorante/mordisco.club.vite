import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Close from './control/Close'
import Img from './Img'

export default function CarouselMobile({ album, photoID }) {
  if (!album || isNaN(photoID)) return null
  const elRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    if (isNaN(photoID)) return

    const gap = 24 // gap-6
    const width = elRef.current.offsetWidth
    const step = (width + gap) * photoID
    elRef.current.scrollLeft = step
  }, [photoID])

  return (
    <div
      ref={elRef}
      className='Carousel fixed z-20 inset-0 w-screen h-screen snap-x snap-mandatory overflow-x-auto bg-black'>
      <div className='relative z-0 flex gap-6'>
        {album.photos.map((photo) => (
          <div key={photo.id} className='snap-center flex-shrink-0 w-screen h-screen'>
            <Img src={photo.big} className='w-full h-full flex-shrink-0 object-contain' />
          </div>
        ))}
      </div>

      <Close onClick={() => navigate(`/photos/${album.id}`)} />
    </div>
  )
}
