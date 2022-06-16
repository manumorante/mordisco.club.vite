import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Controls from './controls/Controls'
import Img from './Img'

export default function Carousel({ album, photoID, onLoad }) {
  // El Carousel se pinta si hay photoID y bloquea el scroll
  document.body.classList.toggle('no-scroll', !!photoID)

  if (!album || !photoID) return null

  const navigate = useNavigate()

  const listRef = React.createRef()
  const [currentPhoto, setCurrentPhoto] = useState(parseInt(photoID))
  const [style, setStyle] = useState({
    transform: 'translateX(0)',
  })

  useEffect(() => {
    if (listRef.current) {
      const list = listRef.current
      const width = list.offsetWidth
      const translateX = -width * currentPhoto
      setStyle({
        transform: `translateX(${translateX}px)`,
      })
    }
  }, [currentPhoto])

  return (
    <div ref={listRef} className='Carousel fixed z-30 w-screen h-screen inset-0 py-10 bg-black/80 overflow-hidden'>
      <div className='List absolute top-0 left-0 flex' style={style}>
        {album.photos.map((photo) => {
          const preload = photo.id === currentPhoto + 1 || photo.id === currentPhoto - 1
          return (
            <Img
              key={photo.id}
              src={photo.big}
              preload={true}
              className='w-screen h-screen p-10 object-contain flex-shrink-0'
            />
          )
        })}
      </div>

      <Controls
        onNext={() => setCurrentPhoto((currentPhoto) => currentPhoto + 1)}
        onPrev={() => setCurrentPhoto((currentPhoto) => currentPhoto - 1)}
        onClose={() => navigate(`/photos/${album.id}`)}
      />
    </div>
  )
}
