import React from 'react'
import { useNavigate } from 'react-router-dom'
import Close from './control/Close'
import Img from './Img'

export default function CarouselMobile({ album, photoID }) {
  if (!album || !photoID) return null

  const navigate = useNavigate()

  const currentPhoto = parseInt(photoID)

  return (
    <div className='Carousel fixed z-20 inset-0 w-screen h-screen snap-x snap-mandatory overflow-x-auto bg-black'>
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
