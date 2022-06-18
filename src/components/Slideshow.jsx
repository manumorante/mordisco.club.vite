import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

const rdnMax = (max) => {
  return Math.floor(Math.random() * max)
}

export default function Slideshow({ photos, interval = 3, transition = 500, className }) {
  const imageA = React.createRef()
  const imageB = React.createRef()

  useEffect(() => {
    const posToStart = rdnMax(photos.length - 1)
    // Pon las dos pimeras imagenes
    imageA.current.src = photos[posToStart].small
    imageB.current.src = photos[posToStart + 1].small
    
    imageA.current.style.transitionDuration = transition + 'ms'
    imageB.current.style.transitionDuration = transition + 'ms'
    imageB.current.style.opacity = 0

    // Se llama la primera y una sola vez
    startSwap(imageA.current, imageB.current, posToStart)
  }, [])

  const swap = (a, b, src) => {
    a.style.opacity = 0
    b.style.opacity = 1
    setTimeout(() => (a.src = src), transition + 500)
  }

  // Se llama a si misma cambiando el orden de las imágenes
  const startSwap = (a, b, i) => {
    const swapTimeout = setTimeout(() => {
      i = i === photos.length - 1 ? 0 : i + 2
      swap(a, b, photos[i].small)

      startSwap(b, a, i)
    }, interval * 1000)
    return () => clearTimeout(swapTimeout)
  }

  const mainClass = classNames('Slideshow min-w-[300px] min-h-[300px]', className)
  const imgClass = 'absolute inset-0 transition-opacity w-full h-full object-cover'

  return (
    <div className={mainClass}>
      <div className='relative w-full h-full opacity-20'>
        <img data-id='A' ref={imageA} className={imgClass} src={null} alt='img' />
        <img data-id='B' ref={imageB} className={imgClass} src={null} alt='img' />
      </div>
    </div>
  )
}
