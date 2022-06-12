import React, { useEffect, useState } from 'react'

export default function AlbumCover({ album }) {
  const PHOTOS = album.photos
  const TOTAL = PHOTOS.length

  const [isHover, setIsHover] = useState(false)
  const [turn, setTurn] = useState(0)

  // To control first time and show quickly the next cover
  const [first, setFirst] = useState(true)

  const [pos, setPos] = useState(0)
  const [srcA, setSrcA] = useState(PHOTOS[0].small)
  const [srcB, setSrcB] = useState(PHOTOS[1].small)

  const [aClass, setAClass] = useState('opacity-100')
  const [bClass, setBClass] = useState('opacity-0')

  const slideshowInterval = 1000
  const transitionDuration = 1000
  const transitionDurationClass = 'duration-1000'

  const handleMouseOut = () => {
    setIsHover(false)
  }

  const handleMouseOver = () => {
    setIsHover(true)
    setFirst(true)
  }

  // Rotate turns
  useEffect(() => {
    if (!isHover) return false

    const active = 'z-10 opacity-100'
    const inactive = 'z-0 opacity-0'

    const timer = setTimeout(
      () => {
        setAClass(turn === 0 ? active : inactive)
        setBClass(turn === 1 ? active : inactive)

        const newPos = pos === TOTAL - 1 ? 0 : pos + 1
        const newSrc = PHOTOS[newPos].small
        setPos(newPos)

        // Wait for the transition to finish and preload the next image
        turn === 0
          ? setTimeout(() => setSrcB(newSrc), transitionDuration)
          : setTimeout(() => setSrcA(newSrc), transitionDuration)

        setTurn((turn) => (turn === 0 ? 1 : 0))
        setFirst(false)
      },
      first ? 0 : slideshowInterval
    )
    return () => clearTimeout(timer)
  }, [turn, isHover])

  return (
    <div className='AlbumCover' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={`transition-opacity ${transitionDurationClass} ${aClass}`}>
        <img className='AlbumCover__img' src={srcA} alt='Album' />
      </div>

      <div className={`transition-opacity ${transitionDurationClass} ${bClass}`}>
        <img className='AlbumCover__img' src={srcB} alt='Album' />
      </div>
    </div>
  )
}
