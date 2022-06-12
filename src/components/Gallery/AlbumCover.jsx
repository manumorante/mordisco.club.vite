import React, { useEffect, useState } from 'react'

export default function AlbumCover({ album }) {
  const PHOTOS = album.photos
  const TOTAL = PHOTOS.length

  const [turn, setTurn] = useState(0)

  const [pos, setPos] = useState(0)
  const [posA, setPosA] = useState(0)
  const [posB, setPosB] = useState(1)

  const [aClass, setAClass] = useState('opacity-100')
  const [bClass, setBClass] = useState('opacity-0')

  const slideshowInterval = 2000
  const transitionDuration = 2000
  const transitionDurationClass = 'duration-2000'

  // Rotate turns
  useEffect(() => {
    const active = 'z-10 opacity-100'
    const inactive = 'z-0 opacity-0'

    const timer = setTimeout(() => {
      setAClass(turn === 0 ? active : inactive)
      setBClass(turn === 1 ? active : inactive)

      const newPos = pos === TOTAL - 1 ? 0 : pos + 1
      setPos(newPos)

      // Wait for the transition to finish and preload the next image
      setTimeout(() => {
        console.log('newPos', newPos)
        turn === 0 ? setPosB(newPos) : setPosA(newPos)
      }, transitionDuration)

      setTurn((turn) => (turn === 0 ? 1 : 0))
    }, slideshowInterval)
    return () => clearTimeout(timer)
  }, [turn])

  return (
    <div className='AlbumCover'>
      <div className={`transition-opacity ${transitionDurationClass} ${aClass}`}>
        <img className='AlbumCover__img' src={PHOTOS[posA].small} alt='Album' />
      </div>

      <div className={`transition-opacity ${transitionDurationClass} ${bClass}`}>
        <img className='AlbumCover__img' src={PHOTOS[posB].small} alt='Album' />
      </div>
    </div>
  )
}
