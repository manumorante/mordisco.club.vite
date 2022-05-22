import React, { useEffect, useState } from 'react'
import Loading from './Loading'

export default function Photo({ path, photo, dispatch, active }) {
  const [loading, setLoading] = useState()
  const [whenLoadedClasses, setWhenLoadedClasses] = useState('')

  useEffect(() => {
    if (!photo || photo.file === '') return

    setLoading(true)
  }, [photo.file])

  const handleOnLoad = () => {
    console.log('handleOnLoad')
    setLoading(false)

    if (!active) {
      setWhenLoadedClasses('cursor-pointer md:opacity-80 md:hover:opacity-100')
    }
  }

  const handleClick = () => {
    if (loading && active) return
    dispatch({ type: 'SET_PHOTO', photoIndex: photo.index })
  }

  const imgClasses = active ? 'object-contain' : 'object-cover'

  return (
    <div
      className={`Photo transition-all relative z-10 w-full h-full overflow-hidden ${whenLoadedClasses}`}>
      {loading && <Loading />}
      <img
        className={`transition-all rounded-sm w-full h-full ${imgClasses}`}
        src={`${path}/${photo.file}`}
        onLoad={handleOnLoad}
        onClick={handleClick}
      />
    </div>
  )
}
