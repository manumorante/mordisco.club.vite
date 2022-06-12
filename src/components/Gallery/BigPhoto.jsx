import React, { useState, useEffect } from 'react'
import Loading from './Loading'

export default function BigPhoto({ photo }) {
  const [loadSm, setLoadSm] = useState(false)
  const [loadBig, setLoadBig] = useState(false)
  const [smClass, setSmClass] = useState('')
  const [bigClass, setBigClass] = useState('')
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    // Grande cargada chica hizo el zoom-in
    if (loadBig && zoomed) {
      setBigClass('opacity-100')
      setSmClass('animate-fade-out')

      // Chica hizo zoom, esperando a grande
    } else if (loadSm && zoomed) {
      setSmClass('')

      // Chica cargada (no ha hecho el zoom)
    } else if (loadSm && !zoomed) {
      setSmClass('animate-zoom-in')
      setTimeout(() => setZoomed(true), 400)

      // Loading
    } else if (!loadSm && !zoomed) {
      setSmClass('scale-50')
      setBigClass('opacity-0')
    }
  }, [loadSm, zoomed, loadBig])

  return (
    <div className='BigPhoto'>
      <img className={`img ${smClass}`} src={photo.small} onLoad={() => setLoadSm(true)} />
      <img className={`img ${bigClass}`} src={photo.big} onLoad={() => setLoadBig(true)} />
      {loadSm && zoomed && !loadBig && <Loading />}
    </div>
  )
}
